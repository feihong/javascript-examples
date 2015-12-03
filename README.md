Feihong's JavaScript Examples
=============================

Install dependencies in virtualenv:

```
pip install -r requirements.txt
say "Hey I'm finally done!"
```

Configuration file for the site is `conf.py`.

To build the site:

```
nikola build
```

To remove all unknown files from generated site:

```
nikola check -f --clean-files
```

To see it:

```
nikola auto -b
```

To check all available commands:

```
nikola help
```

Deploy to GitHub Pages:

```
nikola github_deploy
```
