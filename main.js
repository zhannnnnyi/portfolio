/* =========================================================
   Custom Cursor
   ========================================================= */
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
    // White dot
    dx += (tx - dx) * 0.35;
    dy += (ty - dy) * 0.35;

    // Pink ring
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
    select, textarea, .form-control, .snippet-img,
    .skills-trigger-software, .skills-trigger-skills, .skills-trigger-education
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
          entry.target.classList.remove("is-visible"); 
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

/* =========================================================
   Works
   ========================================================= */
const WORKS = [
  {
    id: "website",
    title: "Digital Portfolio",
    year: "2026",
    teaser: "Application of design thinking in creating a user-centered, responsive website through iterative research, ideation, and prototyping.",
    overview: [
      "<b> This Website Project </b> blended design thinking with usability heuristics to craft a clean and  intuitive digital portfolio. The goal was to create an experience that feels seamless, engaging, and easy to navigate while being usable.",
      "Inspired by the bold yet restrained digital presence of other creative studios, the site adopts a minimalist structure with my personal branding. This approach reduces visual noise and allows each project to take centre stage.",
      "The navigation system was designed with flexibility in mind. Visitors can explore projects through the Works page for a comprehensive overview, or quickly access selected pieces through the featured scrolling section on the homepage. This dual structure supports both exploratory browsing and direct navigation.",
      "Built using HTML, CSS, and JavaScript, the site incorporates dynamic project pages, responsive layouts, and interactive image cycling to create a smooth and adaptable experience across devices. This project became both a showcase for my work and a testing ground for refining my approach to digital design, balancing visual clarity with functional interaction.",
    ],
    heroImage: "assets/works/website/thumbnail.webp",
    heroVimeoId: "1187181196",
    snippets: [
      "assets/works/website/thumbnail.webp",
      "assets/works/website/thumbnail-2.webp",
      "assets/works/website/branding.webp",
      "assets/works/website/home.webp",
      "assets/works/website/works.webp",
      "assets/works/website/about.webp",
    ],
    thumbnail: "assets/works/website/thumbnail.webp",

    featured: true,
    featuredSub: "2026 • Website",
    featuredImages: [
      "assets/works/website/thumbnail.webp",
      "assets/works/website/thumbnail-2.webp"
    ]
  },
  {
    id: "rsd-film",
    title: "RSD Film",
    year: "2025",
    teaser: "A short film exploring the journey of vinyl collecting.",
    overview: [
      "<b> The RSD Film </b> is a short social media video driven by my interest in vinyl collecting, created to promote Record Store Day 2025. The video brings viewers through the vinyl ritual, from digging in-store to playing the record, which aimed to reignite interest in physical media.</strong>",
      "Produced solely by myself, the project relied on  self-sourced equipment and the support of a local record store (@wowfactorrecords). This limitation forced me to focus on visual storytelling and typography to convey mood, pacing, and intention. The final video was well received by my lecturer and strengthened my skill as a visual storyteller."
    ],
    heroImage: "assets/works/rsd-film/hero.webp",
    snippets: [
      "assets/works/rsd-film/01.webp",
      "assets/works/rsd-film/02.webp",
      "assets/works/rsd-film/03.webp",
      "assets/works/rsd-film/04.webp",
      "assets/works/rsd-film/05.webp"
    ],
    thumbnail: "assets/works/rsd-film/hero.webp",

    featured: true,
    featuredSub: "2025 • Film",
    featuredImages: [
      "assets/works/rsd-film/hero.webp",
      "assets/works/rsd-film/05.webp",
      "assets/works/rsd-film/04.webp"
    ],
    externalLink: "https://tinyurl.com/RSD-Film"
  },
  {
    id: "zines",
    title: "Zines",
    year: "2023 - Present",
    teaser: "An evolving series of tactile zines that transforms personal travels and interests into experimental print artefacts.",
    overview: [
      "This personal project is a <b> Series of Zine </b> to document and showcase my interests and travels. Each zine explores a different theme (or country), allowing me to experiment freely with palettes, formats, and dimensions, with the main goal to challenge myself to keep each work fresh and visually distinct.",
      "Through exploration of print techniques, paper choices, cutting, and hand-stitching, I developed a clearer understanding of how design decisions translate into physical artefacts. A highlight of this journey would be the film roll–inspired zine composed of repurposed film canisters, using a filmstrip format to present photos shot on film, connecting content, form, and medium.",
      "This ongoing pet project serves as a playground for experimentation and personal expression, helping me refine my design instincts while exploring the tactile nature of print."
    ],
    heroImage: "assets/works/zines/hero.webp",
    snippets: [
      "assets/works/zines/5.webp",
      "assets/works/zines/1.webp",
      "assets/works/zines/3.webp",
      "assets/works/zines/2.webp",
      "assets/works/zines/4.webp"
    ],
    thumbnail: "assets/works/zines/1.webp",
    featured: true,
    featuredSub: "2023 - Present • Print",
    featuredImages: [
      "assets/works/zines/1.webp",
      "assets/works/zines/2.webp",
      "assets/works/zines/3.webp"
    ]
  },
  {
    id: "bmf-digital",
    title: "BMF: Social Media",
    year: "2024 - 2025",
    teaser: "A collection of campaign-driven social media designs that deliver visually impactful work across diverse audiences.",
    overview: [
      "This body of work includes <b> Social Media Posts & Banners </b> created across multiple campaigns and time periods. Working within established brand guidelines, the focus was on balancing clarity and visual impact while designing efficiently within tight timelines.",
      "Reinterpretating the generative AI “blister pack” trend through manual design proved to be more effective for greater control over composition and visual quality. This resulted in a more tailored, human-led outcome that was well received by both my team and the audience.",
      "Designing digital banners for BMF Indonesia challenged my cross-cultural thinking to adapt visuals for a foreign audience, while maintaining the visual consistency and brand identity across regions.",
    ],
    heroImage: "assets/works/bmf-digital/thumbnail.webp",
    snippets: [
      "assets/works/bmf-digital/acne.webp",
      "assets/works/bmf-digital/indo.webp",
      "assets/works/bmf-digital/banners.webp"
    ],
    thumbnail: "assets/works/bmf-digital/thumbnail.webp",
    featured: true,
    featuredSub: "2024 - 2025 • Social Media",
    featuredImages: [
      "assets/works/bmf-digital/1.webp",
      "assets/works/bmf-digital/2.webp",
      "assets/works/bmf-digital/3.webp"
    ]
  },
  {
    id: "bmf-website",
    title: "BMF: Website Design",
    year: "2024",
    teaser: "Transforming BMF’s CSR campaigns into a clean, timeline-based web experience.",
    overview: [
      "<b> The CSR Webpage Design </b> involved designing a dedicated website landing page to highlight BMF’s CSR initiatives, keeping everything aligned with the existing website guidelines. My final goal was to present the campaigns (across the years) clearly and cohesively without overwhelming the viewer.",
      "With that, I proposed a scrolling timeline to organise initiatives by progression, creating a more interactive browsing experience. In addition, I was required to coordinate closely with an external web vendor to ensure the site was accurately translated from design to code. In the end, the outcome was a clean, structured webpage that communicated BMF’s CSR efforts in an accessible and engaging way, which strengthend my understanding of interaction design and cross-functional collaboration."
    ],
    heroImage: "assets/works/bmf-website/thumbnail.webp",
    snippets: [
      "assets/works/bmf-website/1.webp",
      "assets/works/bmf-website/2.webp",
      "assets/works/bmf-website/3.webp"
    ],
    thumbnail: "assets/works/bmf-website/thumbnail.webp",
    featured: true,
    featuredSub: "2024 • UI/UX",
    featuredImages: [
      "assets/works/bmf-website/1.webp",
      "assets/works/bmf-website/2.webp",
    ]
  },   
  {
    id: "bmf-print",
    title: "BMF: Print Design",
    year: "2024",
    teaser: "Creating impactful print materials that communicate BMF’s message effectively.",
    overview: [
      "This series of <b> Print Media Assets </b>, created during my internship, includes posters and brochures designed to support various communication needs.",
      "A key project was a brochure for Temasek Holdings, which highlighted BMF’s offerings and corporate profile. Balancing content with a professional tone, while considering layout, hierarchy, and typography, was essential. The design direction for this brochure was later referenced and adapted by the team for subsequent projects, contributing to stronger visual consistency.",
      "One standout project was the Food Drive campaign, a collaboration with Food from the Heart and Samaritans of Singapore. Initially starting as a playful, hand-drawn concept, the design evolved through multiple iterations to combine BMF and Svenson’s color palettes with photo-realistic imagery. The final poster, printed for nationwide dissemination, played a key role in raising over $50,000 for the partner organisations, marking a significant milestone in my growth as a designer.",
      "Additionally, I worked on the Clinic Posters project, a revamp of posters for BMF Clinic’s new centre. Using a minimalist palette of white and grey, I focused on restrained typography and grid systems to convey professionalism and clarity. This project deepened my understanding of how layout, typography, and visual consistency contribute to trust and credibility in the healthcare context."
    ],
    heroImage: "assets/works/bmf-print/1.webp",
    heroVimeoId: "1187178681",
    snippets: [
      "assets/works/bmf-print/clinic.webp",
      "assets/works/bmf-print/clinic-mock-1.webp",
      "assets/works/bmf-print/clinic-mock-2.webp", 
      "assets/works/bmf-print/1.webp",
      "assets/works/bmf-print/2.webp",
      "assets/works/bmf-print/3.webp",
      "assets/works/bmf-print/poster-1.webp",
      "assets/works/bmf-print/poster-2.webp",
    ],
    thumbnail: "assets/works/bmf-print/1.webp",
    featured: true,
    featuredSub: "2024 - 2025 • Print",
    featuredImages: [
      "assets/works/bmf-print/1.webp",
      "assets/works/bmf-print/2.webp",
      "assets/works/bmf-print/3.webp",
    ]
  },   
  {
    id: "photobook",
    title: "Photobook",
    year: "2024",
    teaser: "A thoughtful e-book exploring diverse perceptions of death in Singapore, reflecting on personal and cultural perspectives.",
    overview: [
      "<b> The Photobook </b> was a group project exploring perceptions of death in Singapore, presented as an e-book combining imagery and interview responses from eight participants of different ages, backgrounds, and beliefs. Structured by age, the chapters offer a lifespan-based perspective on how individuals encounter and interpret death.",
      "As the main designer, I defined the visual direction of the book, balancing the somber subject matter with an uplifting, destigmatizing tone. With limited experience and tools as a Year 1 student, I relied on experimentation and group feedback to refine typography, layout, and pacing, ensuring the design remained sensitive and considered. The final outcome was a thoughtfully composed photobook that captured the realities of its participants. The emotional depth and scale of the project expanded my confidence as a designer and remains one of the most meaningful works I have produced."
    ],
    heroImage: "assets/works/photobook/1.webp",
    snippets: [
      "assets/works/photobook/1.webp",
      "assets/works/photobook/2.webp",
      "assets/works/photobook/3.webp"
    ],
    thumbnail: "assets/works/photobook/1.webp",
    featured: true,
    featuredSub: "2024 • Editorial",
    featuredImages: [
      "assets/works/photobook/1.webp",
      "assets/works/photobook/2.webp",
      "assets/works/photobook/3.webp",
    ],
    externalLink: "https://tinyurl.com/NCO-Photobook"
  },
  {
    id: "outreach",
    title: "Community Outreach",
    year: "2024",
    teaser: "Promoted active ageing in Singapore through a senior-focused \"Amazing Race\" in Yuhua.",
    overview: [
      "<b> The Community Outreach </b> project focused on promoting active ageing in Singapore through an “Amazing Race” designed for seniors in the Yuhua community.",
      "As part of the publicity team, I served as the designer responsible for the promotional poster and the final academic poster summarising our 12-week process and outcomes. Designing for an elderly audience required a strong focus on accessibility, including larger type, higher contrast, simplified layouts, and a bilingual English–Chinese version. Considering digital literacy, printed posters were prioritized, supported by a targeted WhatsApp broadcast for effective outreach. The publicity materials successfully attracted the target 50 senior participants, meeting the event quota and earning strong appreciation from our community partner. This project deepened my ability to design with empathy and adapt visual communication to real-world community needs."
    ],
    heroImage: "assets/works/outreach/flyer.webp",
    snippets: [
      "assets/works/outreach/flyer.webp", 
      "assets/works/outreach/poster.webp",
      "assets/works/outreach/1.webp",
      "assets/works/outreach/2.webp",
      "assets/works/outreach/3.webp",
    ],
    thumbnail: "assets/works/outreach/flyer.webp",
    featured: true,
    featuredSub: "2024 • Print",
    featuredImages: [
      "assets/works/outreach/flyer.webp",
      "assets/works/outreach/poster.webp",
    ]
  },   
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

  // Vertical list 
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

  // Prefer Vimeo if present, else YouTube
  if (work.heroVimeoId) {
    hero.classList.add("project-hero--vimeo");

    const vid = escapeHtml(work.heroVimeoId);
    const vParams = [
      "autoplay=1",
      "muted=1",
      "loop=1",
      "background=1",
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
if (client) client.textContent = work.client || "";

// OVERVIEW
const overview = document.getElementById("projectOverview");
  if(overview){
    overview.innerHTML = (work.overview || []).map(p => `<p class="text-muted-custom mb-3">${(p)}</p>`).join("");
  }

// External link
if (work.externalLink) {
  const linkHTML = `<a href="${work.externalLink}" target="_blank" class="btn-ext">See More</a>`;
  document.getElementById("projectOverview").innerHTML += linkHTML;
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

  initSnippetLightbox();
}
}

function initSnippetLightbox(){
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");

  document.querySelectorAll(".snippet-img").forEach(img=>{
    img.addEventListener("click", ()=>{
      lightboxImg.src = img.src;
      lightbox.classList.add("active");
    });
  });

  lightbox.addEventListener("click", ()=>{
    lightbox.classList.remove("active");
  });
}

/* =========================================================
   Featured Grid + Slider (index.html)
   ========================================================= */

function renderFeaturedGrid(){
  const mount = document.getElementById("featuredGrid");
  if(!mount) return;

  const featured = WORKS.filter(w => w.featured);

  mount.innerHTML = featured.map(w => {
    const imgs = (w.featuredImages && w.featuredImages.length)
      ? w.featuredImages.slice(0, 3).filter(Boolean)
      : [w.thumbnail || w.heroImage].filter(Boolean);

    const sub = w.featuredSub || (w.year ? `${w.year}` : "");
    const cycleClass = imgs.length > 1 ? "project-image-cycle" : "";

    return `
      <div class="featured-slide">
        <a class="work-tile" href="project.html?id=${encodeURIComponent(w.id)}" aria-label="${escapeHtml(w.title)}">
          <div class="work-media ${cycleClass}" data-img-count="${imgs.length}">
            ${imgs.map((src, i) => `
              <img
                src="${escapeHtml(src)}"
                alt="${escapeHtml(w.title)} — image ${i + 1}"
                loading="lazy"
              >
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

  initFeaturedSlider();
}

// Simple crossfade for multiple featured images (if any)
function initFeaturedCrossfades(){
  document.querySelectorAll(".project-image-cycle").forEach(cycle => {
    const imgs = Array.from(cycle.querySelectorAll("img"));
    if (imgs.length <= 1) return;

    if (cycle.dataset.crossfadeInit === "1") return;
    cycle.dataset.crossfadeInit = "1";

    let index = 0;

    imgs.forEach((img, i) => {
      img.classList.toggle("is-active", i === 0);
    });

    const interval = 2400; // time each image stays before next fade

    setInterval(() => {
      imgs[index].classList.remove("is-active");
      index = (index + 1) % imgs.length;
      imgs[index].classList.add("is-active");
    }, interval);
  });
}

function initFeaturedSlider(){
  const track = document.getElementById("featuredGrid");
  const viewport = track ? track.parentElement : null;
  const dotsMount = document.getElementById("featuredDots");

  if (!track || !viewport || !dotsMount) return;

  const originalSlides = Array.from(track.querySelectorAll(".featured-slide"));
  if (!originalSlides.length) return;

  function getVisibleCount(){
    if (window.innerWidth < 768) return 1;
    if (window.innerWidth < 992) return 2;
    return 3;
  }

  function buildDots(count){
    dotsMount.innerHTML = Array.from({ length: count }, (_, i) => `
      <button
        class="featured-slider__dot"
        type="button"
        aria-label="Go to work ${i + 1}"
        data-index="${i}">
      </button>
    `).join("");
  }

  function setActiveDot(index){
    const dots = Array.from(dotsMount.querySelectorAll(".featured-slider__dot"));
    dots.forEach((dot, i) => {
      dot.classList.toggle("is-active", i === index);
    });
  }

  function mountScrollLoop(){
    const visible = getVisibleCount();
    const cloneCount = Math.min(visible, originalSlides.length);

    const before = originalSlides.slice(-cloneCount).map(s => s.cloneNode(true));
    const main = originalSlides.map(s => s.cloneNode(true));
    const after = originalSlides.slice(0, cloneCount).map(s => s.cloneNode(true));

    track.innerHTML = "";
    [...before, ...main, ...after].forEach(slide => track.appendChild(slide));

    const slides = Array.from(track.querySelectorAll(".featured-slide"));
    buildDots(originalSlides.length);

    let isJumping = false;
    let scrollTimer = null;

    function getStep(){
      const gap = parseFloat(getComputedStyle(track).gap) || 24;
      return slides[0].getBoundingClientRect().width + gap;
    }

    function getRealIndex(){
      const step = getStep();
      const rawIndex = Math.round(viewport.scrollLeft / step);
      let realIndex = (rawIndex - cloneCount) % originalSlides.length;
      if (realIndex < 0) realIndex += originalSlides.length;
      return realIndex;
    }

    function updateDots(){
      setActiveDot(getRealIndex());
    }

    function jumpIfNeeded(){
      if (isJumping) return;

      const step = getStep();
      const rawIndex = Math.round(viewport.scrollLeft / step);
      const total = originalSlides.length;

      if (rawIndex < cloneCount) {
        isJumping = true;
        viewport.scrollLeft = (rawIndex + total) * step;
        isJumping = false;
      } else if (rawIndex >= total + cloneCount) {
        isJumping = true;
        viewport.scrollLeft = (rawIndex - total) * step;
        isJumping = false;
      }

      updateDots();
    }

    viewport.scrollLeft = cloneCount * getStep();
    updateDots();

    viewport.onscroll = () => {
      if (isJumping) return;

      updateDots();

      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => {
        jumpIfNeeded();
      }, 80);
    };

    dotsMount.onclick = (e) => {
      const dot = e.target.closest(".featured-slider__dot");
      if (!dot) return;

      const realIndex = Number(dot.dataset.index);
      const step = getStep();
      const targetIndex = cloneCount + realIndex;

      viewport.scrollTo({
        left: targetIndex * step,
        behavior: "smooth"
      });
    };
  }

  function remount(){
    track.innerHTML = originalSlides.map(s => s.outerHTML).join("");
    mountScrollLoop();
    initFeaturedCrossfades();
  }

  remount();

  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(remount, 120);
  }, { passive: true });
}

window.addEventListener("DOMContentLoaded", () => {
  renderFeaturedGrid();   // index.html
  renderWorksList();      // works.html
  renderProjectPage();    // project.html
});
