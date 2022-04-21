#!/usr/bin/env python3
import cgi, cgitb 

print("Cache-Control:no-cache")
print("Content-Type:text/html\r\n\r\n")

print("<html>")
print("<head><title>Post Request Echo</title></head>")
print("<body>")

print("<h1>Post Request Echo</h1>")

data = cgi.FieldStorage()

print("<p>Message Body</p>")
print("<ul>")

params = {}
for key in data.keys():
    params[key] = data[key].value;

for key in params.keys(): 
    print("<li>", key, " = ", params[key], "</li>")


print("</ul>")


print("</body></html>")