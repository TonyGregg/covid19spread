# instrutions to publish the page to gh pages
1. Mirror this git

Open Terminal.

Create a bare clone of the repository.

$ git clone --bare https://github.com/TonyGregg/covid19spread.git
Mirror-push to the new repository.

$ cd covid19spread.git
create a new repository in github using your account

$ git push --mirror https://github.com/exampleuser/new-repository.git

Remove the temporary local repository you created earlier.

$ cd ..
$ rm -rf old-repository.git

git clone your newly created repository.git
cd newrepo.git
npm update

2. Add angular-cli-ghpages to your project.


ng add angular-cli-ghpages@latest
Deploy your project to GitHub pages with all default settings. Your project will be automatically built in production mode.

 ng deploy --base-href=/covid19spread/
Which is the same as:

ng deploy your-angular-project
Your project should be available at https://<username>.github.io/<repositoryname>.

In this case it is https://tonygregg.github.io/covid19spread/
