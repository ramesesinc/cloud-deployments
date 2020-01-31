#!/bin/sh
RUN_DIR=`pwd`
cd ../filipizen
docker-compose down && docker system prune -f
cd $RUN_DIR
