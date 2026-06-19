@echo off
cd /d "%~dp0"
echo Starte lokale Website auf http://127.0.0.1:4322/
echo.
echo Wichtig: Dieses Fenster offen lassen.
echo Zum Beenden spaeter STRG+C druecken.
echo.
start "" "http://127.0.0.1:4322/"
python -m http.server 4322 --bind 127.0.0.1
pause
