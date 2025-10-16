// Safari iOS video autoplay fix
(function safariVideoFix() {
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    function init() {
        const heroVideo = document.querySelector('.hero-video');
        if (!heroVideo) return;

        const tryPlay = () => {
            const playPromise = heroVideo.play();
            if (playPromise !== undefined) {
                playPromise.catch(err => {
                    console.log('Autoplay prevented, will retry on user interaction:', err.message);
                });
            }
        };

        // Try playing when video metadata is loaded
        heroVideo.addEventListener('loadeddata', tryPlay, { once: true });
        
        // Safety retry after a short delay
        setTimeout(tryPlay, 500);
        
        // iOS Low Power Mode fallback: play on first user touch
        const playOnTouch = () => {
            tryPlay();
            window.removeEventListener('touchstart', playOnTouch);
            window.removeEventListener('click', playOnTouch);
        };
        
        window.addEventListener('touchstart', playOnTouch, { once: true });
        window.addEventListener('click', playOnTouch, { once: true });
        
        // Ensure video stays muted (Safari requirement)
        heroVideo.muted = true;
        heroVideo.setAttribute('muted', '');
        heroVideo.setAttribute('playsinline', '');
        heroVideo.setAttribute('webkit-playsinline', '');
    }
})();
