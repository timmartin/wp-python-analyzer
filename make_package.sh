#!/bin/bash

VERSION=$1

if [ "$VERSION" = "" ]
then
    echo "No version specified"
    exit 1
fi

tar -cvzf ../wp-python-analyzer-${VERSION}.tar.gz --directory=.. --exclude-vcs --exclude=wp-python-analyzer/node_modules wp-python-analyzer
