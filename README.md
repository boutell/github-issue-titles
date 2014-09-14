# github-issue-titles

## Install

```
npm install --global github-issue-titles
```

## Usage

Print the titles of all open github issues on a repo, one per line:

```
github-issue-titles username password owner reponame
```

That's it, that's all.

## Usernames versus owners

Note that "owner" and "username" might not be the same. For instance, if I want the issues for the [Apostrophe repo](https://github.com/punkave/apostrophe), I'll type:

```
github-issue-titles boutell noneofyourbusiness punkave apostrophe
```

## Changelog

0.1.0: it lives! Super simple, based on the `request` module.
