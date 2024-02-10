# Linux Foundation

## Learning the Shell

- When we speak of the command line, we are really referring to the shell. The shell is a
  program that takes keyboard commands and passes them to the operating system to carry
  out.
- e.g: bash, zsh fish etc

### Some Simple command

```bash
$ date         # which displays the current date & time
$ cal          # which displays the calender
$ df           # displays disk free space
$ free         # displays free space in the current disk

```

- We can end terminal session by closing the terminal application or `Ctrl+d` or `exit`.

### Navigation

```bash
$ pwd          # Print name of the current Directory
$ cd           # Change Directory
$ ls           # list Directory content

```

### Exploring the System

```bash
$ ls           # list Directory content
$ file         # Determine file type
$ less         # View file contents

```

- Commands are often followed by one or more options that modify their behavior, and further,
  by one or more arguments, the items upon which the command act.

```bash
$ command -options arguments

# example
$ ls -lt       # list the content in more detail

```

### Important Directories Found on Linux System

| Directory | Comments                                             |
| --------- | ---------------------------------------------------- |
| /         | The root dir. where everythings begins               |
| /bin      | Contains binaries Important to boot & run the system |
| /etc      | Contains system configuration files                  |
| /home     | Contains user home directories                       |
| /lib      | Contains libraries                                   |
| /mnt      | Contains mount points                                |
| /opt      | Contains optional software                           |
| /proc     | Contains information about current processes         |
| /root     | Home directory for the root user                     |
| /sbin     | Contains binaries Important to boot & run the system |
| /tmp      | Contains temporary files                             |
| /usr      | Contains user programs                               |
| /usr/bin  | Contains executable programs installed by system     |
| /var      | Contains variable files                              |
| /boot     | Contains boot files                                  |
| /dev      | Contains device files                                |

### Manipulating files and directories

```bash
$ mkdir         # make directory
$ cp            # copy files
$ mv            # move files
$ rm            # remove files and directories
$ ln            # create links

```

- `mkdir` command create a new directory.
- `cp` command copy files or directories.
- `mv` command move or rename files.
- `rm` command remove files and directories.
- `ln` command create hard or sybolic links.

```bash
# mkdir
$ mkdir Playground                             # create a new directory named Playground
$ cd Playground                                # change directory to Playground

# cp
$ mkdir dir1 dir2                              # create 2 directories
$ cp /etc/passwd ./                            # copy /etc/passwd to current directory

# mv
$ mv passwd funny_passwd                       # rename passwd to funny_passwd
$ mv funny_passwd dir1                         # move funny_passwd to dir1
$ mv dir1/funny_passwd dir2                    # move funny_passwd to dir2

# ln
$ ln funny_passwd funny_hard                   # create a hard link named funny_hard
$ ln -s funny_passwd funny_symbolic            # create a symbolic link named funny_symbolic

# rm
$ cd ~
$ rm -rf Playground                            # remove the directory

```

### Working with Commands

```bash
$ type                    # indicate how a command name is interpreted
$ which                   # Display the full path to a command
$ man                     # Display the manual page for a command
$ help                    # Display help about a command
$ apropos                 # Search for a command in the manual pages
$ alias                   # Create an alias for a command

```

- What exactly are commands?

1. An **executable program** like all those files we saw in /usr/bin. Within this
   category, programs can be compiled binaries such as programs written in C and
   C++, or programs written in scripting languages such as the shell, Perl, Python,
   Ruby, and so on.
2. A **command built** into the shell itself. bash supports a number of commands in-
   ternally called shell builtins. The cd command, for example, is a shell builtin.
3. A **shell function** are miniature shell scripts incorporated into the
   environment. We will cover configuring the environment and writing shell func-
   tions in later chapters, but for now, just be aware that they exist.
4. An **Aliases** are commands that we can define ourselves, built from other
   commands.

### Redirection

```bash
$ cat                    # Concatenate files
$ sort                   # Sort lines of text files
$ uniq                   # Report or omit repeated lines
$ grep                   # Print lines matching a pattern
$ wc                     # Print newline, word, and byte counts for each file
$ head                   # Output the first part of files
$ tail                   # Output the last part of files

```


