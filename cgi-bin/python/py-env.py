#!/usr/bin/env python3
import os

print("Cache-Control:no-cache")
print("Content-Type:text/html\r\n\r\n")

print("<html>")
print("<head><title>Environment Python</title></head>")
print("<body>")

for key in os.environ.keys(): 
    print("<p><b>", key,  "</b> = ", os.environ[key], "</p>")

print("</body></html>")