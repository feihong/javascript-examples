Feihong's JavaScript Examples
=============================

Install dependencies in virtualenv:

```
# Dependencies that are needed to compile everything on Ubuntu:
sudo apt-get install libxml2-dev libxslt1-dev zlib1g-dev
pip install -r requirements.txt
say "Hey I'm finally done!"
```

Configuration file for the site is `conf.py`.

To build the site:

```
nikola build
```

To see it:

```
nikola auto -b
```

To check all available commands:

```
nikola help
```
