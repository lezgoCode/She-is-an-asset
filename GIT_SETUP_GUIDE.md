# Git Setup Guide for She's An Asset Website

## What You Need to Do

### Step 1: Install Git
Choose one of these options:

#### Option A: Git Command Line (Recommended)
1. Go to: https://git-scm.com/download/win
2. Download the installer
3. Run it with default settings
4. Restart your command prompt/terminal

#### Option B: GitHub Desktop (Easier)
1. Go to: https://desktop.github.com/
2. Download GitHub Desktop
3. Install and sign in with GitHub account

### Step 2: Create GitHub Account
1. Go to: https://github.com
2. Click "Sign up"
3. Choose a username (like "autumn-shesanasset")
4. Use your email address
5. Create a password
6. Verify your email

### Step 3: Initialize Your Project

#### If using Git Command Line:
Open Command Prompt or PowerShell in your project folder and run:

```bash
# Navigate to your project folder
cd "E:\autumn new website\updated\TO UPLOAD ON CURSOR\shes-an-asset-website - Copy"

# Initialize Git repository
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit - She's An Asset website with Netlify CMS"

# Connect to GitHub (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/shes-an-asset-website.git

# Push to GitHub
git push -u origin main
```

#### If using GitHub Desktop:
1. Open GitHub Desktop
2. Click "Add an Existing Repository from your Hard Drive"
3. Browse to your project folder
4. Click "Create Repository"
5. Add a commit message: "Initial commit - She's An Asset website with Netlify CMS"
6. Click "Commit to main"
7. Click "Publish repository"
8. Name it "shes-an-asset-website"
9. Make it public
10. Click "Publish Repository"

### Step 4: Verify Everything is Uploaded
Check your GitHub repository at:
`https://github.com/YOUR_USERNAME/shes-an-asset-website`

You should see all your files including:
- All HTML files
- CSS and JavaScript files
- Images and videos
- The new `/admin/` folder
- The new `/content/` folder
- All documentation files

## Troubleshooting

### If you get authentication errors:
1. Make sure you're signed into GitHub
2. Use your GitHub username and password
3. Or set up a Personal Access Token (more secure)

### If files don't upload:
1. Make sure you're in the right folder
2. Check that all files are saved
3. Try running `git status` to see what's happening

### If you need help:
- GitHub has great documentation: https://docs.github.com/
- GitHub Desktop has built-in help
- You can also ask for help in GitHub's community forums

## Next Steps After Git Setup

Once your files are on GitHub:
1. Go to Netlify.com
2. Click "New site from Git"
3. Choose GitHub
4. Select your repository
5. Deploy!

## Why This Matters

- **Backup**: Your files are safely stored on GitHub
- **Version Control**: You can see all changes over time
- **Deployment**: Netlify can automatically deploy from GitHub
- **Collaboration**: Others can help with your website
- **Professional**: Shows you're using industry-standard tools

Your website will be live and Autumn will be able to manage it through the CMS!


