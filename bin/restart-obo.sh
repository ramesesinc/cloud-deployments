#!/bin/sh
RUN_DIR=`pwd`
cd ../cloud-obo
docker-compose down && docker system prune -f
sleep 1
docker-compose up -d
docker-compose logs -f cloud-obo-server
cd $RUN_DIR
