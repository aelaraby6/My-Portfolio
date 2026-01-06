// Sample certificates data
const certificates = [
  {
    id: 1,
    title: "Algorithm Analysis And Design",
    issuer: "Udemy",
    date: "May 2025",
    icon: "🌐",
    link: "#",
    image: "../images/certificates/algo.png",
  },
  {
    id: 2,
    title: "Nasa Space App Challenge",
    issuer: "Nasa",
    date: "October 2024",
    icon: "🤖",
    link: "#",
    image: "../images/certificates/nasa.png",
  },
  {
    id: 3,
    title: "Unity Game Development",
    issuer: "Udemy",
    date: "November 2023",
    icon: "🎮",
    link: "#",
    image: "",
  },
  {
    id: 4,
    title: "Python for Data Science",
    issuer: "IBM",
    date: "October 2023",
    icon: "🐍",
    link: "#",
    image: "",
  },
  {
    id: 5,
    title: "React - The Complete Guide",
    issuer: "Udemy",
    date: "September 2023",
    icon: "⚛️",
    link: "#",
    image: "",
  },
  {
    id: 6,
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "August 2023",
    icon: "☁️",
    link: "#",
    image: "",
  },
  {
    id: 7,
    title: "Node.js Development",
    issuer: "Pluralsight",
    date: "July 2023",
    icon: "📦",
    link: "#",
    image: "",
  },
  {
    id: 8,
    title: "Deep Learning Specialization",
    issuer: "deeplearning.ai",
    date: "June 2023",
    icon: "🧠",
    link: "#",
    image: "",
  },
];

// Create certificate card HTML
function createCertificateCard(cert) {
  const imageContent = cert.image
    ? `<img src="${cert.image}" alt="${cert.title}" />`
    : cert.icon;

  return `
    <div class="certificate-card">
      <div class="certificate-image">
        ${imageContent}
      </div>
      <div class="certificate-content">
        <h3 class="certificate-title">${cert.title}</h3>
        <div class="certificate-issuer">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 2L2 7l10 5 10-5-10-5z"/>
            <path d="M2 17l10 5 10-5"/>
            <path d="M2 12l10 5 10-5"/>
          </svg>
          ${cert.issuer}
        </div>
        <div class="certificate-date">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
            <line x1="16" y1="2" x2="16" y2="6"/>
            <line x1="8" y1="2" x2="8" y2="6"/>
            <line x1="3" y1="10" x2="21" y2="10"/>
          </svg>
          ${cert.date}
        </div>
      </div>
      <div class="certificate-footer">
        <button class="view-btn" onclick="window.open('${cert.link}', '_blank')">
          View Certificate
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </button>
      </div>
    </div>
  `;
}

// Render certificates
function renderCertificates() {
  const grid = document.getElementById("certificatesGrid");

  if (certificates.length === 0) {
    grid.innerHTML = `
      <div class="empty-state">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10"/>
          <line x1="12" y1="8" x2="12" y2="12"/>
          <line x1="12" y1="16" x2="12.01" y2="16"/>
        </svg>
        <p>No certificates found</p>
      </div>
    `;
  } else {
    grid.innerHTML = certificates.map(createCertificateCard).join("");
  }
}

// Background particles animation
function createParticles() {
  const container = document.getElementById("bgAnimation");
  const particleCount = 50;
  const colors = ["#ff006e", "#00d4ff", "#00ff88", "#ffbe0b", "#8338ec"];

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement("div");
    particle.className = "particle";

    const size = Math.random() * 5 + 3;
    particle.style.width = size + "px";
    particle.style.height = size + "px";

    particle.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];

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

  const endX =
    startX + Math.cos(angle) * ((distance / window.innerWidth) * 100);
  const endY =
    startY + Math.sin(angle) * ((distance / window.innerHeight) * 100);

  particle.animate(
    [
      { left: startX + "%", top: startY + "%", opacity: 0.6 },
      { left: endX + "%", top: endY + "%", opacity: 0 },
    ],
    { duration: duration, easing: "linear" }
  ).onfinish = () => {
    particle.style.left = Math.random() * 100 + "%";
    particle.style.top = Math.random() * 100 + "%";
    particle.style.opacity = "0.6";
    animateParticle(particle);
  };
}

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  createParticles();
  renderCertificates();
});
