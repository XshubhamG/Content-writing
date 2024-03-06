#!/usr/bin/zsh

# echo command
echo "--------------------"

#NOTE: Variables - by convention UPPERCASE

# NAME="Shubham"
# echo "My Name is $NAME"

#NOTE: USER Input

# echo "Enter your name: "
# read name
# read age
# echo "Hello $name, you are $age year old"

#NOTE: executing commands as Variables

# myself=$(whoami)
# echo $myself

#NOTE: use export keyword to export a variable to the global context

# export $name

#NOTE: conditional

if [[ $name == "shubham" ]]; then
    echo "hi shubham"
else 
    echo "Who are you ?"
fi

#NOTE: case

case "$VAR" in
  1) echo 1
  ;;
  2|3) echo 2 or 3
  ;;
  *) echo default
  ;;
esac

#NOTE: while loops

while [[ condition ]]; do
   echo "Loop" 
done

#NOTE: until loops

until [[ $order == 'tea' ]]; do
  echo "Would you like tea or coffe ?"
  read order
done
echo "Execllent choice, Here is your tea"

#NOTE: for loop

for VAR in LIST
do
  echo "$VAR"
done

