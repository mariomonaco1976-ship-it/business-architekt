@echo off
cd /d "%~dp0"
echo Starte lokale Website auf http://localhost:8000/
echo.
echo Wichtig: Dieses Fenster offen lassen.
echo Wenn hier eine Fehlermeldung erscheint, bitte an Codex schicken.
echo.
timeout /t 1 /nobreak >nul
start "" "http://localhost:8000/"
"C:\Users\Mario\AppData\Local\Programs\Python\Python311\python.exe" -m http.server 8000 --bind 127.0.0.1
echo.
echo Server wurde beendet oder konnte nicht starten.
pause
