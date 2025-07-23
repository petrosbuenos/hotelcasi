// Casino Data
const casinos = [
    {
        id: 1,
        name: "Casino Royal",
        logo: "🎰",
        rating: 4.8,
        bonus: "100% do 2000 PLN",
        features: ["Live Casino", "Mobile", "24/7 Support"],
        primaryAction: "Graj Teraz",
        secondaryAction: "Recenzja"
    },
    {
        id: 2,
        name: "Golden Palace",
        logo: "👑",
        rating: 4.7,
        bonus: "150% do 1500 PLN",
        features: ["Slots", "Table Games", "VIP Program"],
        primaryAction: "Graj Teraz",
        secondaryAction: "Recenzja"
    },
    {
        id: 3,
        name: "Lucky Star",
        logo: "⭐",
        rating: 4.6,
        bonus: "200% do 1000 PLN",
        features: ["Progressive Jackpots", "Tournaments", "Fast Payouts"],
        primaryAction: "Graj Teraz",
        secondaryAction: "Recenzja"
    },
    {
        id: 4,
        name: "Diamond Casino",
        logo: "💎",
        rating: 4.9,
        bonus: "125% do 2500 PLN",
        features: ["Exclusive Games", "High Rollers", "Crypto"],
        primaryAction: "Graj Teraz",
        secondaryAction: "Recenzja"
    },
    {
        id: 5,
        name: "Ocean Casino",
        logo: "🌊",
        rating: 4.5,
        bonus: "100% do 1800 PLN",
        features: ["Fish Games", "Live Dealers", "Instant Play"],
        primaryAction: "Graj Teraz",
        secondaryAction: "Recenzja"
    },
    {
        id: 6,
        name: "Mystic Casino",
        logo: "🔮",
        rating: 4.4,
        bonus: "175% do 1200 PLN",
        features: ["Themed Slots", "Bonus Buy", "Free Spins"],
        primaryAction: "Graj Teraz",
        secondaryAction: "Recenzja"
    },
    {
        id: 7,
        name: "Royal Vegas",
        logo: "🎲",
        rating: 4.8,
        bonus: "110% do 2200 PLN",
        features: ["Classic Games", "Loyalty Program", "Mobile App"],
        primaryAction: "Graj Teraz",
        secondaryAction: "Recenzja"
    },
    {
        id: 8,
        name: "Cyber Casino",
        logo: "🤖",
        rating: 4.3,
        bonus: "90% do 3000 PLN",
        features: ["VR Games", "AI Support", "Blockchain"],
        primaryAction: "Graj Teraz",
        secondaryAction: "Recenzja"
    },
    {
        id: 9,
        name: "Wild West Casino",
        logo: "🤠",
        rating: 4.6,
        bonus: "130% do 1600 PLN",
        features: ["Western Theme", "Poker Room", "Sports Betting"],
        primaryAction: "Graj Teraz",
        secondaryAction: "Recenzja"
    },
    {
        id: 10,
        name: "Space Casino",
        logo: "🚀",
        rating: 4.7,
        bonus: "140% do 1400 PLN",
        features: ["Space Theme", "Megaways", "Crash Games"],
        primaryAction: "Graj Teraz",
        secondaryAction: "Recenzja"
    },
    {
        id: 11,
        name: "Forest Casino",
        logo: "🌲",
        rating: 4.5,
        bonus: "95% do 2800 PLN",
        features: ["Nature Theme", "Eco-Friendly", "Community"],
        primaryAction: "Graj Teraz",
        secondaryAction: "Recenzja"
    },
    {
        id: 12,
        name: "Neon Casino",
        logo: "💫",
        rating: 4.8,
        bonus: "160% do 1100 PLN",
        features: ["Neon Theme", "Retro Games", "Arcade"],
        primaryAction: "Graj Teraz",
        secondaryAction: "Recenzja"
    }
];

// FAQ Data
const faqs = [
    {
        question: "Czy kasyna online są bezpieczne?",
        answer: "Tak, wszystkie kasyna w naszym rankingu posiadają licencje od uznanych organów nadzoru, stosują szyfrowanie SSL i regularnie przechodzą audyty bezpieczeństwa."
    },
    {
        question: "Jakie są wymagania wiekowe?",
        answer: "Aby grać w kasynach online, musisz mieć ukończone 18 lat. Niektóre kasyna mogą wymagać wieku 21 lat w zależności od jurysdykcji."
    },
    {
        question: "Jak mogę wypłacić wygrane?",
        answer: "Większość kasyn oferuje różne metody wypłat: karty bankowe, przelewy bankowe, e-portfele (PayPal, Skrill) oraz kryptowaluty."
    },
    {
        question: "Czy mogę grać na telefonie?",
        answer: "Tak, wszystkie kasyna w naszym rankingu są w pełni responsywne i oferują aplikacje mobilne lub wersje przeglądarkowe."
    },
    {
        question: "Jakie są najlepsze bonusy powitalne?",
        answer: "Najlepsze bonusy to te z niskimi wymaganiami obrotu, wysokimi limitami wypłat i długimi terminami realizacji."
    },
    {
        question: "Czy mogę grać za darmo?",
        answer: "Tak, większość kasyn oferuje tryb demo, gdzie możesz grać za darmo bez ryzyka utraty pieniędzy."
    }
];

// Utility Functions
function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    let stars = '';
    
    for (let i = 0; i < fullStars; i++) {
        stars += '★';
    }
    
    if (hasHalfStar) {
        stars += '☆';
    }
    
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
        stars += '☆';
    }
    
    return stars;
}

function createCasinoCard(casino) {
    return `
        <div class="casino-card" data-casino-id="${casino.id}">
            <div class="casino-header">
                <div class="casino-logo">${casino.logo}</div>
                <div class="casino-info">
                    <h4>${casino.name}</h4>
                    <div class="casino-rating">
                        <span class="stars">${generateStars(casino.rating)}</span>
                        <span class="rating-text">${casino.rating}/5</span>
                    </div>
                </div>
            </div>
            <div class="casino-bonus">${casino.bonus}</div>
            <div class="casino-features">
                ${casino.features.map(feature => `<span class="feature-tag">${feature}</span>`).join('')}
            </div>
            <div class="casino-actions">
                <button class="casino-button primary-button" onclick="handleCasinoClick(${casino.id}, 'primary')">
                    ${casino.primaryAction}
                </button>
                <button class="casino-button secondary-button" onclick="handleCasinoClick(${casino.id}, 'secondary')">
                    ${casino.secondaryAction}
                </button>
            </div>
        </div>
    `;
}

function createFAQItem(faq, index) {
    return `
        <div class="faq-item" data-faq-index="${index}">
            <div class="faq-question" onclick="toggleFAQ(${index})">
                <span>${faq.question}</span>
                <button class="faq-toggle">+</button>
            </div>
            <div class="faq-answer">
                ${faq.answer}
            </div>
        </div>
    `;
}

// Scroll Navigation Functions
function scrollCasinos(direction) {
    const casinosGrid = document.getElementById('casinosGrid');
    const scrollAmount = 400; // Adjust based on card width + gap
    
    if (direction === 'left') {
        casinosGrid.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    } else {
        casinosGrid.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    }
}

// Enhanced Event Handlers
function handleCtaClick() {
    console.log('CTA button clicked');
    // Add impressive animation
    const button = event.target;
    button.style.transform = 'scale(0.95)';
    setTimeout(() => {
        button.style.transform = 'scale(1)';
        alert('🎰 Przekierowanie do najlepszego kasyna...');
    }, 150);
}

function handleCasinoClick(casinoId, action) {
    const casino = casinos.find(c => c.id === casinoId);
    const card = document.querySelector(`[data-casino-id="${casinoId}"]`);
    
    console.log(`${action} action for casino:`, casino.name);
    
    // Add click animation
    card.style.transform = 'scale(0.98)';
    setTimeout(() => {
        card.style.transform = 'translateY(-15px) scale(1.05)';
    }, 150);
    
    if (action === 'primary') {
        // Логіка для основної кнопки (перехід на казино)
        setTimeout(() => {
            alert(`🎰 Przekierowanie do ${casino.name}...`);
        }, 300);
    } else {
        // Логіка для другої кнопки (перегляд рецензії)
        setTimeout(() => {
            alert(`📖 Otwieranie recenzji ${casino.name}...`);
        }, 300);
    }
}

function toggleFAQ(index) {
    const faqItem = document.querySelector(`[data-faq-index="${index}"]`);
    const question = faqItem.querySelector('.faq-question');
    const answer = faqItem.querySelector('.faq-answer');
    const toggle = faqItem.querySelector('.faq-toggle');
    
    const isExpanded = answer.classList.contains('expanded');
    
    // Закриваємо всі інші FAQ
    document.querySelectorAll('.faq-answer').forEach(ans => {
        ans.classList.remove('expanded');
    });
    document.querySelectorAll('.faq-toggle').forEach(tog => {
        tog.classList.remove('expanded');
        tog.textContent = '+';
    });
    
    // Відкриваємо/закриваємо поточний FAQ
    if (!isExpanded) {
        answer.classList.add('expanded');
        toggle.classList.add('expanded');
        toggle.textContent = '×';
        
        // Smooth scroll to expanded FAQ
        setTimeout(() => {
            faqItem.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        }, 300);
    }
}

// Enhanced Animation Functions
function animateOnScroll() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                
                // Add staggered animation for casino cards
                if (entry.target.classList.contains('casino-card')) {
                    const delay = Array.from(entry.target.parentNode.children).indexOf(entry.target) * 100;
                    entry.target.style.transitionDelay = `${delay}ms`;
                }
            }
        });
    }, observerOptions);
    
    // Спостерігаємо за елементами для анімації
    document.querySelectorAll('.casino-card, .feature-card, .faq-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Smooth scrolling for anchor links
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Enhanced Analytics and tracking
function initAnalytics() {
    console.log('Analytics initialized for /lovetr page');
    
    // Відстеження кліків по кнопках з деталями
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('cta-button') || 
            e.target.classList.contains('casino-button')) {
            console.log('Button click tracked:', {
                text: e.target.textContent,
                timestamp: new Date().toISOString(),
                userAgent: navigator.userAgent
            });
        }
    });
    
    // Track scroll behavior
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            console.log('User scrolled to position:', window.scrollY);
        }, 100);
    });
}

// Performance optimization
function lazyLoadImages() {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Enhanced interactive effects
function addInteractiveEffects() {
    // Parallax effect for hero section
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const heroBackground = document.querySelector('.hero-background');
        if (heroBackground) {
            heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });
    
    // Enhanced hover effects for casino cards
    document.querySelectorAll('.casino-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.05)';
            this.style.boxShadow = '0 30px 60px rgba(0, 0, 0, 0.5)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
        });
        
        // Add click ripple effect
        card.addEventListener('click', function(e) {
            const ripple = document.createElement('div');
            ripple.style.position = 'absolute';
            ripple.style.borderRadius = '50%';
            ripple.style.background = 'rgba(255, 255, 255, 0.3)';
            ripple.style.transform = 'scale(0)';
            ripple.style.animation = 'ripple 0.6s linear';
            ripple.style.left = (e.clientX - this.offsetLeft) + 'px';
            ripple.style.top = (e.clientY - this.offsetTop) + 'px';
            ripple.style.width = ripple.style.height = '20px';
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // Add CSS for ripple animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('Lovetr page loaded');
    
    // Load casinos
    const casinosGrid = document.getElementById('casinosGrid');
    if (casinosGrid) {
        casinosGrid.innerHTML = casinos.map(createCasinoCard).join('');
    }
    
    // Load FAQs
    const faqList = document.getElementById('faqList');
    if (faqList) {
        faqList.innerHTML = faqs.map((faq, index) => createFAQItem(faq, index)).join('');
    }
    
    // Initialize animations
    animateOnScroll();
    
    // Initialize smooth scrolling
    initSmoothScrolling();
    
    // Initialize analytics
    initAnalytics();
    
    // Initialize lazy loading
    lazyLoadImages();
    
    // Add interactive effects
    addInteractiveEffects();
    
    // Add keyboard navigation for casinos
    addKeyboardNavigation();
});

// Keyboard navigation
function addKeyboardNavigation() {
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft') {
            scrollCasinos('left');
        } else if (e.key === 'ArrowRight') {
            scrollCasinos('right');
        }
    });
}

// Error handling
window.addEventListener('error', function(e) {
    console.error('Error on lovetr page:', e.error);
});

// Performance monitoring
window.addEventListener('load', function() {
    const loadTime = performance.now();
    console.log(`Page loaded in ${loadTime.toFixed(2)}ms`);
    
    // Report performance metrics
    if ('performance' in window) {
        const perfData = performance.getEntriesByType('navigation')[0];
        console.log('Performance metrics:', {
            loadTime: perfData.loadEventEnd - perfData.loadEventStart,
            domContentLoaded: perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart,
            firstPaint: performance.getEntriesByType('paint')[0]?.startTime
        });
    }
}); 