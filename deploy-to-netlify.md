# Deploy to Netlify - Step by Step Guide

## Quick Deployment Steps

### 1. Prepare Your Repository
- Ensure all files are committed to Git
- Push to your GitHub repository
- Verify all CMS files are included

### 2. Connect to Netlify
1. Go to [netlify.com](https://netlify.com)
2. Click **"New site from Git"**
3. Choose **GitHub** as your Git provider
4. Select your repository
5. Configure build settings:
   - **Build command**: Leave empty
   - **Publish directory**: `.` (root directory)
6. Click **"Deploy site"**

### 3. Enable Netlify Identity
1. In your Netlify dashboard, go to **Site settings**
2. Click **Identity** in the left sidebar
3. Click **Enable Identity**
4. Go to **Registration** tab
5. Set registration to **"Invite only"**
6. Save settings

### 4. Enable Git Gateway
1. Still in **Identity** settings
2. Click **Services** tab
3. Click **Enable Git Gateway**
4. This allows the CMS to commit changes to your repo

### 5. Invite Users
1. Go to **Identity** > **Invite users**
2. Enter Autumn's email address
3. Click **Send invite**
4. She'll receive an email to set up her account

### 6. Test the CMS
1. Go to `https://your-site-name.netlify.app/admin/`
2. Log in with Autumn's account
3. Test creating and editing content
4. Verify changes appear on the live site

## Custom Domain Setup (Optional)

### 1. Add Custom Domain
1. In Netlify dashboard, go to **Domain settings**
2. Click **Add custom domain**
3. Enter your domain name
4. Follow DNS configuration instructions

### 2. SSL Certificate
- Netlify automatically provides SSL certificates
- Your site will be available at `https://yourdomain.com`

## Post-Deployment Checklist

- [ ] Site loads correctly
- [ ] All pages are accessible
- [ ] CMS admin interface works
- [ ] User can log in and manage content
- [ ] Images upload successfully
- [ ] Content changes appear on live site
- [ ] Mobile responsiveness maintained
- [ ] SEO meta tags working

## Troubleshooting

### Common Issues:
1. **CMS won't load**: Check Identity and Git Gateway settings
2. **Can't save content**: Verify Git Gateway is enabled
3. **Images won't upload**: Check file size limits and permissions
4. **Content doesn't appear**: Ensure content is marked as "published"

### Getting Help:
- Netlify Documentation: https://docs.netlify.com/
- Netlify CMS Docs: https://www.netlifycms.org/docs/
- Netlify Support: Available through dashboard

## Benefits After Deployment

✅ **Easy Content Management**: Autumn can update content without coding
✅ **Real-time Updates**: Changes appear immediately on the live site
✅ **Media Management**: Upload and organize images easily
✅ **SEO Friendly**: Proper meta tags and descriptions
✅ **Mobile Responsive**: Works on any device
✅ **Version Control**: All changes are tracked in Git
✅ **Secure**: Only invited users can access the CMS
✅ **Backup Included**: Content is safely stored in your repository

Your website is now ready for Autumn to manage independently!


