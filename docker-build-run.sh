#!/bin/bash

# $1 = docker image tag name
# $2 = Dockerfile location

docker build --file $2 -t $1 .
docker run -it -p 3000:3000 $1
