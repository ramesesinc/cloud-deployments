#!/bin/sh
RUN_DIR=`pwd`
cd ../cloud-obo
docker-compose down && docker system prune -f
cd $RUN_DIR
