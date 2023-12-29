#!/bin/bash

docker exec -it `docker ps | grep dbox.api | head -n1 | awk '{print $1;}'` /bin/bash
