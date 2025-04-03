import sharp from 'sharp';
import { promises as fs } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function compressImages() {
    const assetsDir = join(__dirname, 'src', 'assets');
    const compressedDir = join(__dirname, 'src', 'assets-compressed');

    try {
        // Create compressed directory if it doesn't exist
        await fs.mkdir(compressedDir, { recursive: true });

        // Get all PNG files
        const files = await fs.readdir(assetsDir);
        const pngFiles = files.filter(file => file.toLowerCase().endsWith('.png'));

        for (const file of pngFiles) {
            const inputPath = join(assetsDir, file);
            const outputPath = join(compressedDir, file);

            const stats = await fs.stat(inputPath);
            const originalSize = stats.size;

            await sharp(inputPath)
                .png({
                    quality: 80,
                    compressionLevel: 9,
                })
                .toFile(outputPath);

            const compressedStats = await fs.stat(outputPath);
            const compressedSize = compressedStats.size;
            const savings = ((originalSize - compressedSize) / originalSize * 100).toFixed(2);

            console.log(`Compressed ${file}`);
            console.log(`Original size: ${(originalSize / 1024).toFixed(2)}KB`);
            console.log(`Compressed size: ${(compressedSize / 1024).toFixed(2)}KB`);
            console.log(`Saved: ${savings}%\n`);
        }

        console.log('All images compressed successfully!');
    } catch (error) {
        console.error('Error:', error);
    }
}

compressImages();
