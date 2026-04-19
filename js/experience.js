/* experience.js — Page-specific logic only. Shared utilities in utils.js */

const experienceData = [
  {
    id: 1,
    company: "Elmakan Systems",
    role: "Back End Developer",
    type: "Internship",
    workMode: "Remote",
    date: "Jul 2025 - Oct 2025 · 4 mos",
    icon: "../images/elmakan.jpg",
    description:
      "During my 4-month internship, I worked on one project for one of the largest English-learning course platforms in the Arab world. I contributed to building the Speakify courses platform. My role focused on backend development, where I handled API development, testing, and database design. Throughout the internship, I also worked with CDNs, deployment pipelines, and performance considerations in a real production environment. This experience helped me strengthen my backend development skills and understand how large-scale platforms operate behind the scenes.",
    responsibilities: [],
    skills: ["Express.js", "MongoDB", "Node.js", "REST APIs", "Database Design", "CDN", "Deployment Pipelines"],
    preview: {
      label: "View Speakify Platform",
      url: "https://speakefy.com/en/",
      image: "https://speakefy.com/en/",
      useScreenshot: true,
    },
  },
  {
    id: 2,
    company: "Zag Eng Family",
    role: "Technical Support",
    type: "Full-time",
    workMode: "Hybrid",
    date: "Aug 2025 - Sep 2025 · 2 mos",
    icon: "../images/zag.jpg",
    description: "",
    responsibilities: [
      "Served as Technical Support in the Deep Dive in Node.js workshop.",
      "Supported participants in learning Node.js and developing projects with Express.js and MongoDB.",
      "Provided continuous guidance and troubleshooting throughout the sessions.",
    ],
    skills: ["Node.js", "Express.js", "MongoDB"],
    preview: null,
  },
];

function createTimelineItem(exp) {
  const hasPreview = exp.preview !== null;
  let html = `
    <div class="timeline-item">
      <div class="timeline-dot"></div>
      <div class="timeline-content">
        <div class="company-header">
          <div class="company-icon">${exp.icon && (exp.icon.startsWith('../') || exp.icon.startsWith('/') || exp.icon.startsWith('http')) ? `<img src="${exp.icon}" alt="${exp.company}" />` : exp.icon}</div>
          <div class="company-info">
            <h3>${exp.role}</h3>
            <div class="company-meta">
              <span class="company-name-tag">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                  <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
                </svg>${exp.company}
              </span>
              <span class="employment-badge">${exp.type}</span>
              <span class="work-type-badge">${exp.workMode}</span>
            </div>
            <div class="company-date">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>${exp.date}
            </div>
          </div>
        </div>
        <div class="role-info">
          ${exp.description ? `<div class="role-description">${exp.description}</div>` : ''}`;

  if (hasPreview) {
    html += `
      <button class="preview-link" onclick="togglePreview(this, ${exp.id})">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
        </svg>
        ${exp.preview.label}
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="arrow-icon">
          <path d="M9 18l6-6-6-6"/>
        </svg>
      </button>
      <div class="preview-image-container" id="preview-${exp.id}">
        <img
          src="https://api.screenshotone.com/take?url=${encodeURIComponent(exp.preview.url)}&viewport_width=1280&viewport_height=720&format=jpg"
          onerror="this.parentElement.innerHTML='<div style=\\'padding:30px;text-align:center;color:#a0a0a0;font-size:14px;\\'>🌐 <a href=\\'${exp.preview.url}\\' target=\\'_blank\\' style=\\'color:#00d4ff;text-decoration:none;\\'>Open ${exp.preview.label} ↗</a></div>'"
          alt="${exp.preview.label}"
          onclick="window.open('${exp.preview.url}', '_blank')"
          style="cursor:pointer;"
        />
        <div class="preview-caption">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
            <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
          </svg>
          Click image to open ${exp.preview.url}
        </div>
      </div>`;
  }

  html += `</div>`;

  if (exp.responsibilities && exp.responsibilities.length > 0) {
    html += `<div class="responsibilities-section">
      <h4 class="responsibilities-title">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="9 11 12 14 22 4"/>
          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
        </svg>Key Responsibilities</h4>
      <ul class="responsibilities-list">
        ${exp.responsibilities.map(item => `<li class="responsibility-item">${item}</li>`).join('')}
      </ul>
    </div>`;
  }

  if (exp.skills && exp.skills.length > 0) {
    html += `<div class="skills-section">
      <div class="skills-title">Skills & Technologies</div>
      <div class="skills-list">${exp.skills.map(s => `<span class="skill-tag">${s}</span>`).join('')}</div>
    </div>`;
  }

  html += `</div></div>`;
  return html;
}

function togglePreview(btn, id) {
  const container = document.getElementById(`preview-${id}`);
  const isVisible = container.classList.contains('visible');
  container.classList.toggle('visible', !isVisible);
  btn.querySelector('.arrow-icon').style.transform = isVisible ? '' : 'rotate(90deg)';
}

function openLightbox(src) {
  document.getElementById('lightboxImg').src = src;
  document.getElementById('lightbox').classList.add('active');
}
function closeLightbox() {
  document.getElementById('lightbox').classList.remove('active');
}

function renderTimeline() {
  document.getElementById('timelineContainer').innerHTML = experienceData.map(createTimelineItem).join('');
}

document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });

document.addEventListener('DOMContentLoaded', () => {
  initNavbar('experience');
  createParticles();
  renderTimeline();
});
