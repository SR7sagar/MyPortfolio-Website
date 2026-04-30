const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => nav.classList.toggle("open"));

document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});

const snapshotGrid = document.getElementById("snapshotGrid");

portfolioData.stats.forEach(stat => {
  snapshotGrid.innerHTML += `
    <div class="stat">
      <strong>${stat.value}</strong>
      <span>${stat.label}</span>
    </div>`;
});

const timeline = document.getElementById("timeline");
const filterButtons = document.querySelectorAll(".filter-btn");

// This extracts the latest year from text like:
// "Jan 2022–May 2025", "Aug 2023–Aug 2024", "2021–2023", "2026"
function getLatestYear(yearString) {
  const years = yearString.match(/\d{4}/g);
  if (!years) return 0;
  return Number(years[years.length - 1]);
}

function renderTimeline(filter = "all") {
  timeline.innerHTML = "";

  let items = portfolioData.timeline.filter(item => {
    return filter === "all" || item.type === filter;
  });

  // Latest year first
  items = items.sort((a, b) => {
    return getLatestYear(b.year) - getLatestYear(a.year);
  });

  items.forEach((item, index) => {
    const side = index % 2 === 0 ? "left" : "right";
    const tags = item.tags.map(tag => `<span class="tag">${tag}</span>`).join("");
    const details = item.details.map(detail => `<li>${detail}</li>`).join("");

    timeline.innerHTML += `
      <article class="timeline-item ${side}">
        <div class="timeline-card" style="--card-color:${item.color}">
          <div class="timeline-main">
            <h3>${item.title}</h3>
            <p><strong>${item.organisation}</strong></p>
            <div class="location">${item.location}</div>
            <p>${item.summary}</p>
            <div class="tags">${tags}</div>

            <button class="read-more-btn" type="button">Read more ↓</button>

            <div class="more-panel">
              <ul>${details}</ul>
              <p style="margin-top:.8rem;">
                <a href="${item.link}" target="_blank" rel="noreferrer">${item.linkText}</a>
              </p>
            </div>
          </div>

          <div class="timeline-date">
            <span>${item.icon}</span>
            ${item.year}
          </div>
        </div>
      </article>`;
  });

  document.querySelectorAll(".read-more-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const panel = btn.nextElementSibling;
      panel.classList.toggle("open");

      btn.textContent = panel.classList.contains("open")
        ? "Show less ↑"
        : "Read more ↓";
    });
  });

  revealCards();
}

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    filterButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
    renderTimeline(button.dataset.filter);
  });
});

const projectGrid = document.getElementById("projectGrid");

portfolioData.projects.forEach(project => {
  const bullets = project.bullets.map(item => `<li>${item}</li>`).join("");

  projectGrid.innerHTML += `
    <article class="project-card">
      <h3>${project.title}</h3>
      <ul>${bullets}</ul>
      <div class="meta">${project.tools}</div>
      <p style="margin-top:.9rem;">
        <a href="${project.link}" target="_blank" rel="noreferrer">Open GitHub project →</a>
      </p>
    </article>`;
});

const skillsGrid = document.getElementById("skillsGrid");

portfolioData.skills.forEach(skill => {
  const items = skill.items.map(item => `<li>${item}</li>`).join("");

  skillsGrid.innerHTML += `
    <article class="skill-category">
      <h3>${skill.category}</h3>
      <ul>${items}</ul>
    </article>`;
});

const certGrid = document.getElementById("certGrid");

portfolioData.certifications.forEach(cert => {
  const certImage = cert.imageName
    ? `<a href="${cert.link}" target="_blank" rel="noreferrer" class="cert-img-link">
         <img src="${cert.imageName}" alt="${cert.name} certificate">
       </a>`
    : `<div class="cert-img-empty">Certificate image coming soon</div>`;

  const certLink = cert.link && cert.link !== "#"
    ? `<a href="${cert.link}" target="_blank" rel="noreferrer">Open certificate →</a>`
    : `<span class="cert-link-disabled">Certificate link coming soon</span>`;

  certGrid.innerHTML += `
    <article class="cert-card-new">
      <h3>${cert.name}</h3>
      <p><strong>Issuer:</strong> ${cert.issuer}</p>
      <p><strong>Status:</strong> ${cert.status}</p>

      <div class="cert-img-box">
        ${certImage}
      </div>

      <p style="margin-top:.9rem;">
        ${certLink}
      </p>
    </article>`;
});

function revealCards() {
  const cards = document.querySelectorAll(".timeline-card");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.2 });

  cards.forEach(card => observer.observe(card));
}

renderTimeline();