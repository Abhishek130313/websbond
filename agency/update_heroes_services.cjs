const fs = require('fs');
const path = require('path');

function processDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            processDir(fullPath);
        } else if (fullPath.endsWith('.tsx')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let modified = false;

            // Matches style={{ \n backgroundImage: url() \n ... }}
            const styleRegex = /\s*style=\{\{[\s\S]*?backgroundImage: url\(\$\{.*?\}\)[\s\S]*?\}\}/g;
            if (styleRegex.test(content)) {
                content = content.replace(styleRegex, '');
                modified = true;
            }

            // Remove any import hero.*Bg from .*png
            const importRegex = /import hero.*?Bg from ['"].*?\.png['"];?\n/g;
            if (importRegex.test(content)) {
                content = content.replace(importRegex, '');
                modified = true;
            }
            
            // Remove overlays like <div className="absolute inset-0 bg-[#09090b]/80 backdrop-blur-[2px]" />
            // or <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#09090b] pointer-events-none" />
            const overlayRegex1 = /\s*<div className="absolute inset-0 bg-gradient-to-b from-black.*? pointer-events-none" \/>/g;
            if (overlayRegex1.test(content)) {
                content = content.replace(overlayRegex1, '');
                modified = true;
            }
            const overlayRegex2 = /\s*<div className="absolute inset-0 bg-\[#09090b\]\/80 backdrop-blur-\[2px\]" \/>/g;
            if (overlayRegex2.test(content)) {
                content = content.replace(overlayRegex2, '');
                modified = true;
            }
            const overlayRegex3 = /\s*<div className="absolute inset-0 bg-\[#09090b\]\/80 backdrop-blur-\[2px\] pointer-events-none" \/>/g;
            if (overlayRegex3.test(content)) {
                content = content.replace(overlayRegex3, '');
                modified = true;
            }

            if (modified) {
                fs.writeFileSync(fullPath, content);
                console.log('Updated', fullPath);
            }
        }
    }
}

processDir(path.join(__dirname, 'src/pages/services'));
