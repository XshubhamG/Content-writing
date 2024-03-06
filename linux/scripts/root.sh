#!/bin/bash

if [[ $1 -gt 5 ]]; then
  echo "greater than 5"
elif [[ $1 -lt 5 ]]; then
  echo "less than 5"
else  
  echo "exactly 5"
fi

CHAR=$1

case $CHAR in
[a-z])
echo "Small Alphabet." ;;
[A-Z])
echo "Big Alphabet." ;;
[0-9])
echo "Number." ;;
*)
echo "Special Character."
esac
