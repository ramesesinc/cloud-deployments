#!/bin/sh
RUN_DIR=`pwd`
cd ../cloud-partner
docker-compose down && docker system prune -f
cd $RUN_DIR

