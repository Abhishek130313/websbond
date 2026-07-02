import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const srcDir = path.join(__dirname, '../src');

function walkDir(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function(file) {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) { 
            results = results.concat(walkDir(file));
        } else { 
            if (file.endsWith('.tsx') || file.endsWith('.jsx')) {
                results.push(file);
            }
        }
    });
    return results;
}

const files = walkDir(srcDir);
let changedFiles = 0;

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    // Replace <img ...> with <img loading="lazy" decoding="async" ...>
    // But don't double replace if it already has loading="lazy"
    let modified = false;
    
    // Find all <img tags
    const imgRegex = /<img\s/g;
    
    const newContent = content.replace(imgRegex, (match, offset, str) => {
        // Look ahead in this tag to see if it already has loading=
        const tagEnd = str.indexOf('>', offset);
        const tag = str.substring(offset, tagEnd);
        
        // Exclude Logo.tsx because it's usually above the fold
        if (file.includes('Logo.tsx')) {
            return match;
        }

        let newTagStart = match;
        if (!tag.includes('loading=')) {
            newTagStart += 'loading="lazy" ';
            modified = true;
        }
        if (!tag.includes('decoding=')) {
            newTagStart += 'decoding="async" ';
            modified = true;
        }
        
        return newTagStart;
    });

    if (modified) {
        fs.writeFileSync(file, newContent, 'utf8');
        changedFiles++;
        console.log(`Modified: ${file}`);
    }
});

console.log(`\nFinished! Added lazy loading to ${changedFiles} files.`);
