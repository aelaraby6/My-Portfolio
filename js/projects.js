// ─── Projects Data ────────────────────────────────────────────────────────────
// image: path to image, or "" to show emoji placeholder
// github: URL string, or "" for no link
// demo: URL string, or "" for no link
const projectsData = [
  {
    id: 1,
    title: "Speakify",
    emoji: "🎓",
    image: "../images/s.png",
    description:
      "Backend for the first online English learning platform in the Arab world. Integrated Paymob payments with webhooks, i18next localization, geo detection, and CDN media uploads.",
    stack: ["Node.js", "Typescript", "Express.js", "MongoDB", "REST API", "CDN"],
    github: "",
    demo: "https://speakefy.com/en/",
  },
  {
    id: 2,
    title: "Magitsh",
    emoji: "💊",
    image: "../images/m.png",
    description:
      " full Git implementation in Node.js with core commands (init, add, commit, branch, checkout, merge, diff, log) ,Implemented Git internals (blobs, trees, commits) with SHA-1 hashing and zlib compression ,DAG-based commit history with BFS for merge-base detection and three-way conflict resolution.",
    stack: ["Node.js"],
    github: "https://github.com/aelaraby6/Magitsh",
    demo: "https://www.npmjs.com/package/magitsh",
  },
  {
    id: 3,
    title: "Rochetta",
    emoji: "🚀",
    image: "../images/r.png",
    description:
      "Full-stack online pharmacy platform for browsing, managing, and purchasing medicines online",
    stack: ["Node.js", "React.js", "MongoDB", "Express.js", "Cloudinary"],
    github: "https://github.com/aelaraby6/Rochetta",
    demo: "https://rochetta.vercel.app/",
  },
  {
    id: 4,
    title: "Business-Incubator-Platform-DBMS",
    emoji: "⚙️",
    image: "../images/b.png",
    description: "open-source, database-driven web and desktop application designed to manage business incubator operations efficiently",
    stack: ["Node.js", "PostgreSQL", "Express.js", "EJS"],
    github: "https://github.com/aelaraby6/Business-Incubator-Platform-DBMS",
    demo: "",
  },
  {
    id: 5,
    title: "Bash-Elbalad",
    emoji: "⚙️",
    image: "../images/bs.png",
    description: "simple Linux shell project designed to mimic basic shell functionalities",
    stack: ["C++"],
    github: "https://github.com/r6mez/Bash-Elbalad",
    demo: "",
  },
  {
    id: 6,
    title: "EchoSteps",
    emoji: "⚙️",
    image: "../images/e.png",
    description: "2D Java-based arcade game built using the Swing library",
    stack: ["Java"],
    github: "https://github.com/AhmedNAgy25/EchoSteps",
    demo: "",
  },
  {
    id: 7,
    title: "Monte Carlo Pi Estimation",
    emoji: "⚙️",
    image: "../images/mn.png",
    description: "Visual simulation of Pi estimation using the Monte Carlo method in JavaScript.",
    stack: ["Html", "Css", "Javascript"],
    github: "https://github.com/aelaraby6/Monte-Carlo-Pi-Estimation",
    demo: "https://monte-carlo-pi-estimation.vercel.app/",
  },
  {
    id: 8,
    title: "HR Tracker",
    emoji: "⚙️",
    image: "../images/h.png",
    description: "A desktop application that helps the HR team at ICPC Zagazig Community track and analyze group activities",
    stack: ["python"],
    github: "https://github.com/aelaraby6/HR-Tracker",
    demo: "",
  },
  {
    id: 9,
    title: "Neural Network From Scratch",
    emoji: "⚙️",
    image: "../images/n.png",
    description: "A simple neural network implementation in C++",
    stack: ["C++"],
    github: "https://github.com/aelaraby6/Neural-Network-From-Scratch",
    demo: "",
  },
  {
    id: 10,
    title: "Quran Audio Player",
    emoji: "⚙️",
    image: "../images/q.png",
    description: "Cross-platform Quran audio player using C++ and irrKlang with 2D linked list navigation",
    stack: ["C++"],
    github: "https://github.com/aelaraby6/Quaran-playlist-Manager",
    demo: "",
  },
  {
    id: 11,
    title: "2048 Game",
    emoji: "⚙️",
    image: "../images/gg.png",
    description: "Classic 2048 puzzle game built with HTML, CSS, and JavaScript",
    stack: ["Html", "Css", "Javascript"],
    github: "https://github.com/aelaraby6/2048-Game",
    demo: "https://aelaraby6.github.io/2048-Game/",
  },
  {
    id: 12,
    title: "Learnova",
    emoji: "⚙️",
    image: "../images/ll.png",
    description: "Full-Stack E-learning platform designed to simplify online education",
    stack: ["React.js", "Laravel", "MySQL"],
    github: "https://github.com/aelaraby6/Learnova",
    demo: "",
  },
  {
    id: 13,
    title: "Amazon Products EDA",
    emoji: "⚙️",
    image: "../images/am.png",
    description: "EDA on Amazon products dataset to analyze pricing, discounts, ratings, and product performance for actionable business insights.",
    stack: ["python", "Numpy", "Pandas", "Matplotlib"],
    github: "https://github.com/aelaraby6/Amazon-Products-EDA",
    demo: "",
  },
  {
    id: 14,
    title: "Ketabak",
    emoji: "⚙️",
    image: "../images/kk.png",
    description: "A simple Bookstore Website built using HTML, CSS, and JavaScript. It allows users to browse books, view details, and explore categories",
    stack: ["Html", "Css", "Javascript"],
    github: "https://github.com/aelaraby6/Ketabak",
    demo: "https://aelaraby6.github.io/Ketabak",
  },
    {
    id: 15,
    title: "Pokemon Game",
    emoji: "⚙️",
    image: "../images/po.png",
    description: "Simple 2D Pokemon-themed game built with HTML, CSS, and JavaScript",
    stack: ["Html", "Css", "Javascript"],
    github: "https://github.com/aelaraby6/Pokemon-Game",
    demo: "https://aelaraby6.github.io/Pokemon-Game",
  },
   {
    id: 16,
    title: "Contact Manager Book",
    emoji: "⚙️",
    image: "../images/cm.png",
    description: "C++ Contact Manager using OOP and dynamic arrays with file I/O and search features",
    stack: ["C++"],
    github: "https://github.com/aelaraby6/Contact-Manager-Book",
    demo: "",
  }
];

// ─── Render a single card ────────────────────────────────────────────────────
function createProjectCard(project) {
  const imageSection = project.image
    ? `<img src="${project.image}" alt="${project.title}" loading="lazy" />`
    : `<div class="card-image-placeholder">${project.emoji}</div>`;

  const stackHTML = project.stack
    .map((t) => `<span class="stack-tag">${t}</span>`)
    .join("");

  const githubBtn = project.github
    ? `<a href="${project.github}" target="_blank" class="card-link github">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
        </svg>
        GitHub
      </a>`
    : `<span class="card-link no-link">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
        </svg>
        No Repo
      </span>`;

  const demoBtn = project.demo
    ? `<a href="${project.demo}" target="_blank" class="card-link demo">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
          <polyline points="15 3 21 3 21 9"/>
          <line x1="10" y1="14" x2="21" y2="3"/>
        </svg>
        Live Demo
      </a>`
    : `<span class="card-link no-link">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10"/>
          <line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/>
        </svg>
        No Demo
      </span>`;

  return `
    <div class="project-card">
      <div class="card-image">
        ${imageSection}
      </div>
      <div class="card-body">
        <div class="card-title">${project.title}</div>
        <div class="card-desc">${project.description}</div>
        <div class="card-stack">${stackHTML}</div>
      </div>
      <div class="card-footer">
        ${githubBtn}
        ${demoBtn}
      </div>
    </div>
  `;
}

// ─── Render all cards ────────────────────────────────────────────────────────
function renderProjects() {
  const grid = document.getElementById("projectsGrid");
  grid.innerHTML = projectsData.map(createProjectCard).join("");
}

// ─── Background particles ─────────────────────────────────────────────────────
function createParticles() {
  const container = document.getElementById("bgAnimation");
  const colors = ["#ff006e", "#00d4ff", "#00ff88", "#ffbe0b", "#8338ec"];

  for (let i = 0; i < 50; i++) {
    const particle = document.createElement("div");
    particle.className = "particle";
    const size = Math.random() * 5 + 3;
    particle.style.width = size + "px";
    particle.style.height = size + "px";
    particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    particle.style.left = Math.random() * 100 + "%";
    particle.style.top = Math.random() * 100 + "%";
    container.appendChild(particle);
    animateParticle(particle);
  }
}

function animateParticle(particle) {
  const duration = Math.random() * 20000 + 15000;
  const angle = Math.random() * Math.PI * 2;
  const distance = Math.random() * 300 + 100;
  const startX = parseFloat(particle.style.left);
  const startY = parseFloat(particle.style.top);
  const endX = startX + Math.cos(angle) * ((distance / window.innerWidth) * 100);
  const endY = startY + Math.sin(angle) * ((distance / window.innerHeight) * 100);

  particle.animate(
    [
      { left: startX + "%", top: startY + "%", opacity: 0.6 },
      { left: endX + "%", top: endY + "%", opacity: 0 },
    ],
    { duration, easing: "linear" }
  ).onfinish = () => {
    particle.style.left = Math.random() * 100 + "%";
    particle.style.top = Math.random() * 100 + "%";
    particle.style.opacity = "0.6";
    animateParticle(particle);
  };
}

// ─── Mobile menu ──────────────────────────────────────────────────────────────
function initMobileMenu() {
  const menuToggle = document.querySelector(".mobile-menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  if (!menuToggle) return;

  menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");
    navLinks.classList.toggle("active");
  });

  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      menuToggle.classList.remove("active");
      navLinks.classList.remove("active");
    });
  });

  document.addEventListener("click", (e) => {
    if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
      menuToggle.classList.remove("active");
      navLinks.classList.remove("active");
    }
  });
}

// ─── Init ─────────────────────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  createParticles();
  renderProjects();
  initMobileMenu();
});