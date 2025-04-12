// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 800,
    once: true
});

// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const htmlElement = document.documentElement;
const themeIcon = themeToggle.querySelector('i');

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme') || 'light';
htmlElement.setAttribute('data-theme', savedTheme);
updateThemeIcon(savedTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
    themeIcon.className = theme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
}

// Enhanced Navbar scroll effect
const navbar = document.querySelector('.navbar');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 100) {
        navbar.style.padding = '0.5rem 0';
        navbar.style.backgroundColor = 'rgba(33, 37, 41, 0.95)';
    } else {
        navbar.style.padding = '1rem 0';
        navbar.style.backgroundColor = '#212529';
    }
    
    lastScrollTop = scrollTop;
});

// Enhanced smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
            // Close mobile menu if open
            const navbarToggler = document.querySelector('.navbar-toggler');
            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarCollapse.classList.contains('show')) {
                navbarToggler.click();
            }
        }
    });
});

// Active Navigation Link
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLink?.classList.add('active');
        } else {
            navLink?.classList.remove('active');
        }
    });
});

// Enhanced form submission with validation and animation
const contactForm = document.getElementById('contactForm');

contactForm?.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.textContent;
    
    try {
        submitButton.disabled = true;
        submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        
        // Simulate form submission (replace with actual API call)
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Show success message
        const successAlert = document.createElement('div');
        successAlert.className = 'alert alert-success mt-3';
        successAlert.textContent = 'Thank you for your message. We will get back to you soon!';
        contactForm.appendChild(successAlert);
        
        // Reset form
        contactForm.reset();
        
        // Remove success message after 5 seconds
        setTimeout(() => {
            successAlert.remove();
        }, 5000);
    } catch (error) {
        console.error('Error submitting form:', error);
        
        // Show error message
        const errorAlert = document.createElement('div');
        errorAlert.className = 'alert alert-danger mt-3';
        errorAlert.textContent = 'An error occurred. Please try again later.';
        contactForm.appendChild(errorAlert);
        
        // Remove error message after 5 seconds
        setTimeout(() => {
            errorAlert.remove();
        }, 5000);
    } finally {
        submitButton.disabled = false;
        submitButton.textContent = originalButtonText;
    }
});

// Enhanced service card animations
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Animate service cards with stagger effect
document.querySelectorAll('.service-card').forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
    card.style.transitionDelay = `${index * 0.1}s`;
    observer.observe(card);
});

// Counter Animation
function animateCounter(element, target) {
    if (element.classList.contains('counted')) return;
    
    const duration = 2000;
    const frameDuration = 1000/60;
    const totalFrames = Math.round(duration/frameDuration);
    const countTo = parseInt(target, 10);
    let frame = 0;
    
    const counter = setInterval(() => {
        frame++;
        const progress = frame/totalFrames;
        const currentCount = Math.round(countTo * progress);

        if (frame === totalFrames) {
            element.textContent = target;
            element.classList.add('counted');
            clearInterval(counter);
        } else {
            element.textContent = currentCount;
        }
    }, frameDuration);
}

// Initialize counter animation when element is in view
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counters = entry.target.querySelectorAll('.counter');
            counters.forEach(counter => {
                const target = counter.getAttribute('data-target') || counter.textContent;
                animateCounter(counter, target);
            });
        }
    });
}, {
    threshold: 0.5
});

// Set up counters on page load
document.addEventListener('DOMContentLoaded', () => {
    const statsSection = document.querySelector('.about-stats');
    if (statsSection) {
        const counters = statsSection.querySelectorAll('.counter');
        counters.forEach(counter => {
            // Store the target value as a data attribute
            const targetValue = counter.textContent;
            counter.setAttribute('data-target', targetValue);
            counter.textContent = '0'; // Start from 0
        });
        counterObserver.observe(statsSection);
    }
});

// Enhanced parallax effect
window.addEventListener('scroll', function() {
    const hero = document.querySelector('.hero');
    if (hero) {
        const scrollPosition = window.scrollY;
        const parallaxSpeed = 0.5;
        hero.style.backgroundPositionY = `${scrollPosition * parallaxSpeed}px`;
        
        // Add fade effect to hero content
        const heroContent = hero.querySelector('.container');
        const opacity = 1 - (scrollPosition / hero.offsetHeight);
        heroContent.style.opacity = Math.max(opacity, 0);
    }
});

// Add CSS animations
const styleSheet = document.createElement('style');
styleSheet.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-10px); }
        75% { transform: translateX(10px); }
    }
    
    @keyframes pop {
        0% { transform: scale(1); }
        50% { transform: scale(1.2); }
        100% { transform: scale(1); }
    }
    
    .animate {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
    
    .form-success {
        animation: formSuccess 0.5s ease-out;
    }
    
    @keyframes formSuccess {
        0% { transform: scale(1); }
        50% { transform: scale(1.02); }
        100% { transform: scale(1); }
    }
`;

document.head.appendChild(styleSheet);

// Initialize tooltips
const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
tooltipTriggerList.map(function(tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
});

// Add hover effect to service icons
document.querySelectorAll('.service-card i, .feature-card i').forEach(icon => {
    icon.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.2) rotate(5deg)';
    });
    
    icon.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) rotate(0deg)';
    });
});

// Mobile menu close on click
document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    link.addEventListener('click', function() {
        const navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse.classList.contains('show')) {
            navbarCollapse.classList.remove('show');
        }
    });
});

// Add loading animation to page
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
}); 