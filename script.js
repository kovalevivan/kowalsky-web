// Mobile Menu
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.querySelector('.nav-menu');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });
}

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 72;
            const targetPosition = target.offsetTop - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Product Filter
const filterButtons = document.querySelectorAll('.filter-btn');
const products = document.querySelectorAll('.product');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Update active button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const filter = button.getAttribute('data-filter');

        products.forEach(product => {
            if (filter === 'all' || product.getAttribute('data-category') === filter) {
                product.style.display = 'grid';
            } else {
                product.style.display = 'none';
            }
        });
    });
});

// Product Gallery
document.querySelectorAll('.product-gallery').forEach(gallery => {
    const mainImg = gallery.querySelector('.product-main-img');
    const thumbs = gallery.querySelectorAll('.thumb');

    thumbs.forEach(thumb => {
        thumb.addEventListener('click', () => {
            // Update main image
            mainImg.src = thumb.src;
            
            // Update active thumb
            thumbs.forEach(t => t.classList.remove('active'));
            thumb.classList.add('active');
        });
    });
});

// Contact Form
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Спасибо за заявку! Мы свяжемся с вами в ближайшее время.');
        contactForm.reset();
    });
}

// Navbar on Scroll
let lastScroll = 0;
const nav = document.querySelector('.nav');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        nav.style.background = 'rgba(255, 255, 255, 0.98)';
        nav.style.boxShadow = '0 2px 12px rgba(0, 0, 0, 0.08)';
    } else {
        nav.style.background = 'rgba(255, 255, 255, 0.95)';
        nav.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe products
document.querySelectorAll('.product').forEach(product => {
    product.style.opacity = '0';
    product.style.transform = 'translateY(20px)';
    product.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
    observer.observe(product);
});

// Mobile Menu Styles
const style = document.createElement('style');
style.textContent = `
    @media (max-width: 768px) {
        .nav-menu.active {
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: rgba(255, 255, 255, 0.98);
            padding: 24px;
            gap: 20px;
            border-bottom: 1px solid var(--color-border);
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.08);
        }

        .menu-toggle.active span:first-child {
            transform: rotate(45deg) translateY(8px);
        }

        .menu-toggle.active span:last-child {
            transform: rotate(-45deg) translateY(-8px);
        }
    }
`;
document.head.appendChild(style);
