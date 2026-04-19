/* education.js — Page-specific logic only. Shared utilities in utils.js */

// ── Education data ─────────────────────────────────────────────
const educationData = [
  {
    id: 1,
    institution: "Zagazig University",
    degree: "B.Sc. in Computer Science, Faculty of Computers and Informatics",
    date: "Oct 2023 - Jul 2027",
    status: "Expected Graduation: Feb 2026",
    icon: "../images/Zagazig_univeristy_logo.png",
    description: "",
    gpa: "3.95",
    maxGpa: "4.00",
    courses: [
      { name: "Data Structures", grade: "A+" },
      { name: "Algorithms",      grade: "A+" },
      { name: "Database Design", grade: "A+" },
      { name: "OOP",             grade: "A+" },
    ],
    activities: [
      "HR Head at ICPC Zagazig Community",
      "Member of IEEE",
      "Member of Zag Eng Family",
    ],
    skills: ["OOP", "Database Design", "Data Structures", "Algorithms", "Cloud Computing", "System Design"],
    images: [],
  },
  {
    id: 2,
    institution: "Information Technology Institute (ITI)",
    degree: "Front End Development",
    date: "Jul 2025 - Aug 2025",
    status: "Graduated",
    icon: "../images/iti.jpg",
    description: "Selected among the top-performing members of the training program.",
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

// ── Certificates data ──────────────────────────────────────────
const certificates = [
  {
    id: 1,
    title: "Algorithm Analysis And Design",
    issuer: "Udemy",
    date: "May 2025",
    icon: "🌐",
    link: "https://drive.google.com/file/d/1Z0HkXV0gKsfn8Bi47LJjJJpz3ErqbfE4/view",
    image: "../images/certificates/algo.png",
  },
  {
    id: 2,
    title: "Nasa Space App Challenge",
    issuer: "NASA",
    date: "October 2024",
    icon: "🚀",
    link: "https://drive.google.com/file/d/1eOWLXGpR_t1Pe2omBw4rcTTqAEuqdhkH/view",
    image: "../images/certificates/nasa.png",
  },
  {
    id: 3,
    title: "JavaScript Intermediate",
    issuer: "HackerRank",
    date: "Sep 2025",
    icon: "🎮",
    link: "https://www.hackerrank.com/certificates/fd1c45b59f38",
    image: "../images/certificates/ja.png",
  },
  {
    id: 5,
    title: "IEEE Basic Ai Track",
    issuer: "IEEE",
    date: "October 2025",
    icon: "🐍",
    link: "https://drive.google.com/file/d/1rIx5xy1shzweGrEod_UC86oX1Amjt-da/view",
    image: "../images/certificates/ieee.png",
  },
  {
    id: 6,
    title: "Digital Marketing",
    issuer: "Udemy",
    date: "September 2023",
    icon: "⚛️",
    link: "https://drive.google.com/file/d/1h9jmfkDClM-M2swERiKmGyQXwvTli0Sr/view",
    image: "../images/certificates/google.png",
  },
];

// ── Render institution icon ────────────────────────────────────
function renderIcon(icon) {
  if (icon && (icon.startsWith('http') || icon.startsWith('../') || icon.startsWith('/'))) {
    return `<img src="${icon}" alt="logo" onerror="this.parentElement.innerHTML='🎓'" />`;
  }
  return icon;
}

// ── Create timeline item ───────────────────────────────────────
function createTimelineItem(edu) {
  let html = `
    <div class="timeline-item">
      <div class="timeline-dot"></div>
      <div class="timeline-content">
        <div class="institution-header">
          <div class="institution-icon">${renderIcon(edu.icon)}</div>
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
          ${edu.description ? `<div class="degree-description">${edu.description}</div>` : ''}
        </div>`;

  if (edu.gpa) {
    html += `<div class="gpa-section"><div class="gpa-box"><div class="gpa-label">Current GPA</div><div class="gpa-value">${edu.gpa}/${edu.maxGpa}</div></div></div>`;
  }

  if (edu.courses && edu.courses.length > 0) {
    html += `<div class="courses-section"><div class="courses-title">Key Courses</div><div class="courses-grid">
      ${edu.courses.map(c => `<div class="course-item"><span class="course-name">${c.name}</span><span class="course-grade">${c.grade}</span></div>`).join('')}
    </div></div>`;
  }

  if (edu.activities && edu.activities.length > 0) {
    html += `<div class="activities-section"><h4 class="activities-title">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>Activities</h4>
      <ul class="activities-list">${edu.activities.map(a => `<li class="activity-item">${a}</li>`).join('')}</ul>
    </div>`;
  }

  if (edu.skills && edu.skills.length > 0) {
    html += `<div class="skills-section"><div class="skills-title">Skills Acquired</div><div class="skills-list">
      ${edu.skills.map(s => `<span class="skill-tag">${s}</span>`).join('')}
    </div></div>`;
  }

  if (edu.project) {
    html += `<a href="${edu.project.link}" target="_blank" class="project-link">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
      </svg>
      View Project: ${edu.project.name}
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
    </a>`;
  }

  if (edu.images && edu.images.length > 0) {
    html += `<div class="images-section"><div class="images-grid">
      ${edu.images.map((img, i) => `<div class="education-image"><img src="${img}" alt="${edu.institution} - Image ${i+1}" loading="lazy"></div>`).join('')}
    </div></div>`;
  }

  html += `</div></div>`;
  return html;
}

// ── Create certificate card ────────────────────────────────────
function createCertificateCard(cert) {
  const imageContent = cert.image
    ? `<img src="${cert.image}" alt="${cert.title}" loading="lazy" />`
    : cert.icon;

  return `
    <div class="certificate-card">
      <div class="certificate-image">${imageContent}</div>
      <div class="certificate-content">
        <h3 class="certificate-title">${cert.title}</h3>
        <div class="certificate-issuer">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
          </svg>${cert.issuer}
        </div>
        <div class="certificate-date">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
            <line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
          </svg>${cert.date}
        </div>
      </div>
      <div class="certificate-footer">
        <button class="view-btn" onclick="window.open('${cert.link}', '_blank')">
          View Certificate
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </button>
      </div>
    </div>`;
}

// ── Render ─────────────────────────────────────────────────────
function renderTimeline() {
  document.getElementById('timelineContainer').innerHTML = educationData.map(createTimelineItem).join('');
}
function renderCertificates() {
  document.getElementById('certificatesGrid').innerHTML = certificates.map(createCertificateCard).join('');
}

// ── Init ───────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initNavbar('education');
  createParticles();
  renderTimeline();
  renderCertificates();
});
