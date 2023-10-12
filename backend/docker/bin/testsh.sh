#!/bin/bash

docker exec -it `docker ps | grep dbox.node | head -n1 | awk '{print $1;}'` npm run test:unit -- --watchAll
