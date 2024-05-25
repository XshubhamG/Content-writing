# Git Basic

## Getting a Git repository

You typically obtain a Git repository in one of two ways:

1. You can take a local directory that is currently not under version control, and turn it into a Git
   repository, or
1. You can clone an existing Git repository from elsewhere.

In either case, you end up with a Git repository on your local machine, ready for work.

## Creating a new Git repository

```bash
git init # initializing a new git repository in the current directory
```

## Checking out an existing Git repository

```bash
git clone https://github.com/username/repo.git # cloning an existing repository
```

Each `files` or `sub-directory` in your working directory can be one of the two states:

1. `Tracked`- Tracked files are files that were in the last snapshot, as well as newly staged files;

2. `Untracked`- Any files that are not tracked by git.

As you edit staged or unmodified files, Git sees them as modified, because you've changed them since
your last commit.

## Checking the Status of Your files

```bash
$ git status

>> On brach master
>> Your branch is up-to-date with 'origin/master'.
>> nothing to commit, working tree clean.
```

- For one line status we can use `git status -s` command.

## Ignoring files

- Often, you’ll have a class of files that you don’t want Git to automatically add or even show you as
  being `untracked`. These are generally automatically generated `files` such as `log` files or files
  produced by your build system. In such cases, you can create a file listing patterns to match them
  named `.gitignore`.

The rules for the patterns you can put in the .gitignore file are as follows:

- Blank lines or lines starting with # are ignored.
- Standard glob patterns work, and will be applied recursively throughout the entire working
  tree.
- You can start patterns with a forward slash (/) to avoid recursivity.
- You can end patterns with a forward slash (/) to specify a directory.
- You can negate a pattern by starting it with an exclamation point (!).

```gitignore
# ignore all .a files
*.a
# but do track lib.a, even though you're ignoring .a files above
!lib.a
# only ignore the TODO file in the current directory, not subdir/TODO
/TODO
# ignore all files in any directory named build
build/
# ignore doc/notes.txt, but not doc/server/arch.txt
doc/*.txt
# ignore all .pdf files in the doc/ directory and any of its subdirectories
doc/**/*.pdf
```

## Removing Files

- You can remove files from your working directory by using the `rm` command.
- You can also use the `git rm` command to remove files from the index. The `git rm` command is
  similar to the `rm` command, but it also removes files from the index.
- The next time you commit, the file will be gone and no longer tracked.
- `git rm --cached <FILE>` removes the file from the index and from the working tree.

## Viewing the Commit History

- You can view the commit history of your repository using the `git log` command.

## Undoing Things

- At any stage, you may want to undo something. Here, we’ll review a few basic tools for undoing
  changes that you’ve made. Be careful, because you can’t always undo some of these undos. This is
  one of the few areas in Git where you may lose some work if you do it wrong.

- One of the common undos takes place when you commit too early and possibly forget to add some
  files, or you mess up your commit message. If you want to redo that commit, make the additional
  changes you forgot, stage them, and commit again using the --amend option.

```bash
git commit --amend
```

- This command takes your staging area and uses it for the commit. If you’ve made no changes since
  your last commit (for instance, you run this command immediately after your previous commit),
  then your snapshot will look exactly the same, and all you’ll change is your commit message.

## Unstaging a staged files

```bash
git reset <Branch_name> <file_name>
```

## unmodifying a modified file

```bash
git checkout -- <file_name>
```

- It’s important to understand that git checkout -- <file_name> is a dangerous command.
  Any local changes you made to that file are gone — Git just replaced that file with
  the last staged or committed version. Don’t ever use this command unless you really know what
  you’re doing.

## Undoing things using git restore

```bash
git restore --staged <file_name>  # NOTE: this is to unstage the file

git restore <file_name>  # NOTE: this is to unmodify the file [[ DANGEROUS ]]
```
