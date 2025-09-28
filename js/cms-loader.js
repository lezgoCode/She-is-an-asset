// CMS Content Loader for She's An Asset Website
class CMSLoader {
    constructor() {
        this.contentCache = new Map();
        this.basePath = 'https://dainty-buttercream-25bae8.netlify.app/content';
    }

    // Load content from markdown files
    async loadContent(type, slug = null) {
        const cacheKey = `${type}${slug ? `-${slug}` : ''}`;
        
        if (this.contentCache.has(cacheKey)) {
            return this.contentCache.get(cacheKey);
        }

        try {
            let url;
            if (slug) {
                url = `${this.basePath}/${type}/${slug}.md`;
            } else {
                url = `${this.basePath}/${type}.md`;
            }

            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Failed to load content: ${response.status}`);
            }

            const text = await response.text();
            const content = this.parseMarkdown(text);
            
            this.contentCache.set(cacheKey, content);
            return content;
        } catch (error) {
            console.error(`Error loading ${type} content:`, error);
            return null;
        }
    }

    // Parse markdown with frontmatter
    parseMarkdown(text) {
        const frontmatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
        const match = text.match(frontmatterRegex);
        
        if (match) {
            const frontmatter = this.parseYAML(match[1]);
            const content = match[2];
            return { ...frontmatter, content };
        }
        
        return { content: text };
    }

    // Simple YAML parser for frontmatter
    parseYAML(yaml) {
        const result = {};
        const lines = yaml.split('\n');
        
        for (const line of lines) {
            const trimmed = line.trim();
            if (trimmed && !trimmed.startsWith('#')) {
                const colonIndex = trimmed.indexOf(':');
                if (colonIndex > 0) {
                    const key = trimmed.substring(0, colonIndex).trim();
                    let value = trimmed.substring(colonIndex + 1).trim();
                    
                    // Remove quotes if present
                    if ((value.startsWith('"') && value.endsWith('"')) || 
                        (value.startsWith("'") && value.endsWith("'"))) {
                        value = value.slice(1, -1);
                    }
                    
                    // Parse boolean values
                    if (value === 'true') value = true;
                    if (value === 'false') value = false;
                    
                    result[key] = value;
                }
            }
        }
        
        return result;
    }

    // Update page content dynamically
updatePageContent(content) {
    if (!content) return;

    console.log('Updating content:', content);

    // Update hero content
    if (content.hero_headline) {
        const headlineEl = document.querySelector('.hero-headline');
        if (headlineEl) {
            headlineEl.textContent = content.hero_headline;
            console.log('Updated headline:', content.hero_headline);
        }
    }

    if (content.hero_subhead) {
        const subheadEl = document.querySelector('.hero-subhead');
        if (subheadEl) {
            subheadEl.textContent = content.hero_subhead;
            console.log('Updated subhead:', content.hero_subhead);
        }
    }
}

    updateMetaTag(name, content) {
        let meta = document.querySelector(`meta[name="${name}"]`) || 
                  document.querySelector(`meta[property="${name}"]`);
        
        if (!meta) {
            meta = document.createElement('meta');
            if (name.startsWith('og:') || name.startsWith('twitter:')) {
                meta.setAttribute('property', name);
            } else {
                meta.setAttribute('name', name);
            }
            document.head.appendChild(meta);
        }
        
        meta.setAttribute('content', content);
    }
}

// Initialize CMS Loader
const cmsLoader = new CMSLoader();

// Auto-load content for current page
document.addEventListener('DOMContentLoaded', async () => {
    const currentPage = window.location.pathname.split('/').pop().replace('.html', '');
    
    if (currentPage === 'index' || currentPage === '') {
        const homeContent = await cmsLoader.loadContent('pages', 'home');
        cmsLoader.updatePageContent(homeContent);
    }
});

// Export for use in other scripts
window.CMSLoader = CMSLoader;
window.cmsLoader = cmsLoader;
