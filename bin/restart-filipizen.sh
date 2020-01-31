#!/bin/sh
RUN_DIR=`pwd`
cd ../filipizen
docker-compose down && docker system prune -f
sleep 1
docker-compose up -d
docker-compose logs -f filipizen-web
cd $RUN_DIR

