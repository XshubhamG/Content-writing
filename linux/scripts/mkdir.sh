#!/usr/bin/bash

echo -n "Name of the directory : "
read dir

mkdir -p $dir
cd $dir

echo -n "Name of the file : "
read file
touch $file &

