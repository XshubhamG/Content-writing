#!/bin/bash

# Bash function with argument
iseven () {
  if [ $(($1 % 2)) -eq 0 ]; then
    echo "$1 is even."
  else
    echo "$1 is odd."
  fi
}

iseven 3
iseven 4
iseven 20

# Recursive function
factorial () {
  if [ $1 -le 1 ]; then
    echo 1
  else
    last=$(factorial $(( $1 -1)))
    echo $(( $1 * last ))
  fi
}

echo -n "4! is: "
factorial 4
echo -n "5! is: "
factorial 5
echo -n "6! is: "
factorial 6

# Excercise 

# Is it +ve?
isPositive () {
  if [ $1 -ge 0]; then
    echo "Positive"
  else 
    echo "Negative"
  fi
}

# multiplication table
echo "multiplication table"
table () {
  for ((i = 1; i <= 10; i++)); do
    echo "$1 x $i = $(($1 * $i))"
  done
}


# isPrime
read -p "Enter number: " num
isprime () {
  for((i=2; i<=num/2; i++)); do
    if [ $((num%i)) -eq 0 ]; then
      echo "$num is not a prime number."
      exit
    fi
  done
  echo "$num is prime number."
}
isprime $num

