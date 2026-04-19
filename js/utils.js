function initNavbar(activePage) {
  const isRoot = !window.location.pathname.includes('/pages/');
  const base = isRoot ? '' : '../';
  const cvPath = base + 'data/cv.pdf';

  const pages = [
    { key: 'home',       label: 'Home',       href: base + 'index.html' },
    { key: 'education',  label: 'Education',  href: base + 'pages/education.html' },
    { key: 'experience', label: 'Experience', href: base + 'pages/experience.html' },
    { key: 'projects',   label: 'Projects',   href: base + 'pages/projects.html' },
    { key: 'skills',     label: 'Skills',     href: base + 'pages/skills.html' },
  ];

  const linksHTML = pages.map(p => `
    <li><a href="${p.href}"${p.key === activePage ? ' class="active"' : ''}>${p.label}</a></li>`).join('');

  const cvIconSVG = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>`;

  const navHTML = `
    <nav class="navbar">
      <a class="logo" href="${base}index.html">Abdelrahman</a>
      <ul class="nav-links">
        ${linksHTML}
        <li class="cv-mobile-item">
          <a href="${cvPath}" target="_blank">${cvIconSVG} Download CV</a>
        </li>
      </ul>
      <button class="mobile-menu-toggle" aria-label="Toggle menu">
        <span></span><span></span><span></span>
      </button>
    </nav>`;

  const root = document.getElementById('navbar-root');
  if (root) root.innerHTML = navHTML;
  initMobileMenu();
}

function initMobileMenu() {
  const toggle = document.querySelector('.mobile-menu-toggle');
  const nav = document.querySelector('.nav-links');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    nav.classList.toggle('active');
  });

  document.querySelectorAll('.nav-links a').forEach(a =>
    a.addEventListener('click', () => {
      toggle.classList.remove('active');
      nav.classList.remove('active');
    })
  );

  document.addEventListener('click', e => {
    if (!toggle.contains(e.target) && !nav.contains(e.target)) {
      toggle.classList.remove('active');
      nav.classList.remove('active');
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      toggle.classList.remove('active');
      nav.classList.remove('active');
    }
  });
}

function createParticles() {
  const container = document.getElementById('bgAnimation');
  if (!container) return;
  const isMobile = window.innerWidth <= 768;
  const count = isMobile ? 20 : 50;
  const colors = ['#ff006e', '#00d4ff', '#00ff88', '#ffbe0b', '#8338ec'];
  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const size = Math.random() * 5 + 3;
    p.style.cssText = `width:${size}px;height:${size}px;background:${colors[Math.floor(Math.random() * colors.length)]};left:${Math.random() * 100}%;top:${Math.random() * 100}%;will-change:transform;`;
    container.appendChild(p);
    animateParticle(p);
  }
}

function animateParticle(p) {
  const duration = Math.random() * 20000 + 15000;
  const angle = Math.random() * Math.PI * 2;
  const distance = Math.random() * 300 + 100;
  const dx = Math.cos(angle) * distance;
  const dy = Math.sin(angle) * distance;

  const anim = p.animate(
    [
      { transform: 'translate(0, 0)', opacity: 0.6 },
      { transform: `translate(${dx}px, ${dy}px)`, opacity: 0 }
    ],
    { duration, easing: 'linear', fill: 'forwards' }
  );

  anim.onfinish = () => {
    p.style.left = Math.random() * 100 + '%';
    p.style.top = Math.random() * 100 + '%';
    animateParticle(p);
  };
}
