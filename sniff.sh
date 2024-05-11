#!/bin/bash
script=$1
shift
node "$(dirname "$0")/$script.js" "$@"