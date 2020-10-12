#!/bin/sh
RUN_DIR=`pwd`
cd ..
BASE_DIR=`pwd`
cd $BASE_DIR/cloud-proxy && docker-compose down
docker system prune -f
cd $BASE_DIR/cloud-proxy && docker-compose up -d
cd $BASE_DIR/cloud-proxy && docker-compose logs -f cloud-proxy-server
