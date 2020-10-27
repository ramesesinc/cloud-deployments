#!/bin/sh
RUN_DIR=`pwd`
cd ..
BASE_DIR=`pwd`

docker system prune -f

cd $BASE_DIR/nginx && docker-compose up -d

cd $BASE_DIR/cloud-partner && docker-compose up -d

cd $BASE_DIR/cloud-filipizen && docker-compose up -d

cd $BASE_DIR/filipizen && docker-compose up -d

cd $BASE_DIR/cloud-epayment && docker-compose up -d

cd $BASE_DIR/cloud-obo && docker-compose up -d

cd $BASE_DIR/cloud-jasper && docker-compose up -d
