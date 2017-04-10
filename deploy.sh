#!/usr/bin/env bash

yarn run build
git add .
git status
git commit -m "$1"
git push