#!/bin/bash

# Print step information
echo "🚀 Building project for production..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    
    # Remove old zip if it exists
    if [ -f static-site.zip ]; then
        echo "🗑️  Removing old static-site.zip..."
        rm static-site.zip
    fi
    
    # Create new zip
    echo "📦 Creating new static-site.zip..."
    cd dist && zip -r ../static-site.zip .
    cd ..
    
    echo "✨ Done! static-site.zip is ready to upload to IONOS"
    echo "📂 Upload this file to your IONOS file manager and extract it"
else
    echo "❌ Build failed! Please fix the errors and try again"
    exit 1
fi
