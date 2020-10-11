#!/bin/sh
RUN_DIR=`pwd`
cd $RUN_DIR/cloud-proxy && docker-compose down
docker system prune -f
cd $RUN_DIR/cloud-proxy && docker-compose up -d
cd $RUN_DIR/cloud-proxy && docker-compose logs -f cloud-proxy-server
