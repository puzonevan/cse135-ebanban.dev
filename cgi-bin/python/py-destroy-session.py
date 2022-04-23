#!/usr/bin/env python3
from os import environ



username = "mysterio"
if "HTTP_COOKIE" in environ.keys():
    username = environ['HTTP_COOKIE']

print("Set-Cookie:", username, " expires=Mon, 26 Aug 2013 18:30:00 GMT")
print("Cache-Control:no-cache")
print("Content-Type:text/html\r\n\r\n")

print("<html>")
print("<head><title>Python Sessions</title></head>")
print("<body>")

print("<h1>Python Sessions Page 1</h1>")

print("<p><b>Name: </b>", username, "</p>")

print("<p><a href='/cgi-bin/python/py-sessions-2.py'>Session Page 2</a></p>")
print("<p><a href='/index.html'>Home</a></p>")
print("<form action='/cgi-bin/python/py-destroy-session.py' method='GET'>")
print("<button type='submit'>Destroy Session</button>")
print("</form>")


print("</body></html>")