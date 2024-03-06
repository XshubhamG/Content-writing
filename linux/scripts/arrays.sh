#!/bin/bash

distro=("arch" "ubuntu" "gentoo" "fedora")

# first element
echo ${distro[0]}

# length
echo ${#distro[@]}

# print all 
echo ${distro[*]}

# append new element in the end
distro+=("kali")
echo ${distro[*]}

# deleting an element
unset distro[1]

echo ${distro[1]}
echo ${#distro[@]}
