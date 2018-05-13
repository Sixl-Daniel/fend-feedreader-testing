# Project „Feed Reader Testing” 📰

*A practice project for the Udacity Front End Web Developer Nanodegree Program*

<img align="right" width="100" height="100" src="https://raw.githubusercontent.com/Sixl-Daniel/fend-feedreader-testing/master/img/146px-Logo_jasmine.svg.png"> This exercise is about [Jasmine](https://jasmine.github.io/), a behavior-driven development framework for testing JavaScript code. A simple feedreader application is tested using [Jasmine version 2.1.0](https://jasmine.github.io/2.1/introduction.html).

 To see the test suites, please click the Jasmine logo in the bottom right corner. 

## Test suites

1. RSS Feeds
    * are defined
    * have a valid URL
    * have a name
2. The menu
    * is hidden by default
    * toggles it's visibility state correctly
3. Initial Entries
    * have loaded and contain at least one element
4. New Feed Selection
    * has different content

## Getting started

:exclamation: You need a web server to run this application. 

[**Check the application out on it's GitHub Page.**](https://sixl-daniel.github.io/fend-feedreader-testing/)

### Use your existing web hoster
 Just upload all files to a new directory at your website host with a FTP application. Point a domain to the games directory and you are good to go.

### Use a local web server 
You can setup a simple *HTTP Server* on your local machine by using *NodeJS*.

1. **Download and install NodeJS**  
Download the latest stable release from [https://nodejs.org/](https://nodejs.org/) and install it with default setting.

2. **Install http-server from npm**  
Install the package *http-server* globally with the node package manager command line tool. Open a command prompt and enter:
    ```bash
    $ npm install http-server -g
    ```
3. **Clone this repository**  
Change to a folder you want the game in. Then clone the files of this repo to a new directory and changee into it:
    ```bash
    $ git clone https://github.com/Sixl-Daniel/fend-feedreader-testing.git MyNewFeedreaderDirectory
    $ cd MyNewFeedreaderDirectory
    ```
3. **Start your web server**
    ```bash
    $ http-server
    ```
5. **Point your browser to your local website**  
Open your browse and go to http://127.0.0.1:8080 to start the application.  

## Resources

### Code snippets & Tutorials

- **NodeJS - Setup a Simple HTTP Server / Local Web Server**  
[http://jasonwatmore.com/post/2016/06/22/nodejs-setup-simple-http-server-local-web-server](http://jasonwatmore.com/post/2016/06/22/nodejs-setup-simple-http-server-local-web-server)

- **Regular Expression for URL validation by Diego Perini**  
[https://gist.github.com/dperini/729294](https://gist.github.com/dperini/729294)

### Generators

Background by [SVGBackgrounds.com](https://www.svgbackgrounds.com/)