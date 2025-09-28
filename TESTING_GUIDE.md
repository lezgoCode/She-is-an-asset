# Testing Guide for Netlify CMS Setup

## Pre-Deployment Testing

### 1. File Structure Check
Verify these files exist:
- ✅ `/admin/index.html`
- ✅ `/admin/config.yml`
- ✅ `/content/settings/site.yml`
- ✅ `/content/pages/home.md`
- ✅ `/content/events/hard-target-fundamentals.md`
- ✅ `/content/testimonials/sample-testimonial.md`
- ✅ `/content/speaking-topics/resilience-keynote.md`
- ✅ `/content/clients/nexthome.md`
- ✅ `/js/cms-loader.js`

### 2. Local Testing
1. Open `admin/index.html` in a browser
2. Check for any JavaScript errors in console
3. Verify the CMS interface loads (may show login screen)

### 3. Content Validation
Check that markdown files have proper frontmatter:
```yaml
---
title: "Sample Title"
description: "Sample description"
featured: true
published: true
---
```

## Post-Deployment Testing

### 1. Netlify Setup Verification
- [ ] Site deployed successfully
- [ ] Identity enabled
- [ ] Git Gateway enabled
- [ ] User invited and can log in

### 2. CMS Functionality Testing
- [ ] Can access `/admin/` URL
- [ ] Can log in with Netlify Identity
- [ ] Can view all content collections
- [ ] Can create new content
- [ ] Can edit existing content
- [ ] Can upload images
- [ ] Can save and publish changes

### 3. Content Management Testing
Test each content type:

#### Pages
- [ ] Create new page
- [ ] Edit hero content
- [ ] Add markdown content
- [ ] Set featured status
- [ ] Save and verify changes

#### Events
- [ ] Create new event
- [ ] Set date and location
- [ ] Add Eventbrite link
- [ ] Upload event image
- [ ] Set featured status

#### Blog Posts
- [ ] Create new blog post
- [ ] Add featured image
- [ ] Write markdown content
- [ ] Set publication status

#### Testimonials
- [ ] Add new testimonial
- [ ] Include client photo
- [ ] Set featured status

#### Client Logos
- [ ] Add new client
- [ ] Upload logo image
- [ ] Add website link

#### Speaking Topics
- [ ] Create new speaking topic
- [ ] Add key takeaways
- [ ] Set audience and duration

### 4. Website Integration Testing
- [ ] Changes appear on live site
- [ ] Images load correctly
- [ ] Content displays properly
- [ ] SEO meta tags update
- [ ] Mobile responsiveness maintained

## Common Issues and Solutions

### Issue: CMS won't load
**Solution**: Check Netlify Identity and Git Gateway settings

### Issue: Can't save content
**Solution**: Verify Git Gateway is enabled and user has permissions

### Issue: Images won't upload
**Solution**: Check media folder permissions and file size limits

### Issue: Content doesn't appear on site
**Solution**: Verify content is marked as "published" and check file paths

### Issue: Login problems
**Solution**: Check email invitation was accepted and account is active

## Performance Testing

### 1. Load Times
- [ ] Admin interface loads quickly
- [ ] Content saves without delays
- [ ] Images upload efficiently

### 2. Mobile Testing
- [ ] CMS works on mobile devices
- [ ] Touch interface is responsive
- [ ] Content editing is user-friendly

## Security Testing

### 1. Access Control
- [ ] Only invited users can access CMS
- [ ] Unauthorized users are blocked
- [ ] Login sessions expire properly

### 2. Content Security
- [ ] No malicious scripts can be injected
- [ ] File uploads are secure
- [ ] User permissions are respected

## Final Checklist

Before going live:
- [ ] All content types working
- [ ] User can manage all content
- [ ] Images and media working
- [ ] Changes appear on live site
- [ ] Mobile interface functional
- [ ] Security measures in place
- [ ] Backup procedures documented
- [ ] User training completed

## Support Resources

- Netlify CMS Documentation: https://www.netlifycms.org/docs/
- Netlify Identity: https://docs.netlify.com/visitor-access/identity/
- Git Gateway: https://docs.netlify.com/visitor-access/git-gateway/

## Emergency Procedures

If something goes wrong:
1. Check Netlify dashboard for errors
2. Verify all services are enabled
3. Test with a new user account
4. Contact Netlify support if needed
5. Have backup content ready


