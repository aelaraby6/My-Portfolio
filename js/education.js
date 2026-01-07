// Education data
const educationData = [
  {
    id: 1,
    institution: "Zagazig University",
    degree: "Bachelor's degree, Computer Science",
    date: "Oct 2023 - Jul 2027",
    logo: "../images/zagazig_university.jpg", // Add your logo path
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
    images: [
      // "../images/zagazig-2.jpg",
    ],
  },
  {
    id: 2,
    institution: "Information Technology Institute (ITI)",
    degree: "Front End Development",
    date: "Jul 2025 - Aug 2025",
    logo: "../images/iti.jpg",
    gpa: null, // No GPA for this one
    courses: [], // No courses to display
    activities: [
      "Completed a one-month training in Frontend Development with React",
      "Selected among the top-performing members of the training program",
      "Received a recognition from the President of Zagazig University and the Director of ITI at the closing ceremony",
    ],
    skills: ["React.js", "JavaScript", "HTML", "CSS", "Responsive Design"],
    project: {
      name: "Rochetta - Graduation Project",
      link: "https://github.com/aelaraby6/Rochetta",
    },
    images: [
      // Add your image paths here
      "../images/iti_cermoney.jpg",
      "../images/certificates/iti.jpg",
    ],
  },
];

// Create education card HTML
function createEducationCard(edu) {
  let html = `
    <div class="education-card">
      <div class="education-header">
        <div class="education-logo">
          ${
            edu.logo
              ? `<img src="${edu.logo}" alt="${edu.institution}" onerror="this.parentElement.innerHTML='🎓'">`
              : "🎓"
          }
        </div>
        <div class="education-main-info">
          <h2 class="education-title">${edu.institution}</h2>
          <p class="education-degree">${edu.degree}</p>
          <div class="education-date">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
              <line x1="16" y1="2" x2="16" y2="6"/>
              <line x1="8" y1="2" x2="8" y2="6"/>
              <line x1="3" y1="10" x2="21" y2="10"/>
            </svg>
            ${edu.date}
          </div>
        </div>
      </div>
  `;

  // GPA and Courses Section
  if (edu.gpa || edu.courses.length > 0) {
    html += `
      <div class="gpa-section">
        <div class="gpa-container">
    `;

    if (edu.gpa) {
      html += `
          <div class="gpa-box">
            <div class="gpa-label">Current GPA</div>
            <div class="gpa-value">${edu.gpa}/${edu.maxGpa}</div>
          </div>
      `;
    }

    if (edu.courses.length > 0) {
      html += `
          <div class="courses-grid">
      `;
      edu.courses.forEach((course) => {
        html += `
            <div class="course-item">
              <div class="course-name">${course.name}</div>
              <div class="course-grade">${course.grade}</div>
            </div>
        `;
      });
      html += `
          </div>
      `;
    }

    html += `
        </div>
      </div>
    `;
  }

  // Activities Section
  if (edu.activities && edu.activities.length > 0) {
    html += `
      <div class="activities-section">
        <h3 class="activities-title">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
            <circle cx="9" cy="7" r="4"/>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
          </svg>
          Activities and Societies
        </h3>
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
        <h3 class="skills-title">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
            <polyline points="22 4 12 14.01 9 11.01"/>
          </svg>
          Skills
        </h3>
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
      <div class="project-section">
        <a href="${edu.project.link}" target="_blank" class="project-link">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
          </svg>
          Graduation Project: ${edu.project.name}
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
            <polyline points="15 3 21 3 21 9"/>
            <line x1="10" y1="14" x2="21" y2="3"/>
          </svg>
        </a>
      </div>
    `;
  }

  // Images Section
  if (edu.images && edu.images.length > 0) {
    html += `
      <div class="images-section">
        <div class="images-grid">
    `;
    edu.images.forEach((image, index) => {
      html += `
          <div class="education-image">
            <img src="${image}" alt="${edu.institution} - Image ${index + 1}">
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
  `;

  return html;
}

// Render education items
function renderEducation() {
  const container = document.getElementById("educationContainer");
  container.innerHTML = educationData.map(createEducationCard).join("");
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
  renderEducation();
});