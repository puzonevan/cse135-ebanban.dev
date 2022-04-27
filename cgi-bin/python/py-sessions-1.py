#!/usr/bin/env python3
from os import environ
import cgi, cgitb

data = cgi.FieldStorage()
cookies = {}
for key in data.keys():
    cookies[key] = data[key].value;

username = "mysterio"
if "username" in cookies.keys(): 
    username = cookies["username"]
# elif "HTTP_COOKIE" in environ.keys(): 
#     # for cookie in map(environ['HTTP_COOKIE'].split(';').strip()):
#     #     (key, value) = cookie.split('=')
#     #     if key == "username":
#     #         username = value
#     username = environ['HTTP_COOKIE']

# # https://www.tutorialspoint.com/python/python_cgi_programming.htm
# if environ.has_key('HTTP_COOKIE'):
#    for cookie in map(environ['HTTP_COOKIE'].split(';').strip()):
#         (key, value) = cookie.split('=')
#         if key == "username":
#             username = value
# elif "username" in cookies.keys():
#     username = cookies["username"]

print("Set-Cookie:username=", username)
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