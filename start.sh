#!/bin/sh
RUN_DIR=`pwd`
docker system prune -f
cd $RUN_DIR/cloud-partner && docker-compose up -d
cd $RUN_DIR/filipizen && docker-compose up -d
cd $RUN_DIR/cloud-epayment && docker-compose up -d
cd $RUN_DIR/cloud-obo && docker-compose up -d
cd $RUN_DIR
