function createConnections() {
  const isMobile = window.innerWidth <= 768;
  if (isMobile) return;

  const container = document.getElementById('bgAnimation');
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  Object.assign(svg.style, {
    position: 'absolute', inset: '0',
    width: '100%', height: '100%',
    pointerEvents: 'none', opacity: '0.25'
  });
  container.appendChild(svg);

  let lastRun = 0;
  function drawLines(timestamp) {
    if (timestamp - lastRun > 800) {
      lastRun = timestamp;
      svg.innerHTML = '';
      const particles = document.querySelectorAll('.particle');
      const rects = Array.from(particles).map(p => p.getBoundingClientRect());
      for (let i = 0; i < rects.length; i++) {
        for (let j = i + 1; j < rects.length; j++) {
          const dist = Math.hypot(rects[i].left - rects[j].left, rects[i].top - rects[j].top);
          if (dist < 150) {
            const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
            line.setAttribute('x1', rects[i].left + rects[i].width / 2);
            line.setAttribute('y1', rects[i].top + rects[i].height / 2);
            line.setAttribute('x2', rects[j].left + rects[j].width / 2);
            line.setAttribute('y2', rects[j].top + rects[j].height / 2);
            line.setAttribute('stroke', '#ffffff');
            line.setAttribute('stroke-width', '1');
            line.setAttribute('opacity', ((150 - dist) / 150) * 0.3);
            svg.appendChild(line);
          }
        }
      }
    }
    requestAnimationFrame(drawLines);
  }
  requestAnimationFrame(drawLines);
}

const texts = ['Backend Development', 'Frontend Development', 'Game Development', 'Machine Learning'];
let currentIndex = 0, charIndex = 0, isDeleting = false, typingSpeed = 150;

function typeWriter() {
  const el = document.getElementById('dynamicText');
  const current = texts[currentIndex];
  if (isDeleting) {
    el.textContent = current.substring(0, charIndex - 1);
    charIndex--;
    typingSpeed = 50;
    if (charIndex === 0) {
      isDeleting = false;
      currentIndex = (currentIndex + 1) % texts.length;
      typingSpeed = 500;
    }
  } else {
    el.textContent = current.substring(0, charIndex + 1);
    charIndex++;
    typingSpeed = 150;
    if (charIndex === current.length) { isDeleting = true; typingSpeed = 2000; }
  }
  setTimeout(typeWriter, typingSpeed);
}

function addCursorEffect() {
  const style = document.createElement('style');
  style.textContent = `.dynamic-text::after{content:'|';animation:blink .7s infinite;margin-left:2px;}@keyframes blink{0%,50%{opacity:1}51%,100%{opacity:0}}`;
  document.head.appendChild(style);
}

document.addEventListener('DOMContentLoaded', () => {
  initNavbar('home');
  createParticles();
  createConnections();
  typeWriter();
  addCursorEffect();
});
