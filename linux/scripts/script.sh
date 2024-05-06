#!/usr/bin/env bash
set -euo pipefail

# variable declaration
name="Everyone"

# Using a variable
echo "Hello $name!"       # method 1

echo "Hello ${name}!"     # method 2

# set a default value
echo "Hello ${name:-"Anonymous"}!"

# length of the string
echo "Length : ${#name}"

# () <- subshell
(cd ~/Code/Content-writing/linux/scripts/; pwd)

# $() <- command substitution
var=$(pwd)
echo $var

# <() <- Process substitution
diff <(ls ./dotfiles) <(ls ./Downloads)

# $(()) <- arthematic expansion
echo $((3 + 4))

# cmdline args
echo "file itself: $0"
echo "first arg: $1"
echo "second agr: $2"

# conditional logic
if [[ name=="Shubham" ]]; then
  echo "Welcome Shubham!"
elif [[ name=="Everyone" ]]; then
 echo "Welcome Everyone!"
else 
  echo "Welcome Anonymous"
fi

# exit codes
# Exit code 0 -> Success
# Exit code non-zero -> Failure
if [[ name==" " ]]; then
  echo "Exit the program"
  exit 1
fi

# Conditionals
# string comparison
val="a"
[[ "$val" == "a" ]]  # Equal
[[ "$val" != "b" ]]  # Not Equal

[["$val" != "b"]]    # Syntax error

# Numberical comparison
num=1
[[ "$num" -eq 1 ]]   # Equal
[[ "$num" -ne 1 ]]   # Not Equal
[[ "$num" -lt 1 ]]   # Less than
[[ "$num" -gt 1 ]]   # Greater than
[[ "$num" -le 1 ]]   # Less than Equal to
[[ "$num" -ge 1 ]]   # Greater than Equal to

# variable existence
[[ -z $val ]]        # Var is null
[[ -n $val ]]        # Var is not-full

# File checks
[[ -f "file_path" ]] # File exists
[[ -d "dir_path" ]]  # Dir exists
[[ -e "file/dir" ]]  # File/Dir exists

# Combination
[[ $val -gt 5 ]] && [[ $val -lt 10 ]]    # Logical AND
[[ $val -gt 5 ]] || [[ $val -lt 3 ]]     # Logical OR

# Useful tools and command
# sleep n (in Seconds)

# Getting user input
read -r name                           # get input in a newline
read -p "What is your name?" name      # get input on the same line

# Arrays
my_array=(1 2 3 4 5)

echo ${my_array[0]}    # 1
echo ${my_array[@]}    # @ refer to all elements (1 2 3 4 5)
echo ${#my_array[@]}   # Prints length of array (5)

# For loops
for item in my_array[@]
do
  echo "$item"
done

# C-style
for ((i = 0; i < 10; i++)); do
  echo "$i"
done

# range
for i in {1..10}
do
  echo "$i"
done

# Pattern matching
for item in ./Code/Content-writing/Http/*.md
do
  echo "$item"
done

# Command result
for item in $(ls)
do
  echo "$item"
done

# While loops
counter=0
while [[ $counter -lt 5 ]]; do
  echo $counter
  ((counter++))
done

