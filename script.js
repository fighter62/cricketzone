// Navbar Scroll Effect
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.add('scrolled'); // For this dark theme, keep it somewhat visible or add it. Let's make it toggle.
        navbar.classList.remove('scrolled');
        if (window.scrollY > 50) navbar.classList.add('scrolled');
    }
});

// Initial trigger to handle page load position
if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
}

// Smooth scrolling for anchor links
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

// Simple form submission handler
const form = document.querySelector('.reservation-form');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = form.querySelector('.submit-btn');
        const originalText = btn.textContent;

        btn.textContent = 'Processing...';
        btn.style.opacity = '0.8';

        setTimeout(() => {
            btn.textContent = 'Reservation Confirmed!';
            btn.style.background = '#4BB543'; // Success green
            btn.style.color = '#fff';
            form.reset();

            setTimeout(() => {
                btn.textContent = originalText;
                btn.style.background = '';
                btn.style.color = '';
                btn.style.opacity = '1';
            }, 3000);
        }, 1500);
    });
}

// Menu Tab Switching Logic
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons and contents
        tabBtns.forEach(b => b.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active'));

        // Add active class to clicked button
        btn.classList.add('active');

        // Show corresponding content
        const targetId = btn.getAttribute('data-target');
        const targetContent = document.getElementById(targetId);
        if (targetContent) {
            targetContent.classList.add('active');
        }
    });
});
