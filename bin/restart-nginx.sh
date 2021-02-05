#!/bin/sh
RUN_DIR=`pwd`
cd ..
BASE_DIR=`pwd`
cd $BASE_DIR/nginx && docker-compose down
cd $BASE_DIR/nginx && docker-compose up -d
cd $BASE_DIR/nginx && docker-compose logs -f cloud-proxy-server
