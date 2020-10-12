#!/bin/sh
RUN_DIR=`pwd`
cd $RUN_DIR/cloud-filipizen && docker-compose down
docker system prune -f
cd $RUN_DIR/cloud-filipizen && docker-compose up -d
cd $RUN_DIR/cloud-filipizen && docker-compose logs -f cloud-filipizen-server
