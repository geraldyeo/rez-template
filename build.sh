#!/bin/bash

BUILD_DIR_NAME='built'

clear
echo "Building..."
rm -rf ./$BUILD_DIR_NAME
node node_modules/requirejs/bin/r.js -o app.build.js