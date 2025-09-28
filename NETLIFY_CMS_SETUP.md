# Netlify CMS Setup Guide for She's An Asset Website

## Overview
This guide will help you set up Netlify CMS for Autumn's website, allowing her to easily manage content without touching code.

## What's Been Set Up

### 1. Admin Interface
- **Location**: `/admin/index.html`
- **Access**: `https://yourdomain.com/admin/`
- **Purpose**: Content management interface for Autumn

### 2. CMS Configuration
- **File**: `/admin/config.yml`
- **Purpose**: Defines content types and fields

### 3. Content Structure
- **Pages**: `/content/pages/` - Website pages
- **Events**: `/content/events/` - Workshop and event listings
- **Blog**: `/content/blog/` - Blog posts
- **Testimonials**: `/content/testimonials/` - Client testimonials
- **Clients**: `/content/clients/` - Client logos and info
- **Speaking Topics**: `/content/speaking-topics/` - Speaking engagements
- **Settings**: `/content/settings/` - Site-wide settings

## Content Types Available

### 1. Pages
Manage website pages including:
- Title, description, keywords
- Hero content (headline, subhead, video/image)
- Page content (markdown)
- Publication settings

### 2. Events
Manage workshops and events:
- Event details (title, date, location, duration)
- Pricing and Eventbrite links
- Event images and descriptions
- Featured event settings

### 3. Blog Posts
Create and manage blog content:
- Title, description, author
- Featured images
- Markdown content
- Publication controls

### 4. Testimonials
Manage client testimonials:
- Client name, title, company
- Testimonial quotes
- Client photos
- Featured testimonial settings

### 5. Client Logos
Manage client showcase:
- Company name and logo
- Website links
- Descriptions
- Featured client settings

### 6. Speaking Topics
Manage speaking engagements:
- Topic titles and descriptions
- Duration and audience info
- Key takeaways
- Content details

### 7. Site Settings
Global website settings:
- Site title and description
- Contact information
- Social media links
- Footer text

## How to Deploy

### Step 1: Deploy to Netlify
1. Connect your GitHub repository to Netlify
2. Set build command to: `# No build command needed`
3. Set publish directory to: `.` (root)
4. Deploy the site

### Step 2: Enable Identity
1. In Netlify dashboard, go to **Site settings** > **Identity**
2. Click **Enable Identity**
3. Go to **Registration** tab and set to **Invite only**
4. Go to **External providers** and enable **GitHub** (optional)

### Step 3: Enable Git Gateway
1. In Netlify dashboard, go to **Site settings** > **Identity** > **Services**
2. Click **Enable Git Gateway**
3. This allows the CMS to commit changes to your repository

### Step 4: Invite Users
1. Go to **Identity** > **Invite users**
2. Invite Autumn with her email address
3. She'll receive an email to set up her account

## How Autumn Can Use It

### Accessing the CMS
1. Go to `https://yourdomain.com/admin/`
2. Log in with her Netlify Identity account
3. Start managing content!

### Adding New Content
1. Click **New [Content Type]** (e.g., "New Event")
2. Fill in the required fields
3. Use the markdown editor for rich content
4. Upload images directly to the media library
5. Click **Save** to publish

### Editing Existing Content
1. Browse collections in the left sidebar
2. Click on any item to edit
3. Make changes and save

### Managing Media
- All images are stored in `/images/uploads/`
- Upload images directly through the CMS
- Images are automatically optimized

## Content Management Tips

### For Events
- Always include Eventbrite links
- Use consistent date formatting
- Upload high-quality event images
- Write compelling descriptions

### For Blog Posts
- Use descriptive titles
- Include meta descriptions for SEO
- Add featured images
- Use markdown for formatting

### For Testimonials
- Get permission before publishing
- Include full names and titles
- Use high-quality client photos
- Keep quotes concise and impactful

## Technical Notes

### File Structure
```
/
├── admin/
│   ├── index.html          # CMS interface
│   └── config.yml          # CMS configuration
├── content/
│   ├── pages/              # Website pages
│   ├── events/             # Events and workshops
│   ├── blog/               # Blog posts
│   ├── testimonials/        # Client testimonials
│   ├── clients/            # Client logos
│   ├── speaking-topics/    # Speaking engagements
│   └── settings/           # Site settings
├── images/
│   └── uploads/            # CMS-uploaded media
└── js/
    └── cms-loader.js       # Content loading script
```

### Customization
- Edit `/admin/config.yml` to modify content types
- Add new fields by updating the configuration
- Modify the content loader script for advanced features

## Support and Maintenance

### Regular Tasks
- Review and approve content changes
- Monitor media uploads
- Update site settings as needed
- Backup content regularly

### Troubleshooting
- Check Netlify Identity settings
- Verify Git Gateway is enabled
- Ensure proper file permissions
- Check browser console for errors

## Next Steps

1. **Deploy the site** to Netlify
2. **Set up Identity and Git Gateway**
3. **Invite Autumn** to the CMS
4. **Train Autumn** on using the interface
5. **Migrate existing content** to the CMS
6. **Test all functionality** thoroughly

## Benefits for Autumn

- **No coding required** - Easy visual interface
- **Real-time updates** - Changes appear immediately
- **Media management** - Upload and organize images easily
- **SEO friendly** - Proper meta tags and descriptions
- **Mobile responsive** - Works on any device
- **Version control** - All changes are tracked
- **Backup included** - Content is safely stored in Git

This setup gives Autumn complete control over her website content while maintaining the professional design and functionality you've built.


