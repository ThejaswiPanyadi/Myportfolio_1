/* ============================================================
   Marcus Arden — portfolio behaviour (vanilla JS)
   Modules:
     1. Data
     2. Navigation (desktop links, mobile menu)
     3. Hero (meta list, parallax on scroll)
     4. Practice (dynamic rows)
     5. Scroll reveal (IntersectionObserver)
     6. Footer year
   ============================================================ */

/* ---------- 1. Data ---------- */
var NAV_LINKS = ["Experience", "SKILLS", "PROJECTS"];

var HERO_META = [
  ["01", "ENGINEERING"],
  ["02", "DEVELOPMENT"],
  ["03", "AI & DATA"],
  ["04", "PROBLEM SOLVING"],
];

var PRACTICE_ITEMS = [
  // {
  //   id: " Experience",
  //   index: "01",
  //   title: "Experience",
  //   serif: "Clarity",
  //   body: "A practice built slowly, on purpose.",
  // },
  // {
  //   id: "My Project",
  //   index: "02",
  //   title: "Creativity",
  //   serif: "Tension",
  //   body: "lets go",
  // },
  // {
  //   id: "identity",
  //   index: "03",
  //   title: "Identity",
  //   serif: "Permanence",
  //   body: "Typographic systems, marks, and grids engineered to age well. Identity as infrastructure: precise, documented, and durable across every surface it touches.",
  // },
];
var EXPERIENCE = [
  {
    role: "Web Developer",
    company: "code lab system Manglore",
    period: "2025 Mar — 2025 May",
    d: "Completed a 2-month internship focused on React.js development. Worked on developing responsive user interfaces, reusable components, and modern web application features while strengthening my knowledge of JavaScript, React.js, and frontend development best practices.",
    tags: ["Brand Systems", "Art Direction", "Editorial"],
  },
  // {
  //   role: "Senior Designer",
  //   company: "Atelier Nord",
  //   period: "2018 — 2021",
  //   d: "Built type-led identity systems and campaign design for luxury retail, working alongside strategy and film teams.",
  //   tags: ["Type Craft", "Campaigns", "Packaging"],
  // },
];

var PROJECTS = [
  {
    title: "crochet",
    href: "https://yarnbloom-crochet.vercel.app/",
    client: "Maison Noir",
    year: "2024",
    d: "A refined editorial system and launch campaign for a luxury culture title.",
    img: "crochet.png",
    tech: ["React js", "JS", "Tailwind CSS"],
  },
  {
    title: "Tech Farm",
    client: "Aurum Studio",
     href: "https://tech-farm-kappa.vercel.app/",
    d: "Creative direction for a product launch across digital, motion, and environmental touchpoints.",
    img: "techfarm.png",
    tech: ["Next js", "Supabase", "vercel", "Tailwind CSS"],
  },
  {
    title: "Service Identity",
    client: "Luna Lab",
    year: "2022",
    d: "A service identity system built to feel modern, precise, and enduring across brand touchpoints.",
    img: "clone.png",
    tech: ["Sketch", "Node", "TypeScript"],
  },
  {
    title: "work in progress",
    client: "Form Studio",
    year: "2021",
    d: "A launch website experience designed for high-impact storytelling and conversion.",
    img: "/",
    tech: ["Vue", "Sass", "API"],
  },
];

var SKILLS = [
  {
    title: "Frontend & Real-Time Systems",
    items: [
      "Next.js",
      "React.js & TypeScript",
      "Tailwind CSS",
      // "WebRTC",
      "Dynamic, event-driven UI updates",
    ],
  },
  {
    title: "Backend & Architecture",
    items: [
      "Python",
      "supabase",
      "Mysql",
      "Api",
      "Real-time system workflows",
    ],
  },
  {
    title: "AI Integration & Deployment",
    items: [
      "Vercel & Netlify",
      "OpenAI API",
      "Clerk authentication",
      "Git & GitHub",
    ],
  },
];

function renderExperience() {
  var host = document.querySelector("[data-experience]");
  if (!host) return;

  var header = document.createElement("div");
  header.className = "card-grid-2__header";

  var indexLabel = document.createElement("span");
  indexLabel.className = "eyebrow practice__index";
  indexLabel.textContent = "01";
  header.appendChild(indexLabel);

  var headingGroup = document.createElement("div");
  var title = document.createElement("h2");
  title.className = "display-sans practice__title";
  title.textContent = "Experience";
  headingGroup.appendChild(title);

  var serif = document.createElement("p");
  serif.className = "display-serif practice__serif";
  // serif.textContent = "Clarity";
  headingGroup.appendChild(serif);

  header.appendChild(headingGroup);

  var body = document.createElement("p");
  body.className = "practice__body";
  // body.textContent = "A practice built slowly, on purpose.";
  header.appendChild(body);

  host.appendChild(header);

  EXPERIENCE.forEach(function (e, i) {
    var wrap = document.createElement("div");
    wrap.setAttribute("data-reveal", "");
    wrap.style.setProperty("--d", String(i * 140) + "ms");

    var card = document.createElement("article");
    card.className = "card";

    var period = document.createElement("p");
    period.className = "eyebrow muted";
    period.textContent = e.period;
    card.appendChild(period);

    var role = document.createElement("h3");
    role.className = "exp-role";
    role.textContent = e.role;
    card.appendChild(role);

    var company = document.createElement("p");
    company.className = "exp-company";
    company.textContent = e.company;
    card.appendChild(company);

    var divider = document.createElement("div");
    divider.className = "exp-divider";
    card.appendChild(divider);

    var desc = document.createElement("p");
    desc.className = "exp-desc";
    desc.textContent = e.d;
    card.appendChild(desc);

    var tags = document.createElement("ul");
    tags.className = "tag-list";
    e.tags.forEach(function (t) {
      var tag = document.createElement("li");
      tag.className = "tag";
      tag.textContent = t;
      tags.appendChild(tag);
    });
    card.appendChild(tags);

    wrap.appendChild(card);
    host.appendChild(wrap);
  });
}

function renderSkills() {
  var host = document.querySelector("[data-skills]");
  if (!host) return;

  var header = document.createElement("div");
  header.className = "card-grid-2__header";

  var title = document.createElement("h2");
  title.className = "display-sans practice__title";
  title.textContent = "Skills & Technologies";
  header.appendChild(title);

  host.appendChild(header);

  SKILLS.forEach(function (skill, i) {
    var wrap = document.createElement("div");
    wrap.setAttribute("data-reveal", "");
    wrap.style.setProperty("--d", String(i * 140) + "ms");

    var card = document.createElement("article");
    card.className = "card";

    var role = document.createElement("h3");
    role.className = "exp-role";
    role.textContent = skill.title;
    card.appendChild(role);

    var list = document.createElement("ul");
    list.className = "skill-card__list";

    skill.items.forEach(function (item) {
      var listItem = document.createElement("li");
      listItem.className = "skill-card__item";
      listItem.textContent = item;
      list.appendChild(listItem);
    });

    card.appendChild(list);
    wrap.appendChild(card);
    host.appendChild(wrap);
  });
}

function renderProjects() {
  var host = document.querySelector("[data-projects]");
  if (!host) return;

  var projectMeta = PRACTICE_ITEMS[1] || {
    index: "02",
    title: "My Project",
    // serif: "Portfolio",
    // body: "Selected work presented through focused creative systems.",
  };

  var header = document.createElement("div");
  header.className = "card-grid-2__header";

  var indexLabel = document.createElement("span");
  indexLabel.className = "eyebrow practice__index";
  indexLabel.textContent = projectMeta.index;
  header.appendChild(indexLabel);

  var headingGroup = document.createElement("div");
  var title = document.createElement("h2");
  title.className = "display-sans practice__title";
  title.textContent = projectMeta.id && projectMeta.id.trim() === "My Project" ? projectMeta.id.trim() : projectMeta.title;
  headingGroup.appendChild(title);

  var serif = document.createElement("p");
  serif.className = "display-serif practice__serif";
  serif.textContent = projectMeta.serif;
  headingGroup.appendChild(serif);

  header.appendChild(headingGroup);

  var body = document.createElement("p");
  body.className = "practice__body";
  body.textContent = projectMeta.body;
  header.appendChild(body);

  host.appendChild(header);

  PROJECTS.forEach(function (e, i) {
    var wrap = document.createElement("div");
    wrap.setAttribute("data-reveal", "");
    wrap.style.setProperty("--d", String(i * 140) + "ms");

    var card = document.createElement("article");
    card.className = "card";

    var period = document.createElement("p");
    period.className = "eyebrow muted";
    period.textContent = e.year;
    card.appendChild(period);

    var role = document.createElement("h3");
    role.className = "exp-role";
    role.textContent = e.title;
    card.appendChild(role);

    var company = document.createElement("p");
    company.className = "exp-company";
    company.textContent = e.client;
    card.appendChild(company);

    if (e.img) {
      var imageWrap = document.createElement("div");
      imageWrap.className = "project-card__image";
      var image = document.createElement("img");
      image.src = e.img;
      image.alt = e.title + " screenshot";
      image.loading = "lazy";
      imageWrap.appendChild(image);
      card.appendChild(imageWrap);
    }

    var divider = document.createElement("div");
    divider.className = "exp-divider";
    card.appendChild(divider);

    var desc = document.createElement("p");
    desc.className = "exp-desc";
    desc.textContent = e.d;
    card.appendChild(desc);

    var techRow = document.createElement("div");
    techRow.className = "project-card__tech-list";
    e.tech.forEach(function (t) {
      var tech = document.createElement("span");
      tech.className = "project-card__tech";
      tech.textContent = t;
      techRow.appendChild(tech);
    });
    card.appendChild(techRow);

    var actions = document.createElement("div");
    actions.className = "project-card__actions";

    var viewLink = document.createElement("a");
    viewLink.className = "project-card__action";
    viewLink.href = "https://tech-farm-kappa.vercel.app/";
    viewLink.href = e.href || "https://tech-farm-kappa.vercel.app/";
    viewLink.setAttribute("aria-label", "View project");
    var viewIcon = document.createElement("span");
    viewIcon.className = "project-card__action-icon";
    viewIcon.textContent = "🔍";
    viewLink.appendChild(viewIcon);
    viewLink.appendChild(document.createTextNode("View"));
    actions.appendChild(viewLink);

   
    

    var githubLink = document.createElement("a");
    githubLink.className = "project-card__action";
    githubLink.href = "https://github.com/ThejaswiPanyadi";
    githubLink.setAttribute("aria-label", "View GitHub repository");
    var githubIcon = document.createElement("span");
    githubIcon.className = "project-card__action-icon";
    githubIcon.textContent = "🐙";
    githubLink.appendChild(githubIcon);
    githubLink.appendChild(document.createTextNode("GitHub"));
    actions.appendChild(githubLink);

    card.appendChild(actions);

    wrap.appendChild(card);
    host.appendChild(wrap);
  });
}


/* ---------- 2. Navigation ---------- */
function initNav() {
  var header = document.querySelector(".site-nav");
  var list = document.querySelector("[data-nav-list]");
  var mobileNav = document.querySelector("[data-mobile-nav]");
  var toggle = document.querySelector("[data-menu-toggle]");
  var note = mobileNav ? mobileNav.querySelector(".site-nav__mobile-note") : null;
  var open = false;

  // desktop links
  NAV_LINKS.forEach(function (label) {
    var li = document.createElement("li");
    var a = document.createElement("a");
    a.href = "#" + label.toLowerCase();
    a.className = "eyebrow link-underline site-nav__link";
    a.textContent = label;
    li.appendChild(a);
    list.appendChild(li);
  });

  // mobile links (inserted before the note)
  NAV_LINKS.forEach(function (label, i) {
    var a = document.createElement("a");
    a.href = "#" + label.toLowerCase();
    a.className = "display-sans site-nav__mobile-link";
    a.textContent = label;
    a.dataset.delay = String(120 + i * 80);
    a.addEventListener("click", function () {
      setOpen(false);
    });
    mobileNav.insertBefore(a, note);
  });

  var mobileLinks = mobileNav.querySelectorAll(".site-nav__mobile-link");

  function setOpen(next) {
    open = next;
    header.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    document.body.style.overflow = open ? "hidden" : "";

    mobileLinks.forEach(function (link) {
      link.style.transitionDelay = open ? link.dataset.delay + "ms" : "0ms";
    });
  }

  toggle.addEventListener("click", function () {
    setOpen(!open);
  });
}

/* ---------- 3. Hero ---------- */
function initHeroMeta() {
  var wrap = document.querySelector("[data-hero-meta]");
  if (!wrap) return;

  var marquee = document.createElement("div");
  marquee.className = "marquee";

  var track = document.createElement("div");
  track.className = "marquee-track";

  HERO_META.forEach(function (pair) {
    var label = document.createElement("span");
    label.textContent = pair[1] + " —";
    track.appendChild(label);
  });

  // Duplicate the track content so the animation can loop seamlessly.
  track.innerHTML += track.innerHTML;
  marquee.appendChild(track);
  wrap.appendChild(marquee);
}

function initParallax() {
  var el = document.querySelector("[data-parallax]");
  if (!el) return;
  var ticking = false;

  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () {
      el.style.transform = "translate3d(0, " + window.scrollY * -0.06 + "px, 0)";
      ticking = false;
    });
  }

  window.addEventListener("scroll", onScroll, { passive: true });
}

/* ---------- 4. Practice ---------- */
function initPractice() {
  var section = document.querySelector("[data-practice]");

  // The first practice item is rendered as a header above the experience cards,
  // and the second item is rendered as the project section header, so skip both here.
  PRACTICE_ITEMS.slice(2).forEach(function (item, i) {
    var article = document.createElement("article");
    article.id = item.id;
    article.className = "practice__row" + (i % 2 === 1 ? " practice__row--flip" : "");
    article.setAttribute("data-reveal-target", "");

    article.innerHTML =
      '<div class="practice__grid" data-reveal-inner>' +
      '<div class="practice__col--index">' +
      '<span class="eyebrow practice__index">' +
      item.index +
      "</span>" +
      "</div>" +
      '<div class="practice__col--head">' +
      '<h2 class="display-sans practice__title">' +
      item.title +
      "</h2>" +
      '<p class="display-serif practice__serif">' +
      item.serif +
      "</p>" +
      "</div>" +
      '<div class="practice__col--body">' +
      '<p class="practice__body">' +
      item.body +
      "</p>" +
      "</div>" +
      "</div>";

    section.appendChild(article);
  });
}

/* ---------- 5. Scroll reveal ---------- */
function initReveal() {
  var targets = document.querySelectorAll("[data-reveal], [data-reveal-target]");

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 },
  );

  targets.forEach(function (target) {
    observer.observe(target);
  });
}

/* ---------- 6. Footer year ---------- */
function initYear() {
  var el = document.querySelector("[data-year]");
  if (el) el.textContent = "© " + new Date().getFullYear();
}

/* ---------- 7. Intro Loader ---------- */
function initIntroLoader() {
  var loader      = document.getElementById("intro-loader");
  var name        = document.getElementById("loader-name");
  var tagline     = document.getElementById("loader-tagline");
  var barWrap     = document.getElementById("loader-bar-wrap");
  var bar         = document.getElementById("loader-bar");
  var percentEl   = document.getElementById("loader-percent");
  var signature   = document.getElementById("loader-signature");

  if (!loader) return;

  // Step 1: Hero is briefly visible for ~400ms, then loader fades in over it
  // (The loader starts as display:flex with black bg, but we make it transparent first)
  loader.style.background = "transparent";
  
  setTimeout(function () {
    // Step 2: Transition to black loading screen
    loader.style.transition = "background 0.5s cubic-bezier(0.25, 1, 0.5, 1)";
    loader.style.background = "#000";
    
    // Step 3: After background is black, reveal loader elements with stagger
    setTimeout(function () {
      name.classList.add("is-visible");
      tagline.classList.add("is-visible");
      barWrap.classList.add("is-visible");
      percentEl.classList.add("is-visible");
      if (signature) signature.classList.add("is-visible");

      // Start the loading counter after elements are visible
      setTimeout(function () {
        startLoadingAnimation();
      }, 500);
    }, 500);
  }, 400);

  function startLoadingAnimation() {
    var duration = 2200; // total time for 0 → 100
    var startTime = null;

    function easeOutQuart(t) {
      return 1 - Math.pow(1 - t, 4);
    }

    function tick(timestamp) {
      if (!startTime) startTime = timestamp;
      var elapsed = timestamp - startTime;
      var rawProgress = Math.min(elapsed / duration, 1);
      var easedProgress = easeOutQuart(rawProgress);
      var value = Math.round(easedProgress * 100);

      // Pad to 3 digits
      var display = String(value);
      while (display.length < 3) display = "0" + display;

      percentEl.textContent = display;
      bar.style.width = value + "%";

      if (rawProgress < 1) {
        requestAnimationFrame(tick);
      } else {
        // Step 4: Loading complete — fade out elements
        onLoadingComplete();
      }
    }

    requestAnimationFrame(tick);
  }

  function onLoadingComplete() {
    // Brief pause at 100%
    setTimeout(function () {
      // Step 4: Staggered fade out of loader content
      name.classList.add("is-fading");
      
      setTimeout(function () {
        tagline.classList.add("is-fading");
      }, 60);

      setTimeout(function () {
        barWrap.classList.add("is-fading");
        percentEl.classList.add("is-fading");
        if (signature) signature.classList.add("is-fading");
      }, 120);

      // Step 5: After elements have faded, slide the whole loader up
      setTimeout(function () {
        loader.classList.add("is-exiting");

        // Step 6: While loader slides, prep hero reveal
        setTimeout(function () {
          revealHero();
        }, 200);

        // Remove loader from DOM after animation completes
        setTimeout(function () {
          loader.style.display = "none";
        }, 1000);
      }, 600);
    }, 300);
  }

  function revealHero() {
    // Assign stagger delays to .reveal elements
    var reveals = document.querySelectorAll(".reveal");
    reveals.forEach(function (el, i) {
      el.style.setProperty("--loader-d", (120 + i * 100) + "ms");
    });

    // Switch body class to trigger CSS animations
    document.body.classList.remove("is-loading");
    document.body.classList.add("is-loaded");

    // Re-enable scrolling after hero animations are done
    var totalRevealTime = 120 + reveals.length * 100 + 1000;
    setTimeout(function () {
      document.body.style.overflow = "";
    }, totalRevealTime);
  }
}

/* ---------- Boot ---------- */
document.addEventListener("DOMContentLoaded", function () {
  initNav();
  initHeroMeta();
  initParallax();
  initPractice();
  renderExperience();
  renderSkills();
  renderProjects();
  initReveal();
  initYear();
  initTheme();
  initIntroLoader();
});

/* ---------- Theme (light / dark) ---------- */
var THEME_VARS = {
  light: {
    '--background': 'oklch(0.9825 0 0)',
    '--foreground': 'oklch(0.2 0 0)',
    '--card': 'oklch(1 0 0)',
    '--muted-foreground': 'oklch(0.58 0 0)',
    '--hairline': 'oklch(0.875 0 0)',
    '--grid-line': 'oklch(0.925 0 0)',
    '--shadow-soft': '0 32px 64px rgba(0, 0, 0, 0.08)'
  },
  dark: {
    '--background': '#0b0b0c',
    '--foreground': '#f5f5f6',
    '--card': '#0f0f10',
    '--muted-foreground': '#bfbfbf',
    '--hairline': 'rgba(255,255,255,0.06)',
    '--grid-line': 'rgba(255,255,255,0.03)',
    '--shadow-soft': '0 28px 56px rgba(0,0,0,0.6)'
  }
};

function applyTheme(theme) {
  theme = theme === 'light' ? 'light' : 'dark';
  // set data-theme attribute on documentElement to either 'light' or 'dark'
  document.documentElement.setAttribute('data-theme', theme);
  themeToggleButton && themeToggleButton.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');

  // also set inline CSS variables as a fallback to ensure instant, global application
  var vars = THEME_VARS[theme] || THEME_VARS.dark;
  Object.keys(vars).forEach(function (k) {
    try { document.documentElement.style.setProperty(k, vars[k]); } catch (e) {}
  });
}

function withThemeTransition(fn) {
  document.documentElement.classList.add("is-theme-transition");
  try {
    fn && fn();
  } finally {
    window.setTimeout(function () {
      document.documentElement.classList.remove("is-theme-transition");
    }, 380);
  }
}

var themeToggleButton = null;
function initTheme() {
  themeToggleButton = document.querySelector("[data-theme-toggle]");

  // determine stored theme
  var stored = null;
  try {
    stored = localStorage.getItem("site-theme");
  } catch (e) {
    stored = null;
  }

  // Default to light if no stored theme exists;
  // preserve the user's saved choice when one is available.
  var initial = stored === "dark" ? "dark" : "light";
  if (!stored) {
    try {
      localStorage.setItem("site-theme", initial);
    } catch (e) {}
  }
 
  applyTheme(initial);

  // click handler
  if (themeToggleButton) {
    themeToggleButton.addEventListener("click", function () {
      var isLight = document.documentElement.getAttribute("data-theme") === "light";
      var next = isLight ? "dark" : "light";
      withThemeTransition(function () {
        applyTheme(next);
      });

      try {
        localStorage.setItem("site-theme", next);
      } catch (e) {}
    });
  }
}
