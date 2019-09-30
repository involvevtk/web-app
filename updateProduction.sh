echo "\n Pushing build output to production \n"

# git config --global user.email "involvevtk@gmail.com"
# git config --global user.name "involvevtk"

cd ..
mkdir production_repo
cd production_repo
git clone https://github.com/involvevtk/test_travis_build.git
cd test_travis_build/
cp -r /home/travis/build/involvevtk/web-app/public/* ./
git add .
git commit --message "Travis build: $TRAVIS_BUILD_NUMBER"


git push git@github.com:involvevtk/test_travis_build.git master

echo "\n Push updated code to production_repo \n"
