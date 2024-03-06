#!/usr/bin/bash

# Get string length
distro="arch linux"
length=${#distro}

echo $length # 10

# string concatenation
str1="hand"
str2="book"
str3=$str1$str2
echo $str3 # handbook

# Finding substring
expr index "$str3" "$str2" # 5


# Extracting substring
foss="Arch is a free operating system"
echo ${foss:0:4} # Arch

# Replacing substring
echo ${foss/Arch/Debian} # Debian is a free operating system 

# Deleting substring
fact="sun is a big star"
echo ${fact/big} # sun is a star

# Converting Uppercase or lowercase
name="Shubham Giri"
echo ${name^^}
echo ${name,,}
