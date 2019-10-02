echo "Pushing build output to production"

# git config --global user.email "involvevtk@gmail.com"
# git config --global user.name "involvevtk"

cd ..
mkdir involvevtk.github.io
cd involvevtk.github.io
git init
git config user.email "involvevtk@gmail.com"
git config user.name "involvevtk"
git pull https://$guser:$gpassword@github.com/$guser/involvevtk.github.io.git
cp -r /home/travis/build/involvevtk/web-app/public/* ./
git add .
git commit --message "Travis build complete. Website new version $TRAVIS_BUILD_NUMBER ($TRAVIS_COMMIT_MESSAGE)"
git push https://$guser:$gpassword@github.com/$guser/involvevtk.github.io.git master

echo "Push updated code to production_repo"
