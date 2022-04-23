#!/usr/bin/env python3
from os import environ





print("Set-Cookie: expires=Mon, 26 Aug 2013 18:30:00 GMT")
print("Cache-Control:no-cache")
print("Content-Type:text/html\r\n\r\n")

print("<html>")
print("<head><title>Python Sessions</title></head>")
print("<body>")

print("<h1>Session Destroyed</h1>")


print("<p><a href='/cgi-bin/python/py-sessions-1.py'>Session Page 1</a></p>")
print("<p><a href='/cgi-bin/python/py-sessions-2.py'>Session Page 2</a></p>")

print("<p><a href='/index.html'>Home</a></p>")


print("</body></html>")