# Ng-Http
- This is the repo for http request handling in Angular, all of it like get, post, patch, put, delete.

# To Deploy Application Need to follow these steps
- ### Install angular-cli-ghpages
  Use below CMD to install angular-cli-ghpages ->

  <b> 1- npm install -g angular-cli-ghpages </b>
  
# Build Angular Project
  Using below cmd to build Angular Project:

  <b> ng build --prod --output-path githubrepository --base-href "https://pras75299.github.io/githubrepository/"</b>
  -> Details:
  <b> ng build --prod --output-path ng-http --base-href "https://pras75299.github.io/ng-http/"</b>  
  
# Publish the Application on GitHub
  - Add the repository angularapp as a remote file to the local project:
    git init
    git remote add origin https://github.com/pras75299/ng-http.git
  - -> Verify by cmd: <b>git remote -v</b>
  
 # In Angular project folder, use ngh --dir=angularapp to publish the application on GitHub page:
  - https://.github.io/reponame/
  
