#!/bin/bash

docker exec -it `docker ps | grep dbox.mariadb | head -n1 | awk '{print $1;}'` bash
