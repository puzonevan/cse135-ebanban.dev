#!/usr/bin/env python3
import os
import cgi

print("Cache-Control:no-cache")
print("Content-Type:text/html\r\n\r\n")

print("<html>")
print("<head><title>General Request Echo</title></head>")
print("<body>")

print("<h1>General Request Echo</h1>")

print("<p><b>HTTP PROTOCOL: ", os.environ["SERVER_PROTOCOL"], "</b></p>")
print("<p><b>HTTP METHOD: ", os.environ["REQUEST_METHOD"], "</b></p>")
print("<p><b>QUERY STRING: ", os.environ["QUERY_STRING"], "</b></p>")

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