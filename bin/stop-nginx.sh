#!/bin/sh
RUN_DIR=`pwd`
cd ../nginx
docker-compose down && docker system prune -f
cd $RUN_DIR

