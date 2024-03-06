#!/bin/bash

# display msg multiple times using for loop
for ((i = 1; i <= 10; i++)); do
  echo "$i"
done


# list all the directory inside `~/.config` using for loop
for i in ~/.config/*
do
  echo "$i"
done

# multiple of any using while loop
num=1
while [[ $num -le 10 ]]; do
  echo "$1 x $num = $((num * $1))"
  num=$((num + 1))
done

# multiple of any using until loop
num2=1
until [[ $num2 -gt 10 ]]; do
  echo "$((num2 * $1))"
  num2=$((num2 + 1))
done

# Array iteration with loops
prime=(2 3 5 7 11 13 17 19 23 29)
for i in "${prime[@]}"
do
  echo "$i"
done
