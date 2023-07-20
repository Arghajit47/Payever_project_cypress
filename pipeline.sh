#!/bin/bash
#
# Automate Payever website
# Author: Arghajit Singha

#######################################

npm install
npm run test
sleep 5
google-chrome cypress/Payever_Fashion-report/index.html