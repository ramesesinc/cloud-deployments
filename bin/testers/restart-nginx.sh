#!/bin/sh
RUN_DIR=`pwd`
cd ../../nginx
docker-compose down && docker system prune -f
sleep 1
docker-compose -f docker-compose.yml -f docker-compose-test.yml up -d
cd $RUN_DIR

