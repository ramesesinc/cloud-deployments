#!/bin/sh
RUN_DIR=`pwd`
cd ..
BASE_DIR=`pwd`
cd $BASE_DIR/cloud-partner && docker-compose down
docker system prune -f
cd $BASE_DIR/cloud-partner && docker-compose up -d
cd $BASE_DIR/cloud-partner && docker-compose logs -f cloud-partner-server
