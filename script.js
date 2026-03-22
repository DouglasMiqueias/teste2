// Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Header scroll effect
const header = document.querySelector('.header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.style.background = 'rgba(10, 10, 10, 0.95)';
        header.style.backdropFilter = 'blur(20px)';
    } else {
        header.style.background = 'rgba(10, 10, 10, 0.8)';
        header.style.backdropFilter = 'blur(20px)';
    }
    
    lastScroll = currentScroll;
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70; // Account for fixed header
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Add fade-in class to elements
document.addEventListener('DOMContentLoaded', () => {
    const elementsToAnimate = [
        '.about-content',
        '.service-card',
        '.differential-card',
        '.portfolio-item',
        '.stat',
        '.number',
        '.cta-content'
    ];
    
    elementsToAnimate.forEach(selector => {
        document.querySelectorAll(selector).forEach(el => {
            el.classList.add('fade-in');
            observer.observe(el);
        });
    });
});

// Team Slider
const teamSlider = document.querySelector('.team-slider');
if (teamSlider) {
    let currentMember = 0;
    const teamMembers = document.querySelectorAll('.team-member');
    const totalMembers = teamMembers.length;
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.team-nav-btn.prev');
    const nextBtn = document.querySelector('.team-nav-btn.next');

    function showMember(index) {
        // Hide all members
        teamMembers.forEach(member => {
            member.classList.remove('active');
        });

        // Remove active from all dots
        dots.forEach(dot => {
            dot.classList.remove('active');
        });

        // Show current member
        if (teamMembers[index]) teamMembers[index].classList.add('active');
        if (dots[index]) dots[index].classList.add('active');

        currentMember = index;
    }

    function nextMember() {
        if (!totalMembers) return;
        currentMember = (currentMember + 1) % totalMembers;
        showMember(currentMember);
    }

    function prevMember() {
        if (!totalMembers) return;
        currentMember = (currentMember - 1 + totalMembers) % totalMembers;
        showMember(currentMember);
    }

    // Navigation buttons
    if (nextBtn) {
        nextBtn.addEventListener('click', nextMember);
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', prevMember);
    }

    // Dot navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showMember(index);
        });
    });

    // Auto-play (optional)
    let autoPlayInterval;

    function startAutoPlay() {
        if (!totalMembers) return;
        autoPlayInterval = setInterval(nextMember, 5000);
    }

    function stopAutoPlay() {
        clearInterval(autoPlayInterval);
    }

    // Start auto-play
    startAutoPlay();

    // Stop auto-play on hover
    teamSlider.addEventListener('mouseenter', stopAutoPlay);
    teamSlider.addEventListener('mouseleave', startAutoPlay);

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            prevMember();
            stopAutoPlay();
        } else if (e.key === 'ArrowRight') {
            nextMember();
            stopAutoPlay();
        }
    });

    // Touch/swipe support
    let touchStartX = 0;
    let touchEndX = 0;

    teamSlider.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });

    teamSlider.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });

    function handleSwipe() {
        if (touchEndX < touchStartX - 50) {
            nextMember();
        } else if (touchEndX > touchStartX + 50) {
            prevMember();
        }
    }
}

// Portfolio hover effects
document.querySelectorAll('.portfolio-item').forEach(item => {
    item.addEventListener('click', function() {
        // Open image in new tab or lightbox if needed
        window.open(this.src, '_blank');
    });
});

// Counter animation for numbers
const animateCounter = (element, target, suffix) => {
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;
    
    const updateCounter = () => {
        current += step;
        if (current < target) {
            element.textContent = Math.floor(current) + suffix;
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target + suffix;
        }
    };
    
    updateCounter();
};

// Counter observer
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
            const text = entry.target.textContent;
            const number = parseInt(text.replace(/\D/g, ''));
            const suffix = text.replace(/[0-9]/g, '');
            
            entry.target.classList.add('animated');
            animateCounter(entry.target, number, suffix);
        }
    });
}, { threshold: 0.5 });

// Observe counter elements
document.querySelectorAll('.counter').forEach(counter => {
    counterObserver.observe(counter);
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroContent = document.querySelector('.hero-content');
    
    if (heroContent && scrolled < window.innerHeight) {
        heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
        heroContent.style.opacity = 1 - (scrolled / window.innerHeight);
    }
});

// Form validation (if contact form is added)
const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
};

// Lazy loading for images
const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            if (img.dataset.src) {
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        }
    });
});

// Observe all images with data-src
document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
});

// Performance optimization: Throttle scroll events
const throttle = (func, limit) => {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
};

// Apply throttling to scroll events
window.addEventListener('scroll', throttle(() => {
    // Scroll-based animations here
}, 100));

// Preloader
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Active navigation highlighting
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link[href^="#"]');

const highlightNavigation = () => {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
};

window.addEventListener('scroll', throttle(highlightNavigation, 100));

// Add active class styling
const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: var(--color-accent);
    }
    .nav-link.active::after {
        width: 100%;
    }
`;
document.head.appendChild(style);

// Console branding
console.log('%c🦌 Cervo Films', 'font-size: 20px; font-weight: bold; color: #ffffff;');
console.log('%cTransformamos eventos em experiências cinematográficas', 'font-size: 14px; color: #666;');

/* SERVICES - EXPANSÃO POR CLIQUE (TOGGLE) */
const servicesGrid = document.querySelector('.services-grid');
const serviceCards = document.querySelectorAll('.service-card');

const servicesState = {
    activeCard: null
};

function setActiveServiceCard(card) {
    serviceCards.forEach(c => {
        c.classList.remove('active', 'expanded');
        c.setAttribute('aria-expanded', 'false');
    });
    servicesGrid?.classList.remove('has-active');

    if (!card) {
        servicesState.activeCard = null;
        return;
    }

    card.classList.add('active', 'expanded');
    card.setAttribute('aria-expanded', 'true');
    servicesGrid?.classList.add('has-active');
    servicesState.activeCard = card;

    // Acessibilidade
    card.focus();
}

function toggleServiceCard(card) {
    if (servicesState.activeCard === card) {
        setActiveServiceCard(null);
    } else {
        setActiveServiceCard(card);
    }
}

// Clique para expandir/colapsar (event delegation)
servicesGrid?.addEventListener('click', (e) => {
    const card = e.target.closest?.('.service-card');
    if (!card || !servicesGrid.contains(card)) return;
    toggleServiceCard(card);
});

// Teclado: Enter/Space expande, ESC fecha
serviceCards.forEach(card => {
    card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleServiceCard(card);
        }
        if (e.key === 'Escape') {
            setActiveServiceCard(null);
        }
    });
});

// Clicar fora fecha
document.addEventListener('click', (e) => {
    if (!servicesGrid) return;
    if (!servicesGrid.contains(e.target)) {
        setActiveServiceCard(null);
    }
});

// ══════════════════════════════════════════
// Reviews Carousel — Cervo Films
// Loop infinito: clona todos os cards ao final do track.
// Quando a transição atinge um clone, reseta instantaneamente
// para o original correspondente (mesmo visual, sem salto).
// ══════════════════════════════════════════
(function () {
    var el = document.getElementById('reviewsCarousel');
    if (!el) return;

    var track    = el.querySelector('.rv__track');
    var viewport = el.querySelector('.rv__viewport');
    var btnPrev  = el.querySelector('.rv__arrow--prev');
    var btnNext  = el.querySelector('.rv__arrow--next');
    if (!track || !viewport || !btnPrev || !btnNext) return;

    // --- Config ---
    var GAP           = 24;   // px  (igual ao CSS gap)
    var SPEED         = 700;  // ms  da transição
    var AUTOPLAY_MS   = 4000; // ms  entre slides

    // --- Originais ---
    var originals = Array.from(track.children);
    var total     = originals.length;
    if (total === 0) return;

    // --- Clones ao final ---
    originals.forEach(function (card) {
        var clone = card.cloneNode(true);
        clone.setAttribute('aria-hidden', 'true');
        track.appendChild(clone);
    });

    // --- Estado ---
    var idx        = 0;
    var sliding    = false;
    var timer      = null;
    var pauseTimer = null;

    // --- Helpers ---
    function perView() {
        return window.innerWidth <= 768 ? 1 : 2;
    }

    function cardWidth() {
        var vw = viewport.offsetWidth;
        var pv = perView();
        return (vw - GAP * (pv - 1)) / pv;
    }

    function moveTo(i, animate) {
        var cw = cardWidth();
        var offset = -(i * (cw + GAP));

        if (animate) {
            track.classList.add('is-sliding');
        } else {
            track.classList.remove('is-sliding');
        }

        track.style.transform = 'translateX(' + offset + 'px)';
    }

    // --- Slide ---
    function slideNext() {
        if (sliding) return;
        sliding = true;
        idx++;
        moveTo(idx, true);
    }

    function slidePrev() {
        if (sliding) return;
        sliding = true;
        idx--;
        if (idx < 0) {
            // Salto instantâneo para o fim dos originais e depois anima
            idx = total - 1;
            moveTo(total, false); // posição do clone correspondente
            // forçar reflow
            void track.offsetWidth;
            idx = total - 1;
            moveTo(idx, true);
        } else {
            moveTo(idx, true);
        }
    }

    // --- Fim da transição ---
    track.addEventListener('transitionend', function (e) {
        // Ignorar eventos de filhos (hover nos cards)
        if (e.target !== track) return;
        sliding = false;
        // Se passou dos originais → reseta para o índice 0
        if (idx >= total) {
            idx = 0;
            moveTo(0, false);
        }
    });

    // --- Autoplay ---
    function play() {
        stop();
        timer = setInterval(slideNext, AUTOPLAY_MS);
    }

    function stop() {
        clearInterval(timer);
        timer = null;
    }

    // --- Eventos ---
    btnNext.addEventListener('click', function () {
        slideNext();
        stop();
        clearTimeout(pauseTimer);
        pauseTimer = setTimeout(play, 6000);
    });

    btnPrev.addEventListener('click', function () {
        slidePrev();
        stop();
        clearTimeout(pauseTimer);
        pauseTimer = setTimeout(play, 6000);
    });

    el.addEventListener('mouseenter', stop);
    el.addEventListener('mouseleave', play);

    // --- Resize ---
    var resizeId;
    window.addEventListener('resize', function () {
        clearTimeout(resizeId);
        resizeId = setTimeout(function () {
            moveTo(idx, false);
        }, 200);
    });

    // --- Init ---
    moveTo(0, false);
    play();
})();

document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.carousel-track');
    const cards = document.querySelectorAll('.camera-card');
    const indicators = document.querySelectorAll('.indicator');
    const prevBtn = document.querySelector('.carousel-prev');
    const nextBtn = document.querySelector('.carousel-next');
    
    let currentIndex = 0;
    const totalCards = cards.length;
    const cardsPerView = 2;
    const maxIndex = totalCards - cardsPerView;
    
    function updateCarousel() {
        track.className = `carousel-track ${currentIndex === maxIndex ? 'show-card-3' : ''}`;
        
        // Update indicators
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index < cardsPerView || (currentIndex === maxIndex && index === 2));
        });
    }
    
    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });
    
    nextBtn.addEventListener('click', () => {
        if (currentIndex < maxIndex) {
            currentIndex++;
            updateCarousel();
        }
    });
    
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            if (index <= maxIndex) {
                currentIndex = index;
                updateCarousel();
            }
        });
    });
    
    // Auto-play opcional
    // setInterval(() => {
    //     if (currentIndex < maxIndex) {
    //         currentIndex++;
    //     } else {
    //         currentIndex = 0;
    //     }
    //     updateCarousel();
    // }, 5000);
});
// Carrossel automático com títulos dinâmicos
document.addEventListener('DOMContentLoaded', function() {
    const galleries = document.querySelectorAll('.containerVideo[data-gallery]');
    
    galleries.forEach(gallery => {
        const track = gallery.querySelector('.gallery-track');
        const slides = track.querySelectorAll('.gallery-slide');
        
        let currentIndex = 0;
        const totalSlides = slides.length;
        let autoPlayInterval;
        const autoPlayDelay = 4000;
        let isPaused = false;
        
        function updateGallery() {
            // Move track
            const translateX = -currentIndex * 100;
            track.style.transform = `translateX(${translateX}%)`;
            
            // Update active slide (para título)
            slides.forEach((slide, index) => {
                slide.classList.toggle('active', index === currentIndex);
            });
        }
        
        function nextSlide() {
            if (!isPaused) {
                currentIndex = (currentIndex + 1) % totalSlides;
                updateGallery();
            }
        }
        
        function startAutoPlay() {
            if (autoPlayInterval) clearInterval(autoPlayInterval);
            autoPlayInterval = setInterval(nextSlide, autoPlayDelay);
        }
        
        function pauseAutoPlay() {
            isPaused = true;
            if (autoPlayInterval) {
                clearInterval(autoPlayInterval);
                autoPlayInterval = null;
            }
        }
        
        function resumeAutoPlay() {
            isPaused = false;
            startAutoPlay();
        }
        
        // Inicializar
        if (totalSlides > 0) {
            updateGallery();
            startAutoPlay();
        }
        
        // Pause/resume behaviors
        gallery.addEventListener('mouseenter', pauseAutoPlay);
        gallery.addEventListener('mouseleave', resumeAutoPlay);
        
        // Touch/swipe
        let startX = 0, currentX = 0;
        track.addEventListener('touchstart', e => {
            startX = e.touches[0].clientX;
            pauseAutoPlay();
        });
        
        track.addEventListener('touchmove', e => {
            currentX = e.touches[0].clientX;
        });
        
        track.addEventListener('touchend', () => {
            const diff = startX - currentX;
            if (Math.abs(diff) > 50) {
                if (diff > 0) {
                    currentIndex = (currentIndex + 1) % totalSlides;
                } else {
                    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
                }
                updateGallery();
            }
            setTimeout(resumeAutoPlay, 2000);
        });
        
        // Keyboard
        gallery.addEventListener('keydown', e => {
            if (e.key === 'ArrowLeft') {
                currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
            } else if (e.key === 'ArrowRight') {
                currentIndex = (currentIndex + 1) % totalSlides;
            }
            updateGallery();
            pauseAutoPlay();
            setTimeout(resumeAutoPlay, 3000);
        });
    });
});






// Scroll Indicator para a seção About
document.addEventListener('DOMContentLoaded', function() {
    const aboutContent = document.querySelector('.about-content');
    const scrollIndicator = document.getElementById('aboutScrollIndicator');
    
    if (aboutContent && scrollIndicator) {
        function checkScrollIndicator() {
            const scrollTop = aboutContent.scrollTop;
            const scrollHeight = aboutContent.scrollHeight;
            const clientHeight = aboutContent.clientHeight;
            
            // Mostra o indicador se não estiver no final (com margem de 50px)
            if (scrollTop + clientHeight < scrollHeight - 50) {
                scrollIndicator.classList.add('show');
            } else {
                scrollIndicator.classList.remove('show');
            }
        }
        
        // Verifica inicialmente e em scroll
        checkScrollIndicator();
        aboutContent.addEventListener('scroll', checkScrollIndicator);
        
        // Também verifica em resize da janela
        window.addEventListener('resize', checkScrollIndicator);
    }
});