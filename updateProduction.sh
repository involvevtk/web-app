echo "Pushing build output to production"


setup_git() {
  git config --global user.email "involvevtk@gmail.com"
  git config --global user.name "involvevtk"
}


git clone https://github.com/involvevtk/test_travis_build.git
echo "clone test_travis_build repository"

cd test_travis_build
echo "changed direcotry to test_travis_build"

cp -r /home/travis/build/involvevtk/web-app/public/* ./
echo "copied build public directory to repository"

setup_git
echo "Updated git config"

git add .
echo "Added all files"

git commit --message "Travis build: $TRAVIS_BUILD_NUMBER"
echo "Added commit message"

git push origin master << EOF
$guser
$gpassword
EOF

echo "Push updated code to github"
