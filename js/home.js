// ── Particles ──────────────────────────────────────────────────
function createParticles() {
  const container = document.getElementById("bgAnimation");
  const colors = ["#ff006e","#00d4ff","#00ff88","#ffbe0b","#8338ec"];
  for (let i = 0; i < 50; i++) {
    const p = document.createElement("div");
    p.className = "particle";
    const size = Math.random() * 5 + 3;
    p.style.width  = size + "px";
    p.style.height = size + "px";
    p.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    p.style.left = Math.random() * 100 + "%";
    p.style.top  = Math.random() * 100 + "%";
    container.appendChild(p);
    animateParticle(p);
  }
}

function animateParticle(p) {
  const duration = Math.random() * 20000 + 15000;
  const angle    = Math.random() * Math.PI * 2;
  const distance = Math.random() * 300 + 100;
  const sx = parseFloat(p.style.left);
  const sy = parseFloat(p.style.top);
  const ex = sx + Math.cos(angle) * ((distance / window.innerWidth)  * 100);
  const ey = sy + Math.sin(angle) * ((distance / window.innerHeight) * 100);
  p.animate(
    [{ left: sx+"%", top: sy+"%", opacity: 0.6 },
     { left: ex+"%", top: ey+"%", opacity: 0 }],
    { duration, easing: "linear" }
  ).onfinish = () => {
    p.style.left    = Math.random() * 100 + "%";
    p.style.top     = Math.random() * 100 + "%";
    p.style.opacity = "0.6";
    animateParticle(p);
  };
}

// Connecting lines between nearby particles
function createConnections() {
  const container = document.getElementById("bgAnimation");
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  Object.assign(svg.style, { position:"absolute", inset:"0", width:"100%", height:"100%", pointerEvents:"none", opacity:"0.25" });
  container.appendChild(svg);
  setInterval(() => {
    svg.innerHTML = "";
    const particles = document.querySelectorAll(".particle");
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const p1 = particles[i].getBoundingClientRect();
        const p2 = particles[j].getBoundingClientRect();
        const dist = Math.hypot(p1.left - p2.left, p1.top - p2.top);
        if (dist < 150) {
          const line = document.createElementNS("http://www.w3.org/2000/svg","line");
          line.setAttribute("x1", p1.left + p1.width  / 2);
          line.setAttribute("y1", p1.top  + p1.height / 2);
          line.setAttribute("x2", p2.left + p2.width  / 2);
          line.setAttribute("y2", p2.top  + p2.height / 2);
          line.setAttribute("stroke", "#ffffff");
          line.setAttribute("stroke-width", "1");
          line.setAttribute("opacity", ((150 - dist) / 150) * 0.3);
          svg.appendChild(line);
        }
      }
    }
  }, 100);
}

// ── Typing animation ───────────────────────────────────────────
const texts = ["Backend Development","Frontend Development","Game Development","Machine Learning"];
let currentIndex = 0, charIndex = 0, isDeleting = false, typingSpeed = 150;

function typeWriter() {
  const el = document.getElementById("dynamicText");
  const current = texts[currentIndex];
  if (isDeleting) {
    el.textContent = current.substring(0, charIndex - 1);
    charIndex--;
    typingSpeed = 50;
    if (charIndex === 0) { isDeleting = false; currentIndex = (currentIndex + 1) % texts.length; typingSpeed = 500; }
  } else {
    el.textContent = current.substring(0, charIndex + 1);
    charIndex++;
    typingSpeed = 150;
    if (charIndex === current.length) { isDeleting = true; typingSpeed = 2000; }
  }
  setTimeout(typeWriter, typingSpeed);
}

function addCursorEffect() {
  const style = document.createElement("style");
  style.textContent = `.dynamic-text::after { content:'|'; animation: blink .7s infinite; margin-left:2px; } @keyframes blink { 0%,50%{opacity:1} 51%,100%{opacity:0} }`;
  document.head.appendChild(style);
}

// ── Mobile menu ────────────────────────────────────────────────
function initMobileMenu() {
  const toggle = document.querySelector(".mobile-menu-toggle");
  const nav    = document.querySelector(".nav-links");
  if (!toggle) return;
  toggle.addEventListener("click", () => { toggle.classList.toggle("active"); nav.classList.toggle("active"); });
  document.querySelectorAll(".nav-links a").forEach(a => a.addEventListener("click", () => { toggle.classList.remove("active"); nav.classList.remove("active"); }));
  document.addEventListener("click", e => { if (!toggle.contains(e.target) && !nav.contains(e.target)) { toggle.classList.remove("active"); nav.classList.remove("active"); } });
  window.addEventListener("resize", () => { if (window.innerWidth > 768) { toggle.classList.remove("active"); nav.classList.remove("active"); } });
}

// ── Init ───────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  createParticles();
  createConnections();
  typeWriter();
  addCursorEffect();
  initMobileMenu();
});