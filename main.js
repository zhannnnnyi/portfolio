(() => {
  const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  if (!canHover) return;

  const dot = document.getElementById("cursorDot");
  const ring = document.getElementById("cursorRing");
  if (!dot || !ring) return;

  let dx = window.innerWidth / 2;
  let dy = window.innerHeight / 2;

  let rx = dx;
  let ry = dy;

  let tx = dx;
  let ty = dy;

  function animate(){
    // White dot = fast follow
    dx += (tx - dx) * 0.35;
    dy += (ty - dy) * 0.35;

    // Pink ring = slower follow
    rx += (tx - rx) * 0.12;
    ry += (ty - ry) * 0.12;

    dot.style.transform = `translate(${dx}px, ${dy}px) translate(-50%, -50%)`;
    ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;

    requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);

  window.addEventListener("mousemove", (e)=>{
    tx = e.clientX;
    ty = e.clientY;
    dot.style.opacity = "1";
    ring.style.opacity = "1";
  });

  const clickableSelector = `
    a, button, .btn, [role='button'],
    input[type='submit'], input[type='button'],
    select, textarea, .form-control
  `;

  document.addEventListener("mouseover", (e)=>{
    if (e.target.closest(clickableSelector)){
      ring.classList.add("is-link");
    }
  });

  document.addEventListener("mouseout", (e)=>{
    if (e.target.closest(clickableSelector)){
      ring.classList.remove("is-link");
    }
  });
})();

(function initInterviewDateMin(){
  const dateInput = document.querySelector("#interviewDate");
  if(!dateInput) return;

  // Set minimum date to today (local)
  const now = new Date();
  const yyyy = now.getFullYear();
  const mm = String(now.getMonth() + 1).padStart(2, "0");
  const dd = String(now.getDate()).padStart(2, "0");
  dateInput.min = `${yyyy}-${mm}-${dd}`;
})();

window.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".section");
  if (!sections.length) return;

  // Respect reduced motion
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    sections.forEach(s => s.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        } else {
          entry.target.classList.remove("is-visible"); // 👈 re-hide on exit
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: "0px 0px -10% 0px"
    }
  );

  sections.forEach(section => observer.observe(section));
});

window.addEventListener("DOMContentLoaded", () => {
  if (typeof flatpickr === "undefined") {
    console.error("Flatpickr not loaded. Check script order.");
    return;
  }

  flatpickr("#interviewDate", {
    minDate: "today",
    dateFormat: "d/m/Y",
    disableMobile: true,
    altInput: false
  });
});

(function initTimeSlots(){
  const select = document.querySelector("#timeSlot");
  if(!select) return;
  select.innerHTML = TIME_SLOTS.map(s => `<option value="${s}">${s}</option>`).join("");
})();

(function contactFormDemo(){
  const form = document.querySelector("#contactForm");
  const status = document.querySelector("#formStatus");
  if(!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    status.textContent = "Sent! Looking forward to our interview!";
    status.classList.remove("d-none");
    form.reset();
  });
})();

/* =========================================================
   REVAMP: Works (Option A) — data + render helpers
   - works.html: renders TBWA-style previews
   - project.html: single template page driven by ?id=
   ========================================================= */

const WORKS = [
  {
    id: "rsd-film",
    title: "RSD Film",
    year: "2025",
    teaser: "A short film exploring the journey of vinyl collecting.",
    overview: [
      "The RSD Film is a short social media video driven by my interest in vinyl collecting, created to promote Record Store Day 2025. The video brings viewers through the vinyl ritual, from digging in-store to playing the record, which aimed to reignite interest in physical media.",
      "Produced solely by myself, the project relied on  self-sourced equipment and the support of a local record store (@wowfactorrecords). This limitation forced me to focus on visual storytelling and typography to convey mood, pacing, and intention. The final video was well received by my lecturer and strengthened my skill as a visual storyteller."
    ],
    heroImage: "assets/works/rsd-film/hero.jpg",
    heroVimeoId: "1169617733",
    snippets: [
      "assets/works/rsd-film/01.jpg",
      "assets/works/rsd-film/02.png",
      "assets/works/rsd-film/03.png",
      "assets/works/rsd-film/04.png",
      "assets/works/rsd-film/05.png"
    ],
    thumbnail: "assets/works/rsd-film/hero.jpg",

    featured: true,
    featuredSub: "2025 • Film",
    featuredImages: [
      "assets/works/rsd-film/hero.jpg",
      "assets/works/rsd-film/05.png",
      "assets/works/rsd-film/04.png"
    ]
  },
  {
    id: "zines",
    title: "Zines",
    year: "2023 - Present",
    teaser: "An evolving series of tactile zines that transforms personal travels and interests into experimental print artefacts.",
    overview: [
      "This personal project is a Series of Zines to document and showcase my interests and travels. Each zine explores a different theme (or country), allowing me to experiment freely with palettes, formats, and dimensions, with the main goal to challenge myself to keep each work fresh and visually distinct.",
      "Through exploration of print techniques, paper choices, cutting, and hand-stitching, I developed a clearer understanding of how design decisions translate into physical artefacts. A highlight of this journey would be the film roll–inspired zine composed of repurposed film canisters, using a filmstrip format to present photos shot on film, connecting content, form, and medium.",
      "This ongoing pet project serves as a playground for experimentation and personal expression, helping me refine my design instincts while exploring the tactile nature of print."
    ],
    heroImage: "assets/works/zines/hero.png",
    snippets: [
      "assets/works/zines/5.png",
      "assets/works/zines/1.png",
      "assets/works/zines/3.png",
      "assets/works/zines/2.png",
      "assets/works/zines/4.png"
    ],
    thumbnail: "assets/works/zines/1.png",
    featured: true,
    featuredSub: "2023 - Present • Print",
    featuredImages: [
      "assets/works/zines/1.png",
      "assets/works/zines/2.png",
      "assets/works/zines/3.png"
    ]
  },
  {
    id: "bmf-digital",
    title: "BMF: Social Media",
    year: "2024 - 2025",
    teaser: "A collection of campaign-driven social media designs that deliver visually impactful work across diverse audiences.",
    overview: [
      "This body of work includes Social Media Posts & Banners created across multiple campaigns and time periods. Working within established brand guidelines, the focus was on balancing clarity and visual impact while designing efficiently within tight timelines.",
      "Reinterpretating the generative AI “blister pack” trend through manual design proved to be more effective for greater control over composition and visual quality. This resulted in a more tailored, human-led outcome that was well received by both my team and the audience.",
      "Designing digital banners for BMF Indonesia challenged my cross-cultural thinking to adapt visuals for a foreign audience, while maintaining the visual consistency and brand identity across regions.",
    ],
    heroImage: "assets/works/bmf-digital/thumbnail.png",
    snippets: [
      "assets/works/bmf-digital/acne.png",
      "assets/works/bmf-digital/indo.png",
      "assets/works/bmf-digital/banners.png"
    ],
    thumbnail: "assets/works/bmf-digital/thumbnail.png",
    featured: true,
    featuredSub: "2024 - 2025 • Social Media",
    featuredImages: [
      "assets/works/bmf-digital/1.png",
      "assets/works/bmf-digital/2.png",
      "assets/works/bmf-digital/3.png"
    ]
  }
];

function getWorkById(id){
  return WORKS.find(w => w.id === id);
}

function escapeHtml(str){
  return String(str)
    .replaceAll("&","&amp;")
    .replaceAll("<","&lt;")
    .replaceAll(">","&gt;")
    .replaceAll('"',"&quot;")
    .replaceAll("'","&#039;");
}

function renderWorksList(){
  const mount = document.getElementById("worksList");
  if(!mount) return;

  // TBWA-style vertical list (image + meta)
  mount.innerHTML = WORKS.map(w => `
    <article class="work-row">
      <a class="work-row__link" href="project.html?id=${encodeURIComponent(w.id)}" aria-label="${escapeHtml(w.title)}">
        <div class="work-row__thumb">
          <img src="${escapeHtml(w.thumbnail || w.heroImage)}" alt="${escapeHtml(w.title)} thumbnail" loading="lazy">
        </div>

        <div class="work-row__meta">
          <div class="work-row__kicker">${escapeHtml(w.year)}</div>
          <h2 class="work-row__title">${escapeHtml(w.title)}</h2>
          <p class="work-row__teaser">${escapeHtml(w.teaser)}</p>
        </div>
      </a>
    </article>
  `).join("");
}

function renderProjectPage(){
  const hero = document.getElementById("projectHero");
  if(!hero) return;

  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const work = id ? getWorkById(id) : null;

  const notFound = document.getElementById("projectNotFound");
  const content = document.getElementById("projectContent");

  if(!work){
    if (content) content.classList.add("d-none");
    if (notFound) notFound.classList.remove("d-none");
    return;
  }

  // HERO
  hero.style.setProperty("--hero-image", `url('${work.heroImage}')`);

  const bg = hero.querySelector(".project-hero__bg");
  if (bg) {
    bg.innerHTML = "";
    hero.classList.remove("project-hero--youtube", "project-hero--vimeo");

  // fallback poster (works for both)
  if (work.heroImage) {
    hero.style.setProperty("--hero-image", `url('${work.heroImage}')`);
  }

  // Prefer Vimeo if present, else YouTube
  if (work.heroVimeoId) {
    hero.classList.add("project-hero--vimeo");

    const vid = escapeHtml(work.heroVimeoId);
    const vParams = [
      "autoplay=1",
      "muted=1",
      "loop=1",
      "background=1",  // hides UI, makes it behave like a background (best)
      "title=0",
      "byline=0",
      "portrait=0"
    ].join("&");

    bg.innerHTML = `
      <div class="project-hero__embed">
        <iframe
          src="https://player.vimeo.com/video/${vid}?${vParams}"
          title="${escapeHtml(work.title)} hero video"
          frameborder="0"
          allow="autoplay; fullscreen; picture-in-picture"
        ></iframe>
      </div>
    `;
  } else if (work.heroYoutubeId) {
    hero.classList.add("project-hero--youtube");

    const id = escapeHtml(work.heroYoutubeId);
    const yParams = [
      "autoplay=1",
      "mute=1",
      "loop=1",
      `playlist=${id}`,
      "controls=0",
      "modestbranding=1",
      "rel=0",
      "playsinline=1"
    ].join("&");

    bg.innerHTML = `
      <div class="project-hero__embed">
        <iframe
          src="https://www.youtube.com/embed/${id}?${yParams}"
          title="${escapeHtml(work.title)} hero video"
          frameborder="0"
          allow="autoplay; encrypted-media; picture-in-picture"
        ></iframe>
      </div>
    `;
  }
}

// TITLE + CLIENT
const h1 = document.getElementById("projectTitle");
const client = document.getElementById("projectClient");

if (h1) h1.textContent = work.title;
if (client) client.textContent = work.client || ""; // avoid "undefined"

  // OVERVIEW
  const overview = document.getElementById("projectOverview");
  if(overview){
    overview.innerHTML = (work.overview || []).map(p => `<p class="text-muted-custom mb-3">${escapeHtml(p)}</p>`).join("");
  }

// SNIPPETS
const gal = document.getElementById("projectGallery");
if (gal) {
  gal.innerHTML = (work.snippets || []).map(src => `
    <figure class="snip">
      <img class="snippet-img"
           src="${escapeHtml(src)}"
           alt="${escapeHtml(work.title)} image snippet"
           loading="lazy">
    </figure>
  `).join("");
}
}

function renderFeaturedGrid(){
  const mount = document.getElementById("featuredGrid");
  if(!mount) return;

  const featured = WORKS.filter(w => w.featured);

  mount.innerHTML = featured.map(w => {
    const imgs = (w.featuredImages && w.featuredImages.length)
      ? w.featuredImages
      : [w.thumbnail || w.heroImage].filter(Boolean);

    const sub = w.featuredSub || (w.year ? `${w.year}` : "");

    return `
      <div class="col-md-6 col-lg-4">
        <a class="work-tile" href="project.html?id=${encodeURIComponent(w.id)}" aria-label="${escapeHtml(w.title)}">
          <div class="work-media project-image-cycle">
            ${imgs.map((src, i) => `
              <img src="${escapeHtml(src)}" alt="${escapeHtml(w.title)} — image ${i+1}" loading="lazy">
            `).join("")}

            <div class="work-overlay">
              <span class="work-sub">${escapeHtml(sub)}</span>
            </div>
          </div>

          <div class="work-meta">
            <div class="work-meta-title">${escapeHtml(w.title)}</div>
          </div>
        </a>
      </div>
    `;
  }).join("");
}

window.addEventListener("DOMContentLoaded", () => {
  renderFeaturedGrid();   // NEW (index)
  renderWorksList();      // works.html
  renderProjectPage();    // project.html
});
