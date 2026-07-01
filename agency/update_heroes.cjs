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

            // Add hero-premium-bg class
            if (content.includes('text-white text-center') && !content.includes('hero-premium-bg')) {
                content = content.replace(/text-white text-center/g, 'text-white text-center hero-premium-bg');
                modified = true;
            }
            if (content.includes('overflow-hidden pt-28 pb-16') && !content.includes('hero-premium-bg')) {
                content = content.replace(/overflow-hidden pt-28 pb-16/g, 'overflow-hidden pt-28 pb-16 hero-premium-bg');
                modified = true;
            }

            // Remove the style block with backgroundImage
            const styleRegex = /\s*style=\{\{\s*backgroundImage:\s*url\(\$\{.*?\}\),\s*backgroundSize:\s*"cover",\s*backgroundPosition:\s*"center"\s*\}\}/g;
            if (styleRegex.test(content)) {
                content = content.replace(styleRegex, '');
                modified = true;
            }

            // Also for the other syntax without cover/center if it exists
            const styleRegex2 = /\s*style=\{\{\s*backgroundImage:\s*url\(\$\{.*?\}\)\s*\}\}/g;
            if (styleRegex2.test(content)) {
                content = content.replace(styleRegex2, '');
                modified = true;
            }
            
            // Remove the dark gradient overlay because the CSS has a beautiful gradient already
            const overlayRegex = /\s*<div className="absolute inset-0 bg-gradient-to-b from-black\/.*? pointer-events-none" \/>/g;
            if (overlayRegex.test(content)) {
                content = content.replace(overlayRegex, '');
                modified = true;
            }
            
            // For SMM it has: <div className="absolute inset-0 bg-[#09090b]/80 backdrop-blur-[2px]" />
            const overlayRegex2 = /\s*<div className="absolute inset-0 bg-\[#09090b\]\/80 backdrop-blur-\[2px\]" \/>/g;
            if (overlayRegex2.test(content)) {
                content = content.replace(overlayRegex2, '');
                modified = true;
            }

            if (modified) {
                fs.writeFileSync(fullPath, content);
                console.log('Updated', fullPath);
            }
        }
    }
}

processDir(path.join(__dirname, 'src/pages'));
processDir(path.join(__dirname, 'src/components/site'));
