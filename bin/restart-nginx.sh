#!/bin/sh
RUN_DIR=`pwd`
cd ../nginx
docker-compose down && docker system prune -f
sleep 1
docker-compose up -d
docker-compose logs -f cloud-proxy-server
cd $RUN_DIR
