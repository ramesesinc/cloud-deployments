#!/bin/sh
RUN_DIR=`pwd`
cd ..
BASE_DIR=`pwd`
cd $BASE_DIR/cloud-jasper && docker-compose down
docker system prune -f
cd $BASE_DIR/cloud-jasper && docker-compose up -d
cd $BASE_DIR/cloud-jasper && docker-compose logs -f
