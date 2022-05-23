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

## Homeworks
- [Homework 1](#hw-1)
- [Homework 2](#hw-2)
- [Homework 3](#hw-3)


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


# HW 3

## Honest Notes
I thoroughly gave this assignment my all, I started early, and I worked on this often, but due to time constraint and other class workload, I could not complete some things I wanted to complete.  
- Sessioning is very basic with just session id's being like 1, 2, 3, etc. and they have no set expiration
- Database being used is MongoDB and can check database through shell commands `use api` `db.static.find().pretty()` `db.performance.find().pretty()`
- Local database helpful commands: `systemctl status mongod`, `systemctl start mongod`, `systemctl stop mongod`


**Image Locations:** `/hw3/images`

**Route PDF:** `/hw3/routes.pdf`

**Database HTML:** `/hw3/database.html`

**Hello Data Viz HTML:** `/hw3/hellodataviz.html`

## List of JS Files 
- `/js/charts.js` - create charts for hellodataviz.html
- `/js/collector.js` - collector script to collect static, performance, and activity data
- `/js/helper.js` - REST api helper functions such as POST, GET, etc. 
- `/js/session.js` - sessioning through cookies 


# HW 4 

## Honest Notes 

## Authentication 

## User Management 

**Basic Level Grader User:**

**Basic Level Grader Pass:**

**Admin Level Grader User:**

**Admin Level Grader Pass:**

## Dashboard

## Report 