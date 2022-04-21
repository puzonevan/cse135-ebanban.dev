#!/usr/bin/env python3
import os
import urllib.parse

print("Cache-Control:no-cache")
print("Content-Type:text/html\r\n\r\n")

print("<html>")
print("<head><title>Get Request Echo</title></head>")
print("<body>")

print("<h1>Get Request Echo</h1>")
query = os.environ["QUERY_STRING"]
formatted = urllib.parse.parse_qs(query)
print("<p>Raw Query String: ", query ,"</p>")

print("<p>Formatted Query String</p>")
print("<ul>")

for key in formatted.keys():
    print("<li>", key, " = ", formatted[key], "</li>")

print("</ul>")


print("</body></html>")