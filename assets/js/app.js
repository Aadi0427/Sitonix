/* ===== MOBILE MENU ===== */
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

if (menuBtn && mobileMenu) {
  const setMenu = (open) => {
    mobileMenu.classList.toggle("open", open);
    menuBtn.setAttribute("aria-expanded", String(open));
  };
  menuBtn.addEventListener("click", () => setMenu(!mobileMenu.classList.contains("open")));
  mobileMenu.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setMenu(false)));
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") setMenu(false); });
}

/* ===== FEATURE CARDS DATA (yahan edit karo) ===== */
const features = [
  {
    color: "blue", title: "Modern & Creative Designs", text: "Beautiful and user-friendly designs that make your brand stand out.",
    svg: `<rect x="22" y="14" width="76" height="58" rx="8" fill="#fff"/><path d="M22 22a8 8 0 0 1 8-8h60a8 8 0 0 1 8 8v4H22z" fill="var(--c)"/><circle cx="31" cy="20" r="2" fill="#fff"/><circle cx="38" cy="20" r="2" fill="#fff"/><rect class="a-shim" x="30" y="34" width="34" height="26" rx="4" fill="#9cc4ff"/><rect x="70" y="36" width="20" height="5" rx="2.5" fill="#dce8f6"/><rect x="70" y="46" width="14" height="5" rx="2.5" fill="#e8eff8"/><path class="a-cursor" d="M60 48v20l5-5 4 9 4-2-4-9h7z" fill="#0a1633" stroke="#fff" stroke-width="1.5" stroke-linejoin="round"/>`
  },
  {
    color: "pink", title: "Tailored to Your Business", text: "Custom solutions designed specifically for your goals and industry.",
    svg: `<g class="a-pulse"><circle cx="52" cy="46" r="30" fill="#ff4d7e"/><circle cx="52" cy="46" r="21" fill="#fff"/><circle cx="52" cy="46" r="12" fill="#ff4d7e"/><circle cx="52" cy="46" r="4.5" fill="#fff"/></g><g class="a-dart"><path d="M52 46L98 12" stroke="#0a1633" stroke-width="3" stroke-linecap="round"/><path d="M88 6l12 2-2 12z" fill="var(--c)"/></g>`
  },
  {
    color: "green", title: "Reliable & Secure Websites", text: "Fast, secure and always running, so you can focus on your business.",
    svg: `<path class="a-pulse" d="M60 8l30 11v24c0 20-13 32-30 39C43 75 30 63 30 43V19z" fill="#14b383"/><path class="a-draw" pathLength="1" d="M46 44l10 10 19-21" fill="none" stroke="#fff" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>`
  },
  {
    color: "orange", title: "Ongoing Support", text: "We're here even after launch with continuous support and maintenance.",
    svg: `<g transform="translate(-14 8)"><path d="M30 52V44a30 30 0 0 1 60 0v8" fill="none" stroke="#173e7b" stroke-width="9" stroke-linecap="round"/><rect x="22" y="48" width="14" height="22" rx="7" fill="#173e7b"/><rect x="84" y="48" width="14" height="22" rx="7" fill="#173e7b"/><path d="M90 70c0 8-8 10-20 10" fill="none" stroke="#173e7b" stroke-width="4" stroke-linecap="round"/></g><g class="a-bob"><rect x="64" y="4" width="46" height="26" rx="13" fill="#fff"/><circle class="a-dot" cx="78" cy="17" r="3.5" fill="var(--c)"/><circle class="a-dot d2" cx="87" cy="17" r="3.5" fill="var(--c)"/><circle class="a-dot d3" cx="96" cy="17" r="3.5" fill="var(--c)"/></g>`
  },
  {
    color: "violet", title: "Fast & High Performance", text: "Optimized websites that load quickly and give a smooth experience.",
    svg: `<path d="M20 66a40 40 0 0 1 80 0" fill="none" stroke="#ddd5ff" stroke-width="12" stroke-linecap="round"/><path d="M20 66a40 40 0 0 1 56-36.5" fill="none" stroke="var(--c)" stroke-width="12" stroke-linecap="round"/><path class="a-needle" d="M60 66L84 40" stroke="#f04b68" stroke-width="4" stroke-linecap="round"/><circle cx="60" cy="66" r="7" fill="#0a1633"/>`
  },
  {
    color: "sky", title: "SEO & Digital Marketing", text: "Get higher visibility, more traffic and better leads with proven strategies.",
    svg: `<g fill="var(--c)"><rect class="a-bar" x="24" y="54" width="14" height="22" rx="3"/><rect class="a-bar d2" x="44" y="44" width="14" height="32" rx="3"/><rect class="a-bar d3" x="64" y="32" width="14" height="44" rx="3"/><rect class="a-bar d4" x="84" y="20" width="14" height="56" rx="3"/></g><path class="a-draw" pathLength="1" d="M28 40l22-10 20-8 22-14" fill="none" stroke="#ff9c23" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/><path d="M82 6h14v14" fill="none" stroke="#ff9c23" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>`
  },
  {
    color: "rose", title: "E-commerce Solutions", text: "Powerful online stores to grow your sales and reach more customers.",
    svg: `<g class="a-bob"><path d="M32 34h56l-4 40a6 6 0 0 1-6 5H42a6 6 0 0 1-6-5z" fill="var(--c)"/><path d="M46 38v-8a14 14 0 0 1 28 0v8" fill="none" stroke="#9b1c3c" stroke-width="5" stroke-linecap="round"/><path d="M50 54c4 6 16 6 20 0" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round"/></g><g class="a-pulse"><circle cx="96" cy="22" r="11" fill="#ffc247"/><text x="96" y="27" text-anchor="middle" font-size="14" font-weight="800" fill="#8a5a00">₹</text></g>`
  },
  {
    color: "gold", title: "Website Maintenance", text: "Keep your website updated, secure and running smoothly, always.",
    svg: `<rect x="12" y="16" width="66" height="50" rx="7" fill="#fff"/><path d="M12 23a7 7 0 0 1 7-7h52a7 7 0 0 1 7 7v3H12z" fill="#c9d6ea"/><rect x="20" y="36" width="30" height="5" rx="2.5" fill="#e3ebf6"/><rect x="20" y="46" width="22" height="5" rx="2.5" fill="#e3ebf6"/><g class="a-spin"><circle cx="78" cy="56" r="17" fill="none" stroke="var(--c)" stroke-width="9" stroke-dasharray="6.4 4.28"/><circle cx="78" cy="56" r="15" fill="var(--c)"/><circle cx="78" cy="56" r="6" fill="#fff"/></g>`
  },
];

/* ===== CAROUSEL ===== */
const fc = document.getElementById("fc");
const track = document.getElementById("fcTrack");
const dotsWrap = document.getElementById("fcDots");
const prevBtn = document.getElementById("fcPrev");
const nextBtn = document.getElementById("fcNext");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (fc && track) {
  track.innerHTML = features.map((f, i) => `
    <a class="fcard fcard--${f.color}" href="#services" style="--i:${i}">
      <div class="fcard__visual"><svg viewBox="0 0 120 90" aria-hidden="true" focusable="false">${f.svg}</svg></div>
      <div class="fcard__body"><h3>${f.title}</h3><p>${f.text}</p></div>
      <span class="fcard__arrow" aria-hidden="true">→</span>
    </a>`).join("");

  const cards = [...track.children];
  let pages = 1;

  const step = () => {
    const w = cards[0].getBoundingClientRect().width;
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    const perView = Math.max(1, Math.floor((track.clientWidth + gap) / (w + gap) + 0.01));
    return { distance: perView * (w + gap), perView };
  };

  const maxScroll = () => track.scrollWidth - track.clientWidth;
  const goTo = (left) => track.scrollTo({ left, behavior: reduceMotion ? "auto" : "smooth" });

  const buildDots = () => {
    pages = Math.max(1, Math.ceil(cards.length / step().perView));
    dotsWrap.innerHTML = Array.from({ length: pages }, (_, i) =>
      `<button class="fc__dot" data-i="${i}" aria-label="Go to page ${i + 1}"></button>`).join("");
    updateDots();
  };

  const currentPage = () => {
    const m = maxScroll();
    return m <= 0 ? 0 : Math.round((track.scrollLeft / m) * (pages - 1));
  };

  function updateDots() {
    const p = currentPage();
    dotsWrap.querySelectorAll(".fc__dot").forEach((d, i) => d.classList.toggle("active", i === p));
  }

  const next = () => (track.scrollLeft >= maxScroll() - 4 ? goTo(0) : goTo(track.scrollLeft + step().distance));
  const prev = () => (track.scrollLeft <= 4 ? goTo(maxScroll()) : goTo(track.scrollLeft - step().distance));

  nextBtn.addEventListener("click", next);
  prevBtn.addEventListener("click", prev);
  dotsWrap.addEventListener("click", (e) => {
    const dot = e.target.closest(".fc__dot");
    if (dot) goTo(pages === 1 ? 0 : (Number(dot.dataset.i) / (pages - 1)) * maxScroll());
  });
  track.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") { e.preventDefault(); next(); }
    if (e.key === "ArrowLeft") { e.preventDefault(); prev(); }
  });

  let frame = null;
  track.addEventListener("scroll", () => {
    if (frame) return;
    frame = requestAnimationFrame(() => { frame = null; updateDots(); });
  }, { passive: true });

  window.addEventListener("resize", buildDots);
  buildDots();

  /* Reveal + autoplay (hover/focus/touch/hidden tab/off-screen pe pause) */
  let inView = false, hovering = false, focused = false, touching = false;
  new IntersectionObserver(([entry]) => {
    inView = entry.isIntersecting;
    if (inView) fc.classList.add("is-visible");
  }, { threshold: 0.2 }).observe(fc);

  fc.addEventListener("pointerenter", () => { hovering = true; });
  fc.addEventListener("pointerleave", () => { hovering = false; });
  fc.addEventListener("focusin", () => { focused = true; });
  fc.addEventListener("focusout", () => { focused = false; });
  track.addEventListener("touchstart", () => { touching = true; }, { passive: true });
  track.addEventListener("touchend", () => { setTimeout(() => { touching = false; }, 2500); }, { passive: true });

  if (!reduceMotion) {
    setInterval(() => {
      if (inView && !hovering && !focused && !touching && !document.hidden) next();
    }, 4500);
  }
}