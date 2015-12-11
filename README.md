Feihong's JavaScript Examples
=============================

Install dependencies in virtualenv:

```
mkvirtualenv static-site
pip install -r requirements.txt
```

Configuration for the site can be found in `tasks.py`.

To run the server:

```
invoke serve
```

To build the site:

```
invoke build
```

Deploy to GitHub Pages:

```
invoke publish
```
