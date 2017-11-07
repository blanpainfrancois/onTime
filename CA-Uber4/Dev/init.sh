#!/usr/bin/env bash
sudo apt-get update
sudo apt-get upgrade -y
sudo apt-get dist-upgrade -y
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
sudo apt-get install nodejs -y
sudo npm install -g @angular/cli
