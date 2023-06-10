#!/bin/bash
cd /home/ubuntu/server

APP_PATH='./dist/main.js'
APP_NAME='devnavi-server'

RUNNING=$(pm2 list | grep -w "$APP_NAME" | grep -c "online")

if [ $RUNNING -gt 0 ]
then
    pm2 restart $APP_NAME
else
    pm2 start $APP_PATH --name $APP_NAME
fi