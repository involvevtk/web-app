echo "Pushing build output to production"


git clone https://github.com/involvevtk/test_travis_build.git
echo "clone test_travis_build repository"

cd test_travis_build
echo "changed direcotry to test_travis_build"

cp -r /home/travis/build/involvevtk/web-app/public/* ./
echo "copied build public directory to repository"

git push origin master << EOF
involvevtk
involve@123
EOF
echo "Push updated code to github"
