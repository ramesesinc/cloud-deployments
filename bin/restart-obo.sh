#!/bin/sh
RUN_DIR=`pwd`
cd ..
BASE_DIR=`pwd`
cd $BASE_DIR/cloud-obo && docker-compose down
docker system prune -f
cd $BASE_DIR/cloud-obo && docker-compose up -d
cd $BASE_DIR/cloud-obo && docker-compose logs -f cloud-obo-server
