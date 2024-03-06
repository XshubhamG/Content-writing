#!/usr/bin/zsh

echo "Hello World!"

# name
echo "----------"
echo "Hello, $USER"

# current directory
echo "----------"
echo "Current directory : $(pwd)"

# path of home
echo "----------"
echo "Home directory : $HOME"

# default shell
echo "----------"
echo "Default Shell : $SHELL"

# read variable
echo "----------"
# echo "What is your name ?" 
# read name
# echo "Hello $name"

# constant readonly variables
readonly PI=3.14159

# command subsitution
echo "----------"
echo "Today : $(date)" # or `data`

# full name
echo "----------"
echo "What is your full name ?" 
read fullname
echo "$fullname"
