@echo off
cd /d "%~dp0"
echo Vorschau startet auf http://127.0.0.1:4322/
echo Dieses Fenster offen lassen, solange du die Website ansiehst.
set PORT=4322
node preview-server.js
pause
