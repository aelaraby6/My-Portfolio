// Animated Background Particles
function createParticles() {
    const container = document.getElementById("bgAnimation");
    const particleCount = 50;
    const colors = ["#ff006e", "#00d4ff", "#00ff88", "#ffbe0b", "#8338ec"];

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement("div");
        particle.className = "particle";

        // Random size between 3px and 8px
        const size = Math.random() * 5 + 3;
        particle.style.width = size + "px";
        particle.style.height = size + "px";

        // Random color
        particle.style.backgroundColor =
            colors[Math.floor(Math.random() * colors.length)];

        // Random starting position
        particle.style.left = Math.random() * 100 + "%";
        particle.style.top = Math.random() * 100 + "%";

        container.appendChild(particle);

        // Animate particle
        animateParticle(particle);
    }
}

function animateParticle(particle) {
    const duration = Math.random() * 20000 + 15000; // 15-35 seconds
    const angle = Math.random() * Math.PI * 2;
    const distance = Math.random() * 300 + 100;

    const startX = parseFloat(particle.style.left);
    const startY = parseFloat(particle.style.top);

    const endX = startX + Math.cos(angle) * ((distance / window.innerWidth) * 100);
    const endY = startY + Math.sin(angle) * ((distance / window.innerHeight) * 100);

    particle
        .animate(
            [
                {
                    left: startX + "%",
                    top: startY + "%",
                    opacity: 0.6,
                },
                {
                    left: endX + "%",
                    top: endY + "%",
                    opacity: 0,
                },
            ],
            {
                duration: duration,
                easing: "linear",
            }
        ).onfinish = () => {
        // Reset particle position
        particle.style.left = Math.random() * 100 + "%";
        particle.style.top = Math.random() * 100 + "%";
        particle.style.opacity = "0.6";

        // Animate again
        animateParticle(particle);
    };
}

// Create connecting lines between particles
function createConnections() {
    const container = document.getElementById("bgAnimation");
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.style.position = "absolute";
    svg.style.top = "0";
    svg.style.left = "0";
    svg.style.width = "100%";
    svg.style.height = "100%";
    svg.style.pointerEvents = "none";
    svg.style.opacity = "0.3";
    container.appendChild(svg);

    setInterval(() => {
        svg.innerHTML = "";
        const particles = document.querySelectorAll(".particle");

        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const p1 = particles[i].getBoundingClientRect();
                const p2 = particles[j].getBoundingClientRect();

                const distance = Math.sqrt(
                    Math.pow(p1.left - p2.left, 2) + Math.pow(p1.top - p2.top, 2)
                );

                if (distance < 150) {
                    const line = document.createElementNS(
                        "http://www.w3.org/2000/svg",
                        "line"
                    );
                    line.setAttribute("x1", p1.left + p1.width / 2);
                    line.setAttribute("y1", p1.top + p1.height / 2);
                    line.setAttribute("x2", p2.left + p2.width / 2);
                    line.setAttribute("y2", p2.top + p2.height / 2);
                    line.setAttribute("stroke", "#ffffff");
                    line.setAttribute("stroke-width", "1");
                    line.setAttribute("opacity", ((150 - distance) / 150) * 0.3);
                    svg.appendChild(line);
                }
            }
        }
    }, 100);
}

// Animated Text Rotation
const texts = [
    "Backend Development",
    "Frontend Development",
    "Game Development",
    "Machine Learning",
];
let currentIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 150;

function typeWriter() {
    const dynamicText = document.getElementById("dynamicText");
    const currentText = texts[currentIndex];

    if (isDeleting) {
        // Remove characters
        dynamicText.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;

        if (charIndex === 0) {
            isDeleting = false;
            currentIndex = (currentIndex + 1) % texts.length;
            typingSpeed = 500; // Pause before typing new text
        }
    } else {
        // Add characters
        dynamicText.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 150;

        if (charIndex === currentText.length) {
            isDeleting = true;
            typingSpeed = 2000; // Pause at end of text
        }
    }

    setTimeout(typeWriter, typingSpeed);
}

// Cursor blink effect for dynamic text
function addCursorEffect() {
    const style = document.createElement("style");
    style.textContent = `
        .dynamic-text::after {
            content: '|';
            animation: blink 0.7s infinite;
            margin-left: 2px;
        }
        @keyframes blink {
            0%, 50% { opacity: 1; }
            51%, 100% { opacity: 0; }
        }
    `;
    document.head.appendChild(style);
}

// Mobile Menu Toggle
function initMobileMenu() {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close menu when clicking on a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
                menuToggle.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
    }
}

// Smooth scroll for navigation
document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        // Remove active class from all links
        document
            .querySelectorAll(".nav-links a")
            .forEach((l) => l.classList.remove("active"));

        // Add active class to clicked link
        this.classList.add("active");

        // Smooth scroll to section (if exists)
        const targetId = this.getAttribute('href');
        if (targetId && targetId.startsWith('#')) {
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// Handle window resize
window.addEventListener("resize", () => {
    const svg = document.querySelector("#bgAnimation svg");
    if (svg) {
        svg.setAttribute("width", window.innerWidth);
        svg.setAttribute("height", window.innerHeight);
    }

    // Close mobile menu on resize to desktop
    if (window.innerWidth > 768) {
        const menuToggle = document.querySelector('.mobile-menu-toggle');
        const navLinks = document.querySelector('.nav-links');
        if (menuToggle && navLinks) {
            menuToggle.classList.remove('active');
            navLinks.classList.remove('active');
        }
    }
});

// Initialize animations when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
    createParticles();
    createConnections();
    typeWriter();
    addCursorEffect();
    initMobileMenu();
});