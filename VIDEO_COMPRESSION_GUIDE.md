# Video Compression Guide for GitHub Upload

## The Problem
Your videos are too large for GitHub:
- `Autumn Schmidt Speaker Reel V2.mp4` (684MB) - Way too big!
- `Video.mp4` (43MB) - Too big!
- `vid2.mp4` (25MB) - Too big!

## Solutions

### Option 1: Online Video Compressor (Easiest)
1. Go to: https://www.freeconvert.com/video-compressor
2. Upload your video
3. Choose compression settings:
   - **Quality**: Medium (good balance)
   - **Resolution**: 1080p or 720p
   - **Format**: MP4
4. Download compressed version
5. Replace original file

### Option 2: Use HandBrake (Free Software)
1. Download HandBrake: https://handbrake.fr/
2. Install and open
3. Select your video file
4. Choose preset: "Web - Gmail Large 3 Minutes 720p30"
5. Click "Start Encode"
6. Replace original file

### Option 3: YouTube/Vimeo Hosting (Recommended)
1. Upload videos to YouTube (private/unlisted)
2. Get embed codes
3. Replace video files with YouTube embeds in HTML

### Option 4: Cloud Storage
1. Upload videos to Google Drive, Dropbox, or OneDrive
2. Get shareable links
3. Update HTML to link to cloud storage

## Recommended Approach

### For Website Videos:
1. **Compress to under 10MB each**
2. **Use 720p resolution** (good quality, smaller size)
3. **Keep MP4 format** for web compatibility

### For Speaker Reel:
1. **Upload to YouTube** (unlisted/private)
2. **Embed in website** instead of hosting locally
3. **Much better performance** for users

## Quick Compression Settings

**For web videos:**
- Resolution: 1280x720 (720p)
- Bitrate: 2-3 Mbps
- Format: MP4
- Target size: Under 10MB

**For hero videos:**
- Resolution: 1920x1080 (1080p)
- Bitrate: 4-5 Mbps
- Format: MP4
- Target size: Under 20MB

## After Compression

1. **Test videos** in browser
2. **Update HTML** if filenames change
3. **Upload to GitHub**
4. **Deploy to Netlify**

## Alternative: Skip Videos for Now

You can:
1. **Upload everything except videos**
2. **Deploy the site**
3. **Add videos later** once site is live
4. **Use placeholder images** temporarily

The CMS will work perfectly without the videos!


