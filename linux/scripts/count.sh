#!/usr/bin/zsh

# first approach
# echo -n "Please enter a filename : "
# read filename
# nlines=$(wc -l < $filename)
#
# echo "There are $nlines lines in $filename"

# second approach using arguments
nlines=$(wc -l < $1)
nwords=$(wc -w < $1)

echo "There are $nlines lines in $1"
echo "There are $nwords words in $1"
