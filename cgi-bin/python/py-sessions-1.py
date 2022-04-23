#!/usr/bin/env python3
# from os import environ
# import cgi, cgitb 

# data = cgi.FieldStorage()
# cookies = {}
# for key in data.keys():
#     cookies[key] = data[key].value;

username = "mysterio"
# # https://www.tutorialspoint.com/python/python_cgi_programming.htm
# if environ.has_key('HTTP_COOKIE'):
#    for cookie in map(environ['HTTP_COOKIE'].split(';').strip()):
#         (key, value) = cookie.split('=')
#         if key == "username":
#             username = value
# elif "username" in cookies.keys():
#     username = cookies["username"]


print("Cache-Control:no-cache")
print("Content-Type:text/html\r\n\r\n")

print("<html>")
print("<head><title>PHP Sessions</title></head>")
print("<body>")

print("<h1>PHP Sessions Page 1</h1>")

print("<p><b>Name: </b>", username, "</p>")


print("</body></html>")