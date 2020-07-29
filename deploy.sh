#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git config user.name "itissandeep98"
git config user.email "itissandeep98@gmail.com"
git remote add origin "https://github.com/itissandeep98/VueTest.git"
git add .
git commit -m 'deploy'

git config --local -l

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -u origin gh-pages --force

cd -