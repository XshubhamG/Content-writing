# Git workflow cheatsheet

## Creating a git repository

| command             | Description                      |
| ------------------- | -------------------------------- |
| `git init`          | Initialize a new git repository  |
| `git clone git_url` | Clone an existing git repository |

## Making Changes into a git repository

| command                              | Description                                       |
| ------------------------------------ | ------------------------------------------------- |
| `git status`                         | Show the status of the repository                 |
| `git add [file/.(all)]`              | Add files to the index                            |
| `git commit -m` "commit message"     | Commit all the staged files to versioned history  |
| `git commit -am` "commit message"    | Commit all the tracked files to versioned history |
| `git commit --amend`                 | Amend the most recent commit                      |
| `git restore [file/.(all)]`          | Discard all the changes which is not staged       |
| `git restore --staged [file/.(all)]` | Unstage all the changes which is staged           |
| `git reset [file/.(all)]`            | Unstage files, keeping the changes                |
| `git reset --hard`                   | Revert everything to the last commit              |

## Basic user configuration

```bash
git config --global user.email "email"
git config --global user.name "name"
git config --global core.ui "auto"
git config --global init.defaultBranch "main"
git config --global core.editor "nvim"
```

## Observe your repository

| command                    | Description                           |
| -------------------------- | ------------------------------------- |
| `git log`                  | Show the commit history               |
| `git diff`                 | Show the changes which are not staged |
| `git diff --staged/cached` | Show the changes which are staged     |

## Git branching

| command                     | Description                          |
| --------------------------- | ------------------------------------ |
| `git checkout -b` "name"    | Create a new branch and switch to it |
| `git branch -av`            | Show all the branches                |
| `git branch -d` "name"      | Delete a branch                      |
| `git branch -m` "old" "new" | Rename a branch                      |
| `git merge` "branch"        | Merge two branches                   |

> [!NOTE] > `git checkout` command can also be used to switch btw commits as well.

## Git remote

| command                           | Description                    |
| --------------------------------- | ------------------------------ |
| `git remote add` "name" "url"     | Add a remote repository        |
| `git remote -v`                   | Show all the remote repository |
| `git remote rm` "name"            | Remove a remote repository     |
| `git remote set-url` "name" "url" | Change the remote repository   |

## Tracking path changes

| command                | Description                           |
| ---------------------- | ------------------------------------- |
| `git rm [file/.(all)]` | Remove files from the index           |
| `git mv` [exist] [new] | Rename files                          |
| `git log --stat -M`    | Show the changes which are not staged |

## Ignore files

- A `.gitignore` file specifies intentionally untracked files that Git should ignore

```gitignore
/logs/*

# "!" means don't ignore
!logs/.gitkeep

/# Ignore Mac system files
.DS_store

# Ignore node_modules folder
node_modules

# Ignore SASS config files
.sass-cache

```

## `.git` directory

- `.git` directory contains information about the repository.
- `.git` directory is ignored by Git.
- folder structure of `.git`

```bash
.git
├──  config
├── description
├──  HEAD
├── hooks
├──  info
├──  index
├── objects
└── refs
```

- `config`is a text file that contains your git configuration for the current repo. If you look into
  it, you would see some basic settings for you repo like the author, filemode etc.
- `HEAD` contains the current head of the repo. Depending on what you have set your "default" branch
  to be, it will be `refs/heads/master` or `refs/heads/main`.
- `hook` contains scripts that you can run before/after git does anything.
- `info` contains information about the repo.
- `index` contains the files that are currently staged for commit.
- `objects` contains the files that are currently in the repo.
- `refs` contains the files that are currently in the repo.

## Git stash

- This is a temporary storage of your changes. It is not stored in the `repo`. It is only stored in
  your local machine. `stash` command is not limited to branch.

| command           | Description        |
| ----------------- | ------------------ |
| `git stash`       | Stash your changes |
| `git stash pop`   | Pop your changes   |
| `git stash list`  | List your stash    |
| `git stash clear` | Clear your stash   |
| `git stash apply` | Apply your stash   |

> [!NOTE]
>
> - `stash` command is not limited to branch.

## Git rebase

> [!NOTE]
> NEVER RUN THIS COMMAND ON THE `MASTER/MAIN` BRANCH. It will break everything.
