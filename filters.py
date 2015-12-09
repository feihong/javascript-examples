from markdown2 import markdown
from docutils.core import publish_parts


def rst(s):
    return publish_parts(s, writer_name="html")["html_body"]
