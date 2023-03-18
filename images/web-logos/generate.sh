#!/bin/bash

# Fix weird MacOS bug
export LC_CTYPE="en_US.UTF-8"

background_color="#000000"

mkdir -p ./tmp

for size in 16 32 48 98 140 150 210 400 435; do
	inkscape -o ./tmp/$size.png -w $size -h $size favicon.svg 
done

# Generate favicon
convert ./tmp/16.png ./tmp/32.png ./tmp/48.png favicon.ico

# Generate android and webapp icons
convert ./tmp/150.png -background none -gravity center -extent 192x192 -fill $background_color -opaque none manifest-192.png
convert ./tmp/400.png -background none -gravity center -extent 512x512 -fill $background_color -opaque none manifest-512.png

# Generate Safari icon
convert ./favicon.svg -negate -threshold 0 -negate mask-icon.svg

# Generate iOS icon
convert ./tmp/140.png -background none -gravity center -extent 180x180 -fill $background_color -opaque none touch-icon-180.png

# Generate IE and Edge Windows 8.1 tiles icons
convert ./tmp/98.png -background none -gravity center -extent 126x126 -fill $background_color -opaque none tiles-126.png
convert ./tmp/210.png -background none -gravity center -extent 270x270 -fill $background_color -opaque none tiles-270.png
convert ./tmp/210.png -background none -gravity center -extent 558x270 -fill $background_color -opaque none tiles-558x270.png
convert ./tmp/435.png -background none -gravity center -extent 558x558 -fill $background_color -opaque none tiles-558.png

rm -r ./tmp
