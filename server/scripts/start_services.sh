#!/bin/bash
cd /home/ubuntu/server
if [ -z "$(docker compose ps -q)" ]; then
  # Start the containers
  docker compose up -d
fi