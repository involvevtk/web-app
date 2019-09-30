echo "\n Pushing build output to production \n"

# git config --global user.email "involvevtk@gmail.com"
# git config --global user.name "involvevtk"

cd ..
mkdir production_repo
cd production_repo
git init
git config user.email "involvevtk@gmail.com"
git config user.name "involvevtk"
git pull https://involvevtk:involve_123@github.com/involvevtk/test_travis_build.git
cp -r /home/travis/build/involvevtk/web-app/public/* ./
git add .
git commit --message "Travis build: $TRAVIS_BUILD_NUMBER"
git push https://involvevtk:involve_123@github.com/involvevtk/test_travis_build.git master

echo "\n Push updated code to production_repo \n"
