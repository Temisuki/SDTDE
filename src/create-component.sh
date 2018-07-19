#!/usr/bin/env bash
cd app
ls
cp -r boilerplate/ "${1}/"
cd "${1}"
CLASS="$(echo ${1} | sed -r 's/(^|-)([a-z])/\U\2/g')"
echo "${CLASS}"
mv boilerplate.component.html "${1}.component.html"
mv boilerplate.component.scss "${1}.component.scss"
mv boilerplate.component.ts "${1}.component.ts"
sed -i -e "s/boilerplate/${1}/g" "${1}.component.ts"
sed -i -e "s/Boilerplate/${CLASS}/g" "${1}.component.ts"