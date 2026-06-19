@echo off
cd /d "%~dp0"
echo Vorschau startet auf http://127.0.0.1:4321/
echo Dieses Fenster offen lassen, solange du die Website ansiehst.
node preview-server.js
