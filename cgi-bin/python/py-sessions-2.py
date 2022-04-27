#!/usr/bin/env python3
from os import environ
import cgi, cgitb 


username = "mysterio"
if "HTTP_COOKIE" in environ.keys(): 
    for cookie in environ['HTTP_COOKIE'].split(';'):
        (key, value) = cookie.split('=')
        if key == "username":
            username = value

print("Set-Cookie:username=", username)
print("Cache-Control:no-cache")
print("Content-Type:text/html\r\n\r\n")

print("<html>")
print("<head><title>Python Sessions</title></head>")
print("<body>")

print("<h1>Python Sessions Page 2</h1>")

print("<p><b>Name: </b>", username, "</p>")

print("<p><a href='/cgi-bin/python/py-sessions-1.py'>Session Page 1</a></p>")
print("<p><a href='/index.html'>Home</a></p>")
print("<form action='/cgi-bin/python/py-destroy-session.py' method='GET'>")
print("<button type='submit'>Destroy Session</button>")
print("</form>")


print("</body></html>")