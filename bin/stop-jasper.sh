#!/bin/sh
RUN_DIR=`pwd`
cd ..
BASE_DIR=`pwd`
cd $BASE_DIR/cloud-jasper && docker-compose down
