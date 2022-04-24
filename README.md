# CSE 135 LAMP 

## Team 
**Evan Puzon**: A15890485

## Site 

[Main Site](http://ebanban.dev/)

[Reporting](http://reporting.ebanban.dev/)

[Collector](http://collector.ebanban.dev/)

## Grader Login 
**SSH Username**: grader@143.198.230.45

**SSH Password**: pleasebenice

**Site Username**: grader

**Site Password**: pleasebenice

## Server Information
**Host Name**: cse135-evan-puzon

**Ipv4**: 143.198.230.45

# HW 1

## Image Location
All images are located under */hw1/images*

## Github Auto Deploy Setup
I set up a Github auto deploy file on the server. There, I also set up a post receive hook to deploy to the var/www/ebanban.dev/public_html. I set up a remote origin on my local machine as git remote add prod ___ . As I push to my github repo, I also push to the remote origin prod to the server. 

## Summary of changes to HTML file in DevTools after compression
The content encoding header of files have a value of gzip indicating compressed.

## Summary of removing 'server' header
On my apache2.conf file located at etc/apache2/apache2.conf, I simply added 

ServerTokens Full 
SecServerSignature "CSE135 Server"

and it changed the response header to what I wanted. 

# HW 2

**Image Location:** /hw2/images

**Source Code:** /cgi-bin/


