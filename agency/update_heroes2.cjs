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

            // Remove the style block with backgroundImage
            const styleRegex = /\s*style=\{\{\s*backgroundImage: url\(\$\{.*?\}\),\s*backgroundSize: "cover",\s*backgroundPosition: "center"\s*\}\}/g;
            if (styleRegex.test(content)) {
                content = content.replace(styleRegex, '');
                modified = true;
            }

            const styleRegex2 = /\s*style=\{\{\s*backgroundImage: url\(\$\{.*?\}\)\s*\}\}/g;
            if (styleRegex2.test(content)) {
                content = content.replace(styleRegex2, '');
                modified = true;
            }

            // Remove any import hero.*Bg from .*png
            const importRegex = /import hero.*?Bg from ['"].*?\.png['"];?\n/g;
            if (importRegex.test(content)) {
                content = content.replace(importRegex, '');
                modified = true;
            }

            if (modified) {
                fs.writeFileSync(fullPath, content);
                console.log('Updated style/imports', fullPath);
            }
        }
    }
}

processDir(path.join(__dirname, 'src/pages'));
processDir(path.join(__dirname, 'src/components/site'));
