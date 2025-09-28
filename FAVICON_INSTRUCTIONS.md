# Favicon Creation Instructions

## Create a Favicon for She's An Asset Website

The website is now configured to use a favicon.png file. You need to create this file to complete the setup.

### Option 1: Use an Online Favicon Generator (Recommended)

1. Go to [favicon.io](https://favicon.io/) or [realfavicongenerator.net](https://realfavicongenerator.net/)
2. Upload a square image (preferably 512x512 pixels or larger)
3. Generate the favicon files
4. Download the favicon.png file
5. Place it in the root directory of your website (same folder as index.html)

### Option 2: Create a Simple Text-Based Favicon

1. Use any image editing software (Photoshop, GIMP, Canva)
2. Create a 32x32 or 64x64 pixel image
3. Use your brand colors (Asset Crimson #A3194A, Deep Pine #124029)
4. Add text "SA" or "A" for "She's An Asset"
5. Save as favicon.png

### Option 3: Use Your Logo

1. Take your existing logo
2. Resize it to 32x32 or 64x64 pixels
3. Save as favicon.png
4. Ensure it's visible at small sizes

### File Requirements

- **Format**: PNG (recommended) or ICO
- **Size**: 32x32 pixels minimum, 64x64 pixels recommended
- **Location**: Same folder as index.html
- **Name**: favicon.png

### Current Setup

The website is already configured to use favicon.png in all HTML files. Once you create and add the favicon file, it will automatically appear in browser tabs and bookmarks.

### Testing

After adding the favicon:
1. Open your website in a browser
2. Check the browser tab - you should see your favicon
3. Bookmark the page - the favicon should appear in bookmarks
4. Test on different devices and browsers

### Note

If you prefer to use an ICO file instead of PNG:
1. Change all `<link rel="icon" type="image/png" href="favicon.png">` to `<link rel="icon" type="image/x-icon" href="favicon.ico">`
2. Create a favicon.ico file instead
