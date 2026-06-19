@echo off
cd /d "%~dp0"
echo === Ordner ===
cd
echo.
echo === Python ===
"C:\Users\Mario\AppData\Local\Programs\Python\Python311\python.exe" --version
echo.
echo === Node ===
node --version
echo.
echo === Ports 4322 und 8000 ===
powershell -NoProfile -Command "Get-NetTCPConnection -State Listen -ErrorAction SilentlyContinue | Where-Object { $_.LocalPort -in 4322,8000 } | Select-Object LocalAddress,LocalPort,State,OwningProcess | Format-Table -AutoSize"
echo.
echo === Test: index.html vorhanden? ===
if exist index.html (echo index.html gefunden) else (echo index.html NICHT gefunden)
echo.
echo Bitte dieses Fenster nicht sofort schliessen.
pause
