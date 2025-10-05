// CMS Content Loader for She's An Asset Website
class CMSLoader {
    constructor(basePath) {
        this.basePath = basePath || '/content';
        this.cache = new Map();
    }

    async loadContent(collection, slug) {
        const cacheKey = `${collection}:${slug || '__single__'}`;
        if (this.cache.has(cacheKey)) return this.cache.get(cacheKey);

        const url = slug
            ? `${this.basePath}/${collection}/${slug}.md`
            : `${this.basePath}/${collection}.md`;

        try {
            const res = await fetch(url, { cache: 'no-store' });
            if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.status}`);
            const raw = await res.text();
            const parsed = this.parseFrontmatter(raw);
            this.cache.set(cacheKey, parsed);
            return parsed;
        } catch (err) {
            console.error('[CMSLoader] loadContent error:', err);
            return null;
        }
    }

    parseFrontmatter(text) {
        const fm = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
        const match = text.match(fm);
        if (!match) return { data: {}, body: text };
        const yaml = match[1];
        const body = match[2];
        return { data: this.parseYAML(yaml), body };
    }

    parseYAML(yaml) {
        // Minimal YAML key: value parser sufficient for frontmatter
        const obj = {};
        const lines = yaml.split('\n');
        for (const line of lines) {
            const trimmed = line.trim();
            if (!trimmed || trimmed.startsWith('#')) continue;
            const idx = trimmed.indexOf(':');
            if (idx === -1) continue;
            const key = trimmed.slice(0, idx).trim();
            let value = trimmed.slice(idx + 1).trim();
            if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
                value = value.slice(1, -1);
            }
            if (value === 'true') value = true;
            else if (value === 'false') value = false;
            obj[key] = value;
        }
        return obj;
    }

    updateMeta(data) {
        if (!data) return;
        const setMeta = (name, content) => {
            if (!content) return;
            let el = document.querySelector(`meta[name="${name}"]`) || document.querySelector(`meta[property="${name}"]`);
            if (!el) {
                el = document.createElement('meta');
                if (name.startsWith('og:') || name.startsWith('twitter:')) el.setAttribute('property', name);
                else el.setAttribute('name', name);
                document.head.appendChild(el);
            }
            el.setAttribute('content', content);
        };
        if (data.title) {
            document.title = data.title;
            setMeta('og:title', data.title);
            setMeta('twitter:title', data.title);
        }
        if (data.description) {
            setMeta('description', data.description);
            setMeta('og:description', data.description);
            setMeta('twitter:description', data.description);
        }
        if (data.keywords) setMeta('keywords', data.keywords);
    }

    hydrateHome(page) {
        if (!page) return;
        const { data } = page;
        if (data.hero_headline) {
            const h = document.querySelector('.hero-headline');
            if (h) h.textContent = data.hero_headline;
        }
        if (data.hero_subhead) {
            const s = document.querySelector('.hero-subhead');
            if (s) s.textContent = data.hero_subhead;
        }
        this.updateMeta(data);
        // Hero video from CMS
        if (data.hero_video) {
          const srcEl = document.getElementById('heroVideoSource');
          const videoEl = document.querySelector('.hero-video');
          if (srcEl && videoEl) {
            srcEl.src = data.hero_video;  // can be /images/uploads/yourvideo.mp4 or full URL
            videoEl.load();
              }
}
    }

    hydrateHomepageEvent(event) {
        if (!event) return;
        const { data } = event;
        const titleEl = document.querySelector('.event-details h3');
        if (titleEl && data.title) titleEl.textContent = data.title;

        const dateEl = document.querySelector('.event-date');
        if (dateEl && data.date) dateEl.textContent = this.formatEventDate(data.date);

        const locEl = document.querySelector('.event-location');
        if (locEl && data.location) locEl.textContent = data.location;

        const descEl = document.querySelector('.event-description');
        if (descEl && (data.description || event.body)) descEl.textContent = data.description || event.body;

        const imgEl = document.querySelector('.event-image img');
        if (imgEl && data.image) imgEl.setAttribute('src', data.image);

        const cta = document.querySelector('.event-details a.btn.btn-primary');
        if (cta && data.eventbrite_link) {
            cta.setAttribute('href', data.eventbrite_link);
            cta.setAttribute('target', '_blank');
            cta.setAttribute('rel', 'noopener');
        }
    }

    formatEventDate(iso) {
        // Keep original string if not ISO
        try {
            const d = new Date(iso);
            if (isNaN(d.getTime())) return iso;
            const formatter = new Intl.DateTimeFormat(undefined, { weekday: 'long', month: 'long', day: 'numeric' });
            return `${formatter.format(d)} · 9:00 AM – 4:00 PM EDT`;
        } catch (_) { return iso; }
    }
}

(function init() {
    document.addEventListener('DOMContentLoaded', async () => {
        const loader = new CMSLoader('/content');
        const path = (window.location.pathname || '').replace(/\/+/g, '/');
        const page = path.split('/').pop().replace('.html', '') || 'index';

        if (page === 'index') {
            const home = await loader.loadContent('pages', 'home');
            loader.hydrateHome(home);
            const event = await loader.loadContent('events', 'hard-target-fundamentals');
            loader.hydrateHomepageEvent(event);
        } else if (page === 'about') {
            const about = await loader.loadContent('pages', 'about');
            if (about) {
                const h1 = document.querySelector('.page-header h1');
                if (h1 && about.data.title) h1.textContent = about.data.title;
                const hh = document.querySelector('.hero-headline');
                if (hh && about.data.hero_headline) hh.textContent = about.data.hero_headline;
                const hs = document.querySelector('.hero-subhead');
                if (hs && about.data.hero_subhead) hs.textContent = about.data.hero_subhead;
                const bio = document.querySelector('.autumn-bio');
                if (bio && about.body) bio.innerHTML = CMSLoader.prototype.markdownToHTML(about.body);
                loader.updateMeta(about.data);
            }
        const genericPages = ['speaking', 'corporate', 'safety', 'womens-events', 'podcast', 'private', 'hard-target-society'];
        
        if (genericPages.includes(page)) {
            const content = await loader.loadContent('pages', page);
            if (content) {
                // Update page title
                if (content.data.title) document.title = content.data.title;
                
                // Update hero content if elements exist
                const hh = document.querySelector('.hero-headline');
                if (hh && content.data.hero_headline) hh.textContent = content.data.hero_headline;
                
                const hs = document.querySelector('.hero-subhead');
                if (hs && content.data.hero_subhead) hs.textContent = content.data.hero_subhead;
                
                // Update main content areas with generic markup
                const mainContent = document.querySelector('main, .content, .container');
                if (mainContent && content.body) {
                    mainContent.innerHTML = CMSLoader.prototype.markdownToHTML(content.body);
                }
                
                // Update meta tags
                loader.updateMeta(content.data);
            }
        }
    });
})();

// Expose for debugging
window.CMSLoader = CMSLoader;
// Lightweight markdown to HTML (very basic paragraphs/line breaks)
CMSLoader.prototype.markdownToHTML = function(md) {
    if (!md) return '';
    const blocks = md.trim().split(/\n\s*\n/);
    return blocks.map(b => `<p>${b.replace(/\n/g, '<br>')}</p>`).join('');
};
