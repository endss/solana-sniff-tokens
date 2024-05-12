@echo off
set "script=%~1"
shift
node "%~dp0\%script%.js" %*