#!/bin/bash

# Create images directory if it doesn't exist
mkdir -p public/images

echo "To save your project images, you have a few options:"
echo ""
echo "Option 1: Drag and drop the images directly into the public/images folder in your file explorer"
echo ""
echo "Option 2: If you have the images saved locally, copy them:"
echo "cp /path/to/your/vision-assist-image.jpg public/images/vision-assist-glasses.jpg"
echo "cp /path/to/your/rethread-logo.png public/images/rethread-logo.png"
echo ""
echo "Option 3: If the images are in your Downloads folder:"
echo "cp ~/Downloads/vision-assist-image.jpg public/images/vision-assist-glasses.jpg"
echo "cp ~/Downloads/rethread-logo.png public/images/rethread-logo.png"
echo ""
echo "Option 4: Take screenshots and save them:"
echo "# Take a screenshot of the glasses image and save as vision-assist-glasses.jpg"
echo "# Take a screenshot of the ReThread logo and save as rethread-logo.png"
echo ""
echo "After copying the images, run: npm run dev"