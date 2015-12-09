import os.path as op
from mako.template import Template
from mako.lookup import TemplateLookup
import bottle
from invoke import run, task
from pathlib2 import Path


SITE = '/javascript-examples/'
IMPORTS = [
    'from filters import markdown, rst'
]

lookup = TemplateLookup(directories=['templates'])

app = bottle.Bottle()

if SITE != '/':
    @app.route('/')
    def index():
        return '<a href="%s">Go to site</a>' % SITE


@app.route(SITE)
@app.route(SITE + '<path:path>')
def page(path=''):
    file_ = get_file(path)
    if not file_.endswith('.html'):
        return bottle.static_file(path, root='site')
    return generate(file_)


@task
def serve():
    from livereload import Server
    from livereload.watcher import Watcher
    watcher = Watcher()
    watcher.watch('site', ignore=lambda p: p.endswith('.babel'))
    watcher.watch('templates')
    server = Server(app, watcher)
    server.serve(port=8000)


@task
def build():
    clean()
    for src in Path('site').rglob('*?.*'):
        dest = Path('build') / src.relative_to('site')
        print dest
        copy_or_generate(src, dest)


@task
def clean():
    if op.isdir('build'):
        run('rm -rf build/*')


@task
def buildjs(name):
    if name == 'lib':
        run("""browserify \
          -r lodash -r underscore.string \
          -r react -r react-dom -r radium \
          -o site/js/lib-bundle.js
        """)
    else:
        run("""browserify --debug --no-bundle-external --extension=.babel \
          site/%(name)s/app.babel \
          -o site/%(name)s/bundle.js \
          -t [ babelify --extensions .babel --presets [ es2015 react ] ]
        """ % {'name': name})


@task
def watchjs(name):
    run("""watchify --debug --no-bundle-external --extension=.babel \
      site/%(name)s/app.babel \
      -o site/%(name)s/bundle.js \
      -t [ babelify --extensions .babel --presets [ es2015 react ] ] \
      -v
    """ % {'name': name})


@task
def publish():
    build()
    run('ghp-import -n -p build')


def get_file(path):
    result = op.join('site', path)
    if op.isfile(result):
        return result
    if op.isdir(result) and op.isfile(op.join(result, 'index.html')):
        return op.join(result, 'index.html')
    return 'site/404.html'


def generate(path):
    template = Template(open(path).read(), lookup=lookup, imports=IMPORTS)
    return template.render(site=SITE)


def copy_or_generate(src, dest):
    import shutil
    if not dest.exists():
        dest.parent.mkdir(parents=True, exist_ok=True)
    if src.suffix == '.html':
        with dest.open('w') as fp:
            fp.write(generate(str(src)))
    else:
        shutil.copy(str(src), str(dest))
