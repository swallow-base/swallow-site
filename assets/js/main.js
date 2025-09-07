// パーシャル読込
async function includePartials() {
  const slots = document.querySelectorAll('[data-include]');
  for (const slot of slots) {
    const name = slot.getAttribute('data-include');
    try {
      const res = await fetch(`/swallow-site/partials/${name}.html`, { cache: 'no-store' });
      if (res.ok) {
        slot.innerHTML = await res.text();
      }
    } catch (e) { /* silent */ }
  }
}

// ナビの挙動
function initNav() {
  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector(".nav");
  if (hamburger && nav) {
    const close = () => {
      hamburger.setAttribute("aria-expanded", "false");
      nav.classList.remove("open");
    };
    hamburger.addEventListener("click", () => {
      const expanded = hamburger.getAttribute("aria-expanded") === "true";
      hamburger.setAttribute("aria-expanded", String(!expanded));
      nav.classList.toggle("open");
    });
    document.addEventListener("click", (e) => {
      if (!nav.contains(e.target) && !hamburger.contains(e.target)) close();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") close();
    });
  }
}

// ヒーロースライド
function initHero() {
  const hero = document.querySelector(".hero");
  if (hero && hero.dataset.rotate !== "off" && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    let bg = parseInt(hero.getAttribute('data-bg') || '1', 10);
    setInterval(() => {
      bg = bg % 4 + 1;
      hero.setAttribute("data-bg", String(bg));
    }, 6000);
  }
}

// アコーディオン（<details>）: モバイル時は1つだけ開く
function initAccordions() {
  const mql = window.matchMedia("(max-width: 768px)");
  function bind() {
    const detailsList = document.querySelectorAll("details[data-accordion]");
    detailsList.forEach(d => {
      d.addEventListener("toggle", () => {
        if (mql.matches && d.open) {
          detailsList.forEach(o => { if (o !== d) o.open = false; });
        }
      });
    });
  }
  bind();
  mql.addEventListener?.("change", bind);
}

document.addEventListener("DOMContentLoaded", async () => {
  await includePartials();
  initNav();
  initHero();
  initAccordions();
});
