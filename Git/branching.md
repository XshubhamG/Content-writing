# git branching

`HEAD` branch means current branch in which we are on.

## Create a new Branch

We can create a new Branch by two ways:

1. At the current commit,

```bash
$ git branch <branch_name>
```

2. At the specified previous commit,

```bash
$ git branch <branch_name> <commit_id>
```

## Switch to a Branch

We can Switch a certain a branch in two ways:

1. Using `checkout` command,

```bash
$ git checkout <branch_name>
```

2. Using `switch` command, (prefered)

```bash
$ git switch <branch_name>
```

## Rename a Branch

1. We can change the name of the current branch:

```bash
$ git branch -m <new_branch_name>
```

1. We can change the name of any different branch:

```bash
$ git branch -m <old_branch_name> <new_branch_name>
```

## Publishing/Uploading a branch to the remote repository

We can cannot create a new branch on a remote repository, to have your local branch shown remotely, we can push
our desired existing local branch.

```bash
$ git push -u origin <branch_name>
```
