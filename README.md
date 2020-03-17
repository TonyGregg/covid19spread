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
Learn more about GitHub pages on the official website.
Always follow the latest document from https://github.com/angular-schule/angular-cli-ghpages
During cli-ghpages install, use @latest
Use --baseref all the time, Otherwise you get 404 error.  for example.
 ng deploy --base-href=/gramakalvi/
  After making changes to the code, 1. Run the ng deploy command (above) and 2. Commit and push it to  github for it to reflect
My sample organization git page is @ https://tonygregg.github.io/gramakalvi/

[![Material Design for Bootstrap](https://mdbootstrap.com/wp-content/uploads/2018/03/admin-angular.png)](https://mdbootstrap.com/freebies/angular-admin-dashboard-template-angular-5-material-design/)

# Bootstrap 4 & Material Design - Angular Admin Dashboard Template

Free, responsive Admin Dashboard template containing different styles of dashboards, data presentations, and numerous insightful components. Built with the newest Bootstrap 4, **Angular 5** and Material Design. MIT license – free for personal and commercial use. It's build with MDBootstrap - powerful and free UI Kit, containing **400+** material UI elements, **600+** material icons, **74** CSS animations, SASS files, templates, tutorials and many more.

________

# Live Previews: 
## http://ng-admin.mdbootstrap.com/dashboards/v1

# Most important features:

1. Build upon Bootstrap 4 & Angular 7 & MDB

2. Plenty of useful components

3. Easy installation

4. Easy to use and customize

5. Active community

6. Dedicated support forum

7. Fully responsive

# Demo:  
**Main demo**: http://ng-admin.mdbootstrap.com/dashboards/v1

# Installation:

**Install:** 
npm i

**Run:**
ng serve -o

**Test:**
ng test 

**Production Build:**
ng build --prod

**More info:**
http://mdbootstrap.com/angular/getting-started/

# FAQ
http://mdbootstrap.com/angular/faq/

# Support:
http://mdbootstrap.com/forums/forum/support/


# Angular 7 tutorial – creating an Angular Bootstrap app, step by step:
## https://mdbootstrap.com/angular/angular-tutorial/

# Additional tutorials:

**MDB - Bootstrap tutorial**: https://mdbootstrap.com/bootstrap-tutorial/

**MDB - Wordpress tutorial**: https://mdbootstrap.com/wordpress-tutorial/

# Documentation:

**Huge, detailed documentation avilable online on**: https://mdbootstrap.com/angular

# PRO version:

**MDB Admin Template Pro (Angular version)**: https://mdbootstrap.com/products/angular-admin-dashboard/

# Highlights:  
**Bootstrap 4**  
Thanks to MDB you can take advantage of all features of the newest Bootstrap 4 Stable

**Free for personal and commercial use**  
Our license is user-friendly. Feel free to use MDB for both private as well as commercial projects.   

**Fully responsive**  
It doesn't matter whether your project will be displayed on desktop, laptop, tablet or mobile phone. MDB looks great on each screen.

**Technical support**  
We really care about reliability. If you have any questions - do not hesitate to contact us.  

**Active community**  
Our society grows day by day. Visit **our forum** and check how it is to be a part of our family.  

**Flex box**  
MDB fully suppports Flex Box. You can forget about alignment issues.  

**Latest Angular**  
MDB is integrated with newest Angular 7, therefore you can use all the newest features which comes along with it.  

**Detailed documentation:**  
We give you detailed documentation at your disposal. It will help you to implement your ideas easily.  

A big **thank you to all our users** who are working with us to improve the software. We wouldn't be where we are without you.  

# Useful Links:  

Getting started: https://mdbootstrap.com/angular/angular-bootstrap-getting-started/

5 min quick start: https://mdbootstrap.com/angular/mdb-quick-start/  

Material Design + Bootstrap Tutorial: https://mdbootstrap.com/bootstrap-tutorial/  

Material Design + WordPress Tutorial: https://mdbootstrap.com/wordpress-tutorial/  

Other Freebies: https://mdbootstrap.com/freebies/  

Premium Templates: https://mdbootstrap.com/templates/  


# Social Media:  

Twitter: https://twitter.com/MDBootstrap  

Facebook: https://www.facebook.com/mdbootstrap  

Pinterest: https://pl.pinterest.com/mdbootstrap 

Google+: https://plus.google.com/u/0/b/107863090883699620484/+Mdbootstrap/posts  

Dribbble: https://dribbble.com/mdbootstrap

LinkedIn: https://www.linkedin.com/company/material-design-for-bootstrap

# Visit our website: https://mdbootstrap.com/
