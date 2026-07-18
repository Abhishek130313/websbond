@echo off
color 0B
echo ========================================================
echo DIRECT VERCEL DEPLOYMENT (Bypassing GitHub)
echo ========================================================
echo.
echo Since GitHub is giving a "Repository Not Found" error, 
echo we will deploy your website directly to Vercel from your computer!
echo.
echo Vercel CLI will now open your browser to log in.
echo Just answer 'Yes' (y) to the setup questions.
echo.
cd agency
call npx vercel --prod
echo.
echo ========================================================
echo Deployment Complete! You can close this window.
echo ========================================================
pause
