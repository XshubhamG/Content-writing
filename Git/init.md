# Making a git repository locally

```bash
$ git init                       <-- Initialize an empty git repository -->
$ git status                     <-- Check the status of local git repository -->

$ git add <file_name>            <-- Add the <file_name> into staging area(Track_the_file) -->

$ git reset .                   <-- Unstage all the files -->
$ git rm --cached <file_name>    <-- Remove the <file_name> from the staging area(Untrack_the_file) -->
$ git commit -m "commit msg"     <-- save the changes into commit (like_Snapshot_of_the_repository) -->

```

## Connecting local git repository to a remote services (github)

```bash
$ git branch -m main
$ git remote add origin [url]()
$ git push -u origin main

```
