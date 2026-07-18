@echo off
color 0A
echo ========================================================
echo WEBSBOND CLOUDFLARE DEPLOYMENT
echo ========================================================
echo.
echo PLEASE COPY THIS SECRET KEY:
echo wb_sec_8fK2mP9xV4nJ7cQ1bH6wR3tY5dZ0gL9sA2
echo.
echo When asked, PASTE the secret and press ENTER.
echo (Right-click in this window to paste)
echo.
call npx wrangler secret put WEBSBOND_LEAD_WEBHOOK_SECRET
echo.
echo Now deploying your Cloudflare Worker...
echo A browser window will open for Cloudflare login if needed.
echo.
call npx wrangler deploy
echo.
echo ========================================================
echo Deployment Complete! You can close this window.
echo ========================================================
pause
