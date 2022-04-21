#!/usr/bin/env python3
from datetime import date
import socket

print("Cache-Control:no-cache")
print("Content-Type:text/html\r\n\r\n")

print("<html>")
print("<head><title>Hello CGI World</title></head>")
print("<body>")

print("<h1>Evan Puzon - Hello Python!</h1>")
print("<p>This page was generated with the python programming language</p>")
today = date.today()
print("<p>Current Date: ", today.strftime("%B %d, %Y"), "</p>")
hostname = socket.gethostname()
ip = socket.gethostbyname(hostname)
print("<p>Your IP Address: ", ip, "</p>")

print("</body></html>")
