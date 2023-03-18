#!/bin/bash

export LC_CTYPE="en_US.UTF-8"
mkdir -p ./tmp

for size in 16 32 48 140 150 400; do
	inkscape -o ./tmp/$size.png -w $size -h $size favicon.svg 
done

# Generate favicon
convert ./tmp/16.png ./tmp/32.png ./tmp/48.png favicon.ico

# Generate android and webapp icons
convert ./tmp/150.png -background none -gravity center -extent 192x192 -fill black -opaque none 192.png
convert ./tmp/400.png -background none -gravity center -extent 512x512 -fill black -opaque none 512.png

# Generate Safari icon
convert ./icon.svg -negate -threshold 0 -negate mask-icon.svg

# Generate iOS icon
convert ./tmp/140.png -background none -gravity center -extent 180x180 -fill black -opaque none 180.png

rm -r ./tmp
