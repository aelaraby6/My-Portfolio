// devicons base URL
const DI = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";
// simple-icons base URL  (white SVGs via unpkg)
const SI = "https://cdn.simpleicons.org";

const skillsData = [
  {
    label: "Programming Languages",
    skills: [
      { name: "C++",        icon: `${DI}/cplusplus/cplusplus-original.svg` },
      { name: "Java",       icon: `${DI}/java/java-original.svg` },
      { name: "Python",     icon: `${DI}/python/python-original.svg` },
      { name: "JavaScript", icon: `${DI}/javascript/javascript-original.svg` },
      { name: "TypeScript", icon: `${DI}/typescript/typescript-original.svg` },
      { name: "HTML",       icon: `${DI}/html5/html5-original.svg` },
      { name: "CSS",        icon: `${DI}/css3/css3-original.svg` },
      { name: "SQL",        icon: `${DI}/azuresqldatabase/azuresqldatabase-original.svg` },
    ],
  },
  {
    label: "Frameworks & Libraries",
    skills: [
      { name: "React.js",   icon: `${DI}/react/react-original.svg` },
      { name: "Node.js",    icon: `${DI}/nodejs/nodejs-original.svg` },
      { name: "Express.js", icon: `${DI}/express/express-original.svg`, invert: true },
      { name: "NumPy",      icon: `${DI}/numpy/numpy-original.svg` },
      { name: "Pandas",     icon: `${DI}/pandas/pandas-original.svg` },
    ],
  },
  {
    label: "Databases & Tools",
    skills: [
      { name: "MongoDB",    icon: `${DI}/mongodb/mongodb-original.svg` },
      { name: "PostgreSQL", icon: `${DI}/postgresql/postgresql-original.svg` },
      { name: "SQLite",     icon: `${DI}/sqlite/sqlite-original.svg` },
      { name: "Redis",      icon: `${DI}/redis/redis-original.svg` },
      { name: "Git",        icon: `${DI}/git/git-original.svg` },
      { name: "Docker",     icon: `${DI}/docker/docker-original.svg` },
      { name: "Vercel",     icon: `${SI}/vercel/white`, invert: false, isSI: true },
      { name: "Postman",    icon: `${SI}/postman`, isSI: true },
      { name: "Swagger",    icon: `${SI}/swagger`, isSI: true },
      { name: "Jira",       icon: `${DI}/jira/jira-original.svg` },
    ],
  },
  {
    label: "Core Concepts",
    concepts: true,
    skills: [
      { name: "OOP",                        svgIcon: `<svg viewBox="0 0 24 24" fill="none" stroke="#00d4ff" stroke-width="1.6"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg>` },
      { name: "Data Structures & Algorithms", svgIcon: `<svg viewBox="0 0 24 24" fill="none" stroke="#00e887" stroke-width="1.6"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>` },
      { name: "Database Design",             svgIcon: `<svg viewBox="0 0 24 24" fill="none" stroke="#ffbe0b" stroke-width="1.6"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v5c0 1.66 4.03 3 9 3s9-1.34 9-3V5"/><path d="M3 10v5c0 1.66 4.03 3 9 3s9-1.34 9-3v-5"/><path d="M3 15v4c0 1.66 4.03 3 9 3s9-1.34 9-3v-4"/></svg>` },
      { name: "RESTful APIs",                svgIcon: `<svg viewBox="0 0 24 24" fill="none" stroke="#ff6b9d" stroke-width="1.6"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>` },
      { name: "JWT Authentication",          svgIcon: `<svg viewBox="0 0 24 24" fill="none" stroke="#a78bfa" stroke-width="1.6"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>` },
    ],
  },
];

// ── Render ─────────────────────────────────────────────────────
function renderSkills() {
  const wrapper = document.getElementById("skillsWrapper");

  wrapper.innerHTML = skillsData.map((cat) => {
    const isConcepts = cat.concepts === true;

    const cardsHTML = cat.skills.map((s) => {
      let iconHTML = "";

      if (s.svgIcon) {
        // inline SVG for concepts
        iconHTML = s.svgIcon;
      } else if (s.isSI) {
        // simple-icons: white SVG img
        iconHTML = `<img src="${s.icon}" alt="${s.name}" onerror="this.style.opacity='0.3'" />`;
      } else {
        // devicons
        const style = s.invert ? 'style="filter:invert(1) brightness(2)"' : '';
        iconHTML = `<img src="${s.icon}" alt="${s.name}" ${style} onerror="this.style.opacity='0.3'" />`;
      }

      if (isConcepts) {
        return `
          <div class="skill-card concept">
            <div class="skill-icon">${iconHTML}</div>
            <span class="skill-name">${s.name}</span>
          </div>`;
      }

      return `
        <div class="skill-card">
          <div class="skill-icon">${iconHTML}</div>
          <span class="skill-name">${s.name}</span>
        </div>`;
    }).join("");

    return `
      <div class="skill-category">
        <div class="category-label">
          <span class="category-label-text">${cat.label}</span>
          <div class="category-label-line"></div>
        </div>
        <div class="skills-grid${isConcepts ? " concepts-grid" : ""}">
          ${cardsHTML}
        </div>
      </div>`;
  }).join("");
}

// ── Particles ──────────────────────────────────────────────────
function createParticles() {
  const container = document.getElementById("bgAnimation");
  const colors = ["#ff006e","#00d4ff","#00ff88","#ffbe0b","#8338ec"];
  for (let i = 0; i < 50; i++) {
    const p = document.createElement("div");
    p.className = "particle";
    const size = Math.random() * 5 + 3;
    p.style.cssText = `width:${size}px;height:${size}px;background:${colors[Math.floor(Math.random()*colors.length)]};left:${Math.random()*100}%;top:${Math.random()*100}%`;
    container.appendChild(p);
    animateParticle(p);
  }
}

function animateParticle(p) {
  const dur = Math.random() * 20000 + 15000;
  const angle = Math.random() * Math.PI * 2;
  const dist = Math.random() * 300 + 100;
  const sx = parseFloat(p.style.left);
  const sy = parseFloat(p.style.top);
  const ex = sx + Math.cos(angle) * ((dist / window.innerWidth) * 100);
  const ey = sy + Math.sin(angle) * ((dist / window.innerHeight) * 100);
  p.animate(
    [{ left: sx+"%", top: sy+"%", opacity: 0.6 },
     { left: ex+"%", top: ey+"%", opacity: 0 }],
    { duration: dur, easing: "linear" }
  ).onfinish = () => {
    p.style.left = Math.random()*100+"%";
    p.style.top  = Math.random()*100+"%";
    p.style.opacity = "0.6";
    animateParticle(p);
  };
}

// ── Mobile menu ────────────────────────────────────────────────
function initMobileMenu() {
  const toggle = document.querySelector(".mobile-menu-toggle");
  const nav    = document.querySelector(".nav-links");
  if (!toggle) return;
  toggle.addEventListener("click", () => {
    toggle.classList.toggle("active");
    nav.classList.toggle("active");
  });
  document.querySelectorAll(".nav-links a").forEach((a) =>
    a.addEventListener("click", () => {
      toggle.classList.remove("active");
      nav.classList.remove("active");
    })
  );
  document.addEventListener("click", (e) => {
    if (!toggle.contains(e.target) && !nav.contains(e.target)) {
      toggle.classList.remove("active");
      nav.classList.remove("active");
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  createParticles();
  renderSkills();
  initMobileMenu();
});
// test