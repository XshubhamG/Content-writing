# Common tasks and Esstential tools

## Package Management

Package management is a method of installing and maintaining software on the system. Today, most people can satisfy all
of their software needs by installing packages from their Linux distributor.

- Packaging Systems : Most distributions fall into one of two camps of packaging technologies: the Debian .deb camp and
  the RedHat .rpm camp. There are some exceptions such as gentoo, slackware or Arch but most of other uses one of these
  basic systems.

| Packaging System   | Distributions                            |
| ------------------ | ---------------------------------------- |
| Debian Style(.deb) | Debian, Ubuntu, Linux Mint, Rasphian     |
| RedHat Style(.rpm) | Fedora, Centos, RedHat Enterprises Linux |

- Virtually all software for a Linux system will be found on the Internet. Most of it will be provided by the
  distribution vendor in the form of package files, and the rest will be available in source code form that can be
  installed manually.

- Package Files : The basic unit of software in a packaging system is the package file. A package file is a compressed
  collection of files that comprise the software package. A package may consist of numerous programs and data files
  that support the programs.

- Repository : While some software projects choose to perform their own packaging and distributions most packages today
  are created by the distribution vendors and interested third parties.

  Packages are made available to the users of a distribution in central repositories that may contain many thousands of
  packages, each specially built and maintained for the distribution.

- Dependencies : Programs are seldom “standalone”; rather they rely on the presence of other software components to get
  their work done. Common activities, such as input/output for example, are handled by routines shared by many programs.

### High and Low-level Package Tools

Package management systems usually consist of two types of tools.
• Low-level tools which handle tasks such as installing and removing package files
• High-level tools that perform metadata searching and dependency resolution.

| Distributions  | Low-level Tools | High-level Tools       |
| -------------- | --------------- | ---------------------- |
| Debian Style   | dpkg            | apt, apt-get, aptitude |
| RedHat, Fedora | rpm             | yum, dnf               |

## Storage Media

| Command       | Description                         |
| ------------- | ----------------------------------- |
| `mount`       | Mount a file system                 |
| `unmount`     | Unmount a file system               |
| `fsck`        | Check and repair a file system      |
| `fdisk`       | Manipulate disk partition table     |
| `mkfs`        | Create a file system                |
| `dd`          | Convert and copy a file             |
| `genisoimage` | Create an ISO image file            |
| `wodium`      | Write data to optical Storage media |
| `md5sum`      | Calculate an MD5 checksums          |

## Networking

| Command      | Description                                                    |
| ------------ | -------------------------------------------------------------- |
| `ping`       | send an ECHO_REQUEST to network hosts                          |
| `traceroute` | Print the route packets trace to a network host                |
| `ip`         | Show / manipulate routing, devices, policy routing and tunnels |
| `netcast`    | Print network connections, routing tables                      |
| `ftp`        | Internet file transfer program                                 |
| `wget`       | Non-interactive network downloader                             |
| `ssh`        | OpenSSH SSH client (remote login program)                      |

- `ping` : The most basic network command is ping. The ping command sends a special network packet called an ICMP
  ECHO_REQUEST to a specified host. Most network devices receiving this packet will reply to it, allowing the network
  connection to be verified.

```bash
$ ping google.com # to see whether we can reach `google.com`
```

- `tracepath` : The traceroute program (some systems use the similar tracepath program instead) lists all the “hops”
  network traffic takes to get from the local system to a specified host.

- `ip` : The ip program is a multi-purpose network configuration tool that makes use of the full range networking
  of features available in modern Linux kernels.

- `netstat` : The netstat program is used to examine various network settings and statistics. Through the use of
  its many options, we can look at a variety of features in our network setup.

- `ftp` : Before there were web browsers, there was the ftp program. ftp is used to communicate with FTP servers,
  machines that contain files that can be uploaded and downloaded over a network.

- `wget` : Another popular command-line program for file downloading is wget. It is useful for downloading content
  from both web and FTP sites. Single files, multiple files, and even entire sites can be downloaded.

### Secure communication with Remote hosts

A new protocol called Secure Shell (SSH) was developed. SSH solves the two basic problems of secure communication
with a remote host.

1. It authenticates that the remote host is who it says it is (thus preventing so-called man-in-the-middle attacks).
2. It encrypts all of the communications between the local and remote hosts.

SSH consists of two parts. An SSH server runs on the remote host, listening for incoming connections, by default, on
port 22, while an SSH client is used on the local system to communicate with the remote server.

- `scp` : he first, scp (secure copy) is used much like the familiar cp program to copy files. The most notable
  difference is that the source or destination pathnames may be preceded with the name of a remote host, followed by
  a colon character.

- `sftp` : The second SSH file-copying program is sftp which, as its name implies, is a secure replacement for the ftp
  program. sftp works much like the original ftp program that we used earlier; however, instead of transmitting
  everything in cleartext, it uses an SSH encrypted tunnel.

## Searching for files

| Command  | Description                                             |
| -------- | ------------------------------------------------------- |
| `locate` | Find files by names                                     |
| `find`   | Search for files in a directory heirachy                |
| `xargs`  | Build and execute command lines from the standard input |
| `touch`  | Change file times                                       |
| `stat`   | Display files and file system status                    |

## Archiving and Backup

- `gzip` : The gzip program is used to compress one or more files. When executed, it replaces the original file
  with a compressed version of the original.

```bash
$ gzip myscripts.sh # convert into myscripts.sh.gz

```

- `gunzip` : The corresponding gunzip program is used to restore compressed files to their original, uncompressed form.

```bash
$ gunzip myscripts.sh.gz # convert into myscripts.sh

```

- `bzip2` : It is another compressing alogrithms simliar to gzip work exactly like it with a different extension.

```bash
# compress
$ bzip2 myscripts.sh # convert into myscripts.sh.bz2

# decompress
$ bzip2 -d myscripts.sh.bz2 # convert into myscripts.sh
```

### Archiving Files

A common file-management task often used in conjunction with compression is archiving. Archiving is the process of
gathering up many files and bundling them together into a single large file. Archiving is often done as part of system
backups. It is also used when old data is moved from a system to some type of long-term storage.

- `tar` : In the Unix-like world of software, the tar program is the classic tool for archiving files. Its name,
  short for tape archive, reveals its roots as a tool for making backup tapes. While it is still used for that
  traditional task, it is equally adept on other storage devices. We often see filenames that end with the extension
  `.tar` or `.tgz`, which indicate a “plain” tar archive and a gzipped archive, respectively.

| Mode | Description                                              |
| ---- | -------------------------------------------------------- |
| c    | Create an archive file from a list of files or directory |
| x    | Extract an archive                                       |
| r    | Append a specific pathnames to the end of an archive     |
| t    | List the content of the archve                           |

## Regular Expression

- `grep` : 'global regular expression print'.
  grep [options] regex [file...]

| option | Long option             | Description                                                            |
| ------ | ----------------------- | ---------------------------------------------------------------------- |
| `-i`   | --ignore-case           | Ignore case.                                                           |
| `-v`   | --invert-match          | Invert match. print which doesn't match                                |
| `-c`   | --count                 | Print the number of matches                                            |
| `-l`   | --files-with-matches    | Print the name of the files contains the matches                       |
| `-L`   | --files-without-matches | Print the name of the files doesn't contains the matches               |
| `-n`   | --line-number           | Prefix each matching line with the number of the line within the files |
| `-h`   | --no-filename           | For multi-file searches, suppress the output of filenames              |

- Metacharacters : `^ $ . [ ] { } - ? *  ( ) | \`
- Literals : All other characters are considered literals, though the blackslash is is used in a few cases to create
  meta sequences, as well as allowing the Metacharacters to be escaped and treated as literals instead of being interpted
  as Metacharacters.

| Meta-characters | Expansion                                  |
| --------------- | ------------------------------------------ |
| `.`             | Used to match any character                |
| `^`             | Beginning of the line                      |
| `$`             | End of the lines                           |
| `[]`            | match any character inside the brackets    |
| `[^]`           | Negation exclude character inside brackets |

- for range of characters like all english alphabets: `[A-Z]`
- _all no_spaced_ letters: `[A-Za-z0-9]`

- `POSIX` character: the POSIX standards introduced a concept called a locale, which could be adjusted to select the
  character set needed for a particular location.

| Character Classs | Description                                    |
| ---------------- | ---------------------------------------------- |
| `[:alnum:]`      | [A-Za-z0-9]                                    |
| `[:word:]`       | [A-Za-z0-9] + '\_'                             |
| `[:alpha:]`      | [A-Za-z]                                       |
| `[:blank:]`      | Include space and tab character                |
| `[:digit:]`      | The numerals 0 to 9                            |
| `[:space:]`      | The whitespace characters                      |
| `[:xdigit:]`     | Character used to express hexadecimal numbers. |

- `Alternation` : The first of the extended regular expression features we will discuss is called alternation,
  which is the facility that allows a match to occur from among a set of expressions. Just as a bracket expression
  allows a single character to match from a set of specified characters, alternation allows matches from a set
  of strings or other regular expressions.

### Quantifiers

- `?`: Match an element Zero or One Time
- `*`: Match an element Zero or More Times
- `+`: Match an element One or More Times

## Text Processing

| Command  | Description                                       |
| -------- | ------------------------------------------------- |
| `cat`    | Concatenate files and printout the final output   |
| `sort`   | Sort lines of text files                          |
| `uniq`   | Report or omit repeated line                      |
| `cut`    | Remove section from each line of files            |
| `paste`  | Merge lines of files                              |
| `join`   | Join lines of two files on a common field         |
| `comm`   | Compare two sorted files line by line             |
| `diff`   | Compare two files line by line                    |
| `patch`  | Apply a diff file to original                     |
| `tr`     | Translate or delete character                     |
| `sed`    | Stream editor for filtering and transforming text |
| `aspell` | Interactive spell checker                         |

## Formatting Output

| Command  | Description                       |
| -------- | --------------------------------- |
| `nl`     | Number lines                      |
| `fold`   | Wrap each line to specific length |
| `fmt`    | A simple text formatter           |
| `printf` | Format and print data             |
| `pr`     | Prepare text for printing         |
| `groff`  | A documentation formatting system |
