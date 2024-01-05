#!/bin/bash
apt update && apt install -y apache2
echo "Hello, BLUE!" > /var/www/html/index.html
service apache2 restart
