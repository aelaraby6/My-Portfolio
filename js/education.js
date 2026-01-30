// Education data
const educationData = [
  {
    id: 1,
    institution: "Zagazig University",
    degree: "B.Sc. in Computer Science, Faculty of Computers and Informatics ",
    date: "Oct 2023 - Jul 2027",
    status: "Expected Graduation: Feb 2026",
    icon: "🎓",
    description: "",
    gpa: "3.94",
    maxGpa: "4.00",
    courses: [
      { name: "Data Structures", grade: "A+" },
      { name: "Algorithms", grade: "A+" },
      { name: "Database Design", grade: "A+" },
      { name: "OOP", grade: "A+" },
    ],
    activities: [
      "HR Head at ICPC Zagazig Community",
      "Member of IEEE",
      "Member of Zag Eng Family",
    ],
    skills: [
      "OOP",
      "Database Design",
      "Data Structures",
      "Algorithms",
      "Cloud Computing",
      "System Design",
    ],
    images: [],
  },

  {
    id: 4,
    institution: "Information Technology Institute (ITI)",
    degree: "Front End Development",
    date: "Jul 2025 - Aug 2025",
    status: "Graduated",
    icon: "💻",
    description:
      "Selected among the top-performing members of the training program.",
    gpa: null,
    courses: [],
    activities: [
      "Completed a one-month training in Frontend Development with React",
      "Received recognition from the President of Zagazig University and the Director of ITI at the closing ceremony",
    ],
    skills: ["React.js", "JavaScript", "HTML", "CSS", "Responsive Design"],
    project: {
      name: "Rochetta - Graduation Project",
      link: "https://github.com/aelaraby6/Rochetta",
    },
    images: ["../images/iti_cermoney.jpg", "../images/certificates/iti.jpg"],
  },
];

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
];

// Create timeline item HTML
function createTimelineItem(edu, index) {
  let html = `
    <div class="timeline-item">
      <div class="timeline-dot"></div>
      <div class="timeline-content">
        <div class="institution-header">
          <div class="institution-icon">${edu.icon}</div>
          <div class="institution-info">
            <h3>${edu.institution}</h3>
            <span class="institution-status">${edu.status}</span>
            <div class="institution-date">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
              ${edu.date}
            </div>
          </div>
        </div>

        <div class="degree-info">
          <div class="degree-title">${edu.degree}</div>
          ${
            edu.description
              ? `<div class="degree-description">${edu.description}</div>`
              : ""
          }
        </div>
  `;

  // GPA Section
  if (edu.gpa) {
    html += `
      <div class="gpa-section">
        <div class="gpa-box">
          <div class="gpa-label">Current GPA</div>
          <div class="gpa-value">${edu.gpa}/${edu.maxGpa}</div>
        </div>
      </div>
    `;
  }

  // Courses Section
  if (edu.courses && edu.courses.length > 0) {
    html += `
      <div class="courses-section">
        <div class="courses-title">Key Courses</div>
        <div class="courses-grid">
    `;
    edu.courses.forEach((course) => {
      html += `
          <div class="course-item">
            <span class="course-name">${course.name}</span>
            <span class="course-grade">${course.grade}</span>
          </div>
      `;
    });
    html += `
        </div>
      </div>
    `;
  }

  // Activities Section
  if (edu.activities && edu.activities.length > 0) {
    html += `
      <div class="activities-section">
        <h4 class="activities-title">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
            <circle cx="9" cy="7" r="4"/>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
          </svg>
          Activities
        </h4>
        <ul class="activities-list">
    `;
    edu.activities.forEach((activity) => {
      html += `
          <li class="activity-item">${activity}</li>
      `;
    });
    html += `
        </ul>
      </div>
    `;
  }

  // Skills Section
  if (edu.skills && edu.skills.length > 0) {
    html += `
      <div class="skills-section">
        <div class="skills-title">Skills Acquired</div>
        <div class="skills-list">
    `;
    edu.skills.forEach((skill) => {
      html += `
          <span class="skill-tag">${skill}</span>
      `;
    });
    html += `
        </div>
      </div>
    `;
  }

  // Project Section
  if (edu.project) {
    html += `
      <a href="${edu.project.link}" target="_blank" class="project-link">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
        </svg>
        View Project: ${edu.project.name}
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </a>
    `;
  }

  // Images Section
  if (edu.images && edu.images.length > 0) {
    html += `
      <div class="images-section">
        <div class="images-grid">
    `;
    edu.images.forEach((image, idx) => {
      html += `
          <div class="education-image">
            <img src="${image}" alt="${edu.institution} - Image ${idx + 1}">
          </div>
      `;
    });
    html += `
        </div>
      </div>
    `;
  }

  html += `
      </div>
    </div>
  `;

  return html;
}

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

// Render timeline
function renderTimeline() {
  const container = document.getElementById("timelineContainer");
  container.innerHTML = educationData.map(createTimelineItem).join("");
}

// Render certificates
function renderCertificates() {
  const grid = document.getElementById("certificatesGrid");
  grid.innerHTML = certificates.map(createCertificateCard).join("");
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

// Mobile Menu Toggle
function initMobileMenu() {
  const menuToggle = document.querySelector(".mobile-menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      menuToggle.classList.toggle("active");
      navLinks.classList.toggle("active");
    });

    // Close menu when clicking on a link
    document.querySelectorAll(".nav-links a").forEach((link) => {
      link.addEventListener("click", () => {
        menuToggle.classList.remove("active");
        navLinks.classList.remove("active");
      });
    });

    // Close menu when clicking outside
    document.addEventListener("click", (e) => {
      if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
        menuToggle.classList.remove("active");
        navLinks.classList.remove("active");
      }
    });
  }
}

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  createParticles();
  renderTimeline();
  renderCertificates();
  initMobileMenu();
});