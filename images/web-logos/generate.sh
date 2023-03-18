#!/bin/bash

export LC_CTYPE="en_US.UTF-8"
mkdir -p ./tmp

for size in 16 32 48 98 140 150 210 400 435; do
	inkscape -o ./tmp/$size.png -w $size -h $size favicon.svg 
done

# Generate favicon
convert ./tmp/16.png ./tmp/32.png ./tmp/48.png favicon.ico

# Generate android and webapp icons
convert ./tmp/150.png -background none -gravity center -extent 192x192 -fill black -opaque none 192.png
convert ./tmp/400.png -background none -gravity center -extent 512x512 -fill black -opaque none 512.png

# Generate Safari icon
convert ./favicon.svg -negate -threshold 0 -negate mask-icon.svg

# Generate iOS icon
convert ./tmp/140.png -background none -gravity center -extent 180x180 -fill black -opaque none 180.png

# Generate IE and Edge Windows 8.1 tiles icons
convert ./tmp/98.png -background none -gravity center -extent 126x126 -fill black -opaque none 126.png
convert ./tmp/210.png -background none -gravity center -extent 270x270 -fill black -opaque none 270.png
convert ./tmp/210.png -background none -gravity center -extent 558x270 -fill black -opaque none 558x270.png
convert ./tmp/435.png -background none -gravity center -extent 558x558 -fill black -opaque none 558.png

rm -r ./tmp
