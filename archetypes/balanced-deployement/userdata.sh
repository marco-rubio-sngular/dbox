#!/bin/bash
sudo apt update && apt install -y apache2
sudo echo "Hello, World!" > /var/www/html/index.html
sudo echo "Hello, World!" > index.html
sudo service apache2 restart
