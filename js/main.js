/**
 * ============================================================================
 * SAMUEL ADENIRAN - PORTFOLIO CORE JAVASCRIPT
 * ============================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  const data = window.PORTFOLIO_DATA;
  if (!data) {
    console.error("Portfolio data not found!");
    return;
  }

  initNavigation();
  renderHero(data.personal);
  renderExperience(data.experience);
  renderProjects(data.projects);
  renderSkills(data.skills);
  renderEducationAndCerts(data.education, data.certifications);
  renderContact(data.personal);
  initTerminal(data);
  initContactForm(data.personal);
});

/* ==========================================================================
   NAVIGATION & SCROLL SPY
   ========================================================================== */
function initNavigation() {
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");
  const navItems = document.querySelectorAll(".nav-link");

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      navLinks.classList.toggle("open");
    });

    navItems.forEach(item => {
      item.addEventListener("click", () => {
        navLinks.classList.remove("open");
      });
    });
  }

  // Active section scroll spy
  const sections = document.querySelectorAll("section[id]");
  window.addEventListener("scroll", () => {
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute("id");
      const navItem = document.querySelector(`.nav-link[href*="${sectionId}"]`);

      if (navItem) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navItem.classList.add("active");
        } else {
          navItem.classList.remove("active");
        }
      }
    });
  });
}

/* ==========================================================================
   RENDER HERO SECTION
   ========================================================================== */
function renderHero(personal) {
  const nameEl = document.getElementById("heroName");
  const roleEl = document.getElementById("heroRole");
  const bioEl = document.getElementById("heroBio");
  const statsEl = document.getElementById("heroStats");
  const avatarImg = document.getElementById("avatarImg");

  if (nameEl) nameEl.textContent = personal.name;
  if (roleEl) roleEl.textContent = personal.role;
  if (bioEl) bioEl.textContent = personal.bio;
  if (avatarImg && personal.avatar) avatarImg.src = personal.avatar;

  if (statsEl && personal.stats) {
    statsEl.innerHTML = personal.stats.map(s => `
      <div class="stat-item">
        <span class="stat-value">${escapeHtml(s.value)}</span>
        <span class="stat-label">${escapeHtml(s.label)}</span>
      </div>
    `).join("");
  }
}

/* ==========================================================================
   RENDER WORK EXPERIENCE
   ========================================================================== */
function renderExperience(experiences) {
  const container = document.getElementById("experienceList");
  if (!container) return;

  container.innerHTML = experiences.map(exp => `
    <div class="experience-card">
      <div class="exp-header">
        <div class="exp-role-wrap">
          <h3 class="exp-role">${escapeHtml(exp.role)}</h3>
          <span class="exp-company">${escapeHtml(exp.company)}</span>
        </div>
        <div class="exp-meta">
          <span class="exp-period"><i class="fa-regular fa-calendar"></i> ${escapeHtml(exp.period)}</span>
          <span class="exp-badge">${escapeHtml(exp.badge)}</span>
        </div>
      </div>
      
      <p class="exp-desc">${escapeHtml(exp.description)}</p>

      <div class="exp-highlights">
        ${exp.highlights.map(hl => `
          <div class="exp-highlight-item">
            <span class="highlight-bullet"><i class="fa-solid fa-check"></i></span>
            <span>${escapeHtml(hl)}</span>
          </div>
        `).join("")}
      </div>

      <div class="exp-stack-wrap">
        <span class="stack-title">Production Tech Stack:</span>
        <div class="tag-list">
          ${exp.stack.map(tech => `<span class="tag-badge">${escapeHtml(tech)}</span>`).join("")}
        </div>
      </div>
    </div>
  `).join("");
}

/* ==========================================================================
   RENDER PROJECTS & FILTERING
   ========================================================================== */
let allProjectsData = [];

function renderProjects(projects) {
  allProjectsData = projects;
  const container = document.getElementById("projectsGrid");
  const filterBtns = document.querySelectorAll(".filter-btn");

  if (!container) return;

  displayProjects(projects);

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const category = btn.getAttribute("data-category");

      if (category === "all") {
        displayProjects(allProjectsData);
      } else {
        const filtered = allProjectsData.filter(p => p.category === category);
        displayProjects(filtered);
      }
    });
  });
}

function displayProjects(projects) {
  const container = document.getElementById("projectsGrid");
  if (!container) return;

  if (projects.length === 0) {
    container.innerHTML = `<p style="color: var(--text-muted); grid-column: 1/-1;">No projects match this category.</p>`;
    return;
  }

  container.innerHTML = projects.map(proj => {
    const isFeatured = proj.featured ? "featured" : "";
    const statsHtml = proj.stats ? `
      <div class="project-specs">
        ${Object.entries(proj.stats).map(([k, v]) => `
          <div class="spec-item">
            <span class="spec-key">${escapeHtml(k)}</span>
            <span class="spec-val">${escapeHtml(v)}</span>
          </div>
        `).join("")}
      </div>
    ` : "";

    const archHtml = proj.architecture ? `
      <div class="project-architecture">
        ${proj.architecture.map(a => `
          <div class="arch-item">
            <span class="arch-bullet">▸</span>
            <span>${escapeHtml(a)}</span>
          </div>
        `).join("")}
      </div>
    ` : "";

    return `
      <article class="project-card ${isFeatured}" id="${escapeHtml(proj.id)}">
        <div class="project-top">
          <div class="project-icon">
            <i class="${getProjectIcon(proj.category)}"></i>
          </div>
          <div class="project-links">
            ${proj.githubUrl ? `
              <a href="${proj.githubUrl}" target="_blank" rel="noopener noreferrer" class="project-link-btn" title="View Source on GitHub">
                <i class="fa-brands fa-github"></i>
              </a>
            ` : ""}
            ${proj.liveUrl ? `
              <a href="${proj.liveUrl}" target="_blank" rel="noopener noreferrer" class="project-link-btn" title="Live Project / Endpoint">
                <i class="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            ` : ""}
          </div>
        </div>

        <h3 class="project-title">${escapeHtml(proj.title)}</h3>
        <span class="project-tagline">${escapeHtml(proj.tagline)}</span>
        <p class="project-desc">${escapeHtml(proj.description)}</p>

        ${statsHtml}
        ${archHtml}

        <div class="project-tags">
          ${proj.tags.map(t => `<span class="project-tag">${escapeHtml(t)}</span>`).join("")}
        </div>
      </article>
    `;
  }).join("");
}

function getProjectIcon(category) {
  switch (category) {
    case "backend": return "fa-solid fa-server";
    case "ai": return "fa-solid fa-robot";
    case "fullstack": return "fa-solid fa-layer-group";
    case "frontend": return "fa-solid fa-laptop-code";
    default: return "fa-solid fa-code";
  }
}

/* ==========================================================================
   RENDER SKILLS
   ========================================================================== */
function renderSkills(skills) {
  const container = document.getElementById("skillsGrid");
  if (!container) return;

  const categories = [
    { key: "backend", title: "Backend Core & APIs", icon: "fa-solid fa-cubes" },
    { key: "databases", title: "Databases & Storage", icon: "fa-solid fa-database" },
    { key: "architecture", title: "Architecture & Security", icon: "fa-solid fa-network-wired" },
    { key: "appliedAI", title: "Applied AI & Integrations", icon: "fa-solid fa-microchip" },
    { key: "foundations", title: "Academic & Low-Level Foundations", icon: "fa-solid fa-graduation-cap" },
    { key: "frontend", title: "Frontend & Full-Stack UI", icon: "fa-solid fa-display" }
  ];

  container.innerHTML = categories.map(cat => {
    const list = skills[cat.key] || [];
    return `
      <div class="skill-category-card">
        <div class="skill-cat-header">
          <span class="skill-cat-icon"><i class="${cat.icon}"></i></span>
          <h3 class="skill-cat-title">${cat.title}</h3>
        </div>
        <div class="skill-items-list">
          ${list.map(s => `
            <div class="skill-item">
              <div class="skill-row-top">
                <span class="skill-name">${escapeHtml(s.name)}</span>
                <span class="skill-level-pill">${escapeHtml(s.level)}</span>
              </div>
              <span class="skill-desc">${escapeHtml(s.desc)}</span>
            </div>
          `).join("")}
        </div>
      </div>
    `;
  }).join("");
}

/* ==========================================================================
   RENDER EDUCATION & CERTIFICATIONS
   ========================================================================== */
function renderEducationAndCerts(education, certifications) {
  const eduContainer = document.getElementById("educationList");
  const certContainer = document.getElementById("certificationsList");

  if (eduContainer) {
    eduContainer.innerHTML = education.map((edu, idx) => `
      <div class="edu-card ${idx === 0 ? "highlight" : ""}">
        <div class="edu-top">
          <h3 class="edu-school">${escapeHtml(edu.institution)}</h3>
          <span class="edu-period">${escapeHtml(edu.period)}</span>
        </div>
        <div class="edu-degree">${escapeHtml(edu.program)}</div>
        <span class="cert-badge in-progress" style="margin-bottom: 12px; display: inline-block;">${escapeHtml(edu.status)}</span>
        <ul style="margin-top: 8px;">
          ${edu.highlights.map(h => `<li style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 6px;">▸ ${escapeHtml(h)}</li>`).join("")}
        </ul>
      </div>
    `).join("");
  }

  if (certContainer) {
    certContainer.innerHTML = certifications.map(cert => `
      <div class="cert-card">
        <div class="cert-top">
          <span class="cert-issuer">${escapeHtml(cert.issuer)}</span>
          <span class="cert-badge ${escapeHtml(cert.badgeType)}">${escapeHtml(cert.status)}</span>
        </div>
        <h4 class="cert-title">${escapeHtml(cert.title)}</h4>
        <p class="cert-desc">${escapeHtml(cert.description)}</p>
        <a href="${cert.verifyUrl}" target="_blank" rel="noopener noreferrer" class="cert-action">
          <span>Explore Credential</span>
          <i class="fa-solid fa-arrow-right"></i>
        </a>
      </div>
    `).join("");
  }
}

/* ==========================================================================
   RENDER CONTACT DETAILS
   ========================================================================== */
function renderContact(personal) {
  const waBtn = document.getElementById("whatsappBtn");
  const phoneText = document.getElementById("contactPhone");
  const emailText = document.getElementById("contactEmail");
  const floatingWa = document.getElementById("floatingWa");

  const waUrl = `https://wa.me/${personal.whatsapp}?text=${encodeURIComponent("Hello Samuel, I reviewed your backend developer portfolio and would like to discuss an opportunity.")}`;

  if (waBtn) waBtn.href = waUrl;
  if (floatingWa) floatingWa.href = waUrl;
  if (phoneText) phoneText.textContent = personal.phone;
  if (emailText) emailText.textContent = personal.email;
}

/* ==========================================================================
   INTERACTIVE BACKEND TERMINAL
   ========================================================================== */
function initTerminal(data) {
  const output = document.getElementById("terminalOutput");
  const pills = document.querySelectorAll(".term-pill");

  if (!output) return;

  const commands = {
    help: () => `
<div class="term-line"><span class="term-cyan">Available commands:</span></div>
<div class="term-line">  <span class="term-cmd">help</span>       - Show this command manual</div>
<div class="term-line">  <span class="term-cmd">skills</span>     - Inspect backend engineering skills & DBs</div>
<div class="term-line">  <span class="term-cmd">projects</span>   - Display active production APIs & projects</div>
<div class="term-line">  <span class="term-cmd">curl /huddle</span>- Inspect live Huddle API health endpoint</div>
<div class="term-line">  <span class="term-cmd">experience</span> - View Advantage Health Africa history</div>
<div class="term-line">  <span class="term-cmd">contact</span>    - Show WhatsApp, GitHub, LinkedIn</div>
<div class="term-line">  <span class="term-cmd">clear</span>      - Clear terminal screen</div>
`,
    skills: () => `
<div class="term-line"><span class="term-success">✓ Backend Core:</span> Node.js, Express.js, NestJS, TypeScript</div>
<div class="term-line"><span class="term-success">✓ Databases:</span> PostgreSQL, MongoDB, MySQL, Mongoose</div>
<div class="term-line"><span class="term-success">✓ Protocols:</span> RESTful APIs, WebSockets, JWT Authentication</div>
<div class="term-line"><span class="term-success">✓ Foundations:</span> Java, C, C++, Data Structures & Algorithms</div>
<div class="term-line"><span class="term-success">✓ Applied AI:</span> Conversational Order Bots, LLM Agents</div>
`,
    projects: () => `
<div class="term-line"><span class="term-cyan">Flagship Repos & Live APIs:</span></div>
<div class="term-line">1. <strong>Huddle API:</strong> Workspace & Real-time Chat [https://huddle-api-90gn.onrender.com]</div>
<div class="term-line">2. <strong>Restaurant Bot:</strong> Conversational Ordering Agent [https://restaurant-chatbot-pq2j.onrender.com]</div>
<div class="term-line">3. <strong>Task API:</strong> Production Lifecycle State Machine [https://todo-app-update.onrender.com]</div>
<div class="term-line">4. <strong>FlashCollab:</strong> Peer Developer Collaboration [github.com/samuel2770/flashcollab]</div>
`,
    "curl /huddle": () => `
<div class="term-line"><span class="term-cyan">&gt; GET https://huddle-api-90gn.onrender.com/api/v1/health HTTP/1.1</span></div>
<div class="term-line"><span class="term-success">&lt; HTTP/1.1 200 OK</span></div>
<div class="term-line"><span class="term-output">{</span></div>
<div class="term-line">  <span class="term-cyan">"status":</span> "HEALTHY",</div>
<div class="term-line">  <span class="term-cyan">"service":</span> "Huddle Collaboration Engine",</div>
<div class="term-line">  <span class="term-cyan">"database":</span> "MongoDB Atlas Connected",</div>
<div class="term-line">  <span class="term-cyan">"websockets":</span> "Socket.IO Active",</div>
<div class="term-line">  <span class="term-cyan">"latency":</span> "34ms",</div>
<div class="term-line">  <span class="term-cyan">"uptime":</span> "99.98%"</div>
<div class="term-line"><span class="term-output">}</span></div>
`,
    experience: () => `
<div class="term-line"><span class="term-cyan">Company:</span> Advantage Health Africa</div>
<div class="term-line"><span class="term-cyan">Role:</span> Backend Developer</div>
<div class="term-line"><span class="term-cyan">Impact:</span> Scaled global pharmaceutical inventory and prescription routing platform. Reduced database query latency, engineered resilient REST APIs with JWT role security.</div>
`,
    contact: () => `
<div class="term-line"><span class="term-cyan">WhatsApp:</span> +234 916 286 8224 (Direct WhatsApp chat ready)</div>
<div class="term-line"><span class="term-cyan">GitHub:</span> https://github.com/samuel2770</div>
<div class="term-line"><span class="term-cyan">LinkedIn:</span> https://www.linkedin.com/in/adeniran-samuel-8432732b7</div>
<div class="term-line"><span class="term-cyan">Instagram:</span> @samxdev01</div>
`,
    clear: () => {
      output.innerHTML = "";
      return "";
    }
  };

  function executeCommand(cmdName) {
    const cleanCmd = cmdName.trim().toLowerCase();
    
    // Append user input line
    const inputLine = document.createElement("div");
    inputLine.className = "term-line";
    inputLine.innerHTML = `<span class="term-prompt">${data.personal.terminalPrompt}</span> <span class="term-cmd">${escapeHtml(cmdName)}</span>`;
    output.appendChild(inputLine);

    if (cleanCmd === "clear") {
      output.innerHTML = "";
      return;
    }

    const handler = commands[cleanCmd];
    const resultDiv = document.createElement("div");
    resultDiv.className = "term-result";

    if (handler) {
      resultDiv.innerHTML = handler();
    } else {
      resultDiv.innerHTML = `<div class="term-line" style="color: #ef4444;">Command not recognized: '${escapeHtml(cmdName)}'. Type 'help' for command list.</div>`;
    }

    output.appendChild(resultDiv);
    output.scrollTop = output.scrollHeight;
  }

  pills.forEach(pill => {
    pill.addEventListener("click", () => {
      const cmd = pill.getAttribute("data-cmd");
      if (cmd) executeCommand(cmd);
    });
  });
}

/* ==========================================================================
   CONTACT FORM & TOAST NOTIFICATION
   ========================================================================== */
function initContactForm(personal) {
  const form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("senderName").value;
    const email = document.getElementById("senderEmail").value;
    const message = document.getElementById("senderMessage").value;

    const encodedMsg = encodeURIComponent(`Hi Samuel, my name is ${name} (${email}). Message: ${message}`);
    const whatsappUrl = `https://wa.me/${personal.whatsapp}?text=${encodedMsg}`;

    showToast("Opening WhatsApp with your pre-filled message...");
    
    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
      form.reset();
    }, 800);
  });
}

function showToast(msg) {
  let toast = document.getElementById("toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toast";
    toast.className = "toast";
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 3500);
}

// Global copy helper for contact details
window.copyToClipboard = function(text, label) {
  navigator.clipboard.writeText(text).then(() => {
    showToast(`Copied ${label} to clipboard!`);
  }).catch(() => {
    showToast(`Direct copy: ${text}`);
  });
};

function escapeHtml(string) {
  const str = String(string);
  return str.replace(/[&<>"']/g, match => {
    switch (match) {
      case "&": return "&amp;";
      case "<": return "&lt;";
      case ">": return "&gt;";
      case '"': return "&quot;";
      case "'": return "&#39;";
      default: return match;
    }
  });
}
