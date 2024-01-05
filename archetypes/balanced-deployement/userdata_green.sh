#!/bin/bash
apt update && apt install -y apache2
echo "Hello, GREEN!" > /var/www/html/index.html
service apache2 restart
