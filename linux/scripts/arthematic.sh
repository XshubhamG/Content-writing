#!/usr/bin/zsh

#NOTE: additon (+), subtraction (-), multiplication(*), division (/), module (%) & power (^)

fs1=$(du -b $1 | cut -f1) 
fs2=$(du -b $2 | cut -f1)

echo "File size of $1 is : $fs1"
echo "File size of $2 is : $fs2"

total=$(($fs1 + $fs2))

echo "Total file size is : $total"

