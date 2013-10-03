#templateApp

##About
A template aimed to help people getting started in building wonderful apps using [NodeJS](http://nodejs.org), [AngularJS](http://angularjs.org/) and [Twitter Bootstrap](http://twitter.github.io/bootstrap/). The template is structured in an AMD pattern using [RequireJS](http://requirejs.org/) as a loader and optimizer. 

##Dependencies
* [NodeJS](http://nodejs.org)

##Included
* [Express 3.2.6](http://expressjs.com/)
* [AngularJS 1.0.7](http://angularjs.org/)
* [RequireJS 2.1.6](http://requirejs.org/)
* [Angular UI Bootstrap 0.6.0](http://angular-ui.github.io/bootstrap/)

##Webserver
If you are planning on running the application on a linux server with [NGINX](http://wiki.nginx.org/Main) serving the static files, and [Forever](https://github.com/nodejitsu/forever) serving the dynamic files, then you can find some templates in */configs* to get you started.

##Installation
Make sure you have the above dependencies installed before proceding.

Open a [Terminal](http://www.apple.com/osx/apps/all.html#terminal) or a [Commmand Prompt](http://en.wikipedia.org/wiki/Command_Prompt) and
type the following :
  
    $ git clone https://github.com/cbird/templateApp.git
    $ cd /templateApp/src
    $ npm install
    $ node app


##Special thanks
* To **tnajdek** since this template is based on his [angular-requirejs-seed](https://github.com/tnajdek/angular-requirejs-seed)
* To **Reason** for providing an excellent [article](https://www.exratione.com/2013/02/nodejs-and-forever-as-a-service-simple-upstart-and-init-scripts-for-ubuntu/) on [NodeJS](http://nodejs.org) and [Forever](https://github.com/nodejitsu/forever)
