# Setting up `git` for Arch Linux

```bash
sudo pacman -S git # installing git
git config --global user.email "YOUR_EMAIL"
git config --global user.name "YOUR_NAME"
```

`YOUR_EMAIL` and `YOUR_NAME` are your email and name, respectively. which will be used in commit
messages and pull requests for all of the repositories. `--global` will make this setting to be saved
in a `~/.gitconfig` file in your home directory.

## Your Indentity

```bash
git config --global user.email "YOUR_EMAIL"
git config --global user.name "YOUR_NAME"
```

## Your editor

```bash
git config --global core.editor nvim
```

## Your default branch name

```bash
git config --global init.defaultBranch main
```

## checking your settings

```bash
git config --list
```

## Getting help

```bash
git help config # help for `git config` command
```
