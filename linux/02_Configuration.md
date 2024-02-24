# Configure your environment

The shell maintains a body of information during our shell session called the environment.
Programs use data stored in the environment to determine facts about the system's configuration.
While most programs use configuration files to store program settings, some programs also look
for values stored in the environment to adjust their behavior. Knowing this, we can use
the environment to customize our shell experience.

| Command    | Description                                          |
| ---------- | ---------------------------------------------------- |
| `printenv` | Print all the environment variable                   |
| `set`      | Set shell option                                     |
| `export`   | Export environment to subswquently executed programs |
| `alias`    | Create an alias for a command                        |

## What is Stored in the environment ?

The shell stores two basic types of data in the environment, `environment variable` & `shell variable`.
`Shell variables` are bits of data placed there by `bash`,and `environment variables` are everything else.
In addition to variables, the shell stores some programmatic data, namely `aliases` and `shell functions`.

- Startup Files for Login Shell Sessions

| File               | Content                                                            |
| ------------------ | ------------------------------------------------------------------ |
| `/etc/profile`     | A global configuration file that applies to all users              |
| `~/.bash_profile`  | A user's personal startup files                                    |
| `/etc/bash.bashrc` |                                                                    |
| `~/.bashrc`        | A user's personal setup file. It can be used to extend or override |

## Introduction of `vi`

- Moving the cursor Around

| Key                 | Move the cursor                                                |
| ------------------- | -------------------------------------------------------------- |
| `l` or `->`         | Right one character                                            |
| `h` or `<-`         | Left one character                                             |
| `j` or `down arrow` | Down one line                                                  |
| k or `up arrow`     | Up one line                                                    |
| `0`(zero)           | To the beginning of the current line                           |
| `$`                 | To the end of the current line                                 |
| `w`                 | To the beginning of the next word or punctuation character     |
| `W`                 | To the beginning of the next word, ignoring punctuation        |
| `b`                 | To the beginning of the previous word or punctuation character |
| `B`                 | To the beginning of the previous word ignoring punctuation     |
| `numberG`           | To the line `number`                                           |
| `G`                 | To the last line of the file                                   |
| `o` or `O`          | create an empty line below or above the current line           |
