/* =========================================================
   つばめ学習舎 共通JS（/assets/js/main.js）
   - ヘッダー：ハンバーガー開閉、外側クリック/Escで閉じる
   - サブメニュー：<details> をモバイル時は「1つだけ開く」
   - ヒーロー：背景画像の軽量スライド（hero1.png〜hero4.jpg）
   - アクセシビリティ：aria-expanded 更新
   ========================================================= */

(function () {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  function init() {
    initNav();
    initDetailsAccordion();
    initHeroSlider();
  }

  /* ------------------------------
     ヘッダー ナビゲーション制御
     ------------------------------ */
  function initNav() {
    const btn = document.querySelector(".nav-toggle");
    const nav = document.getElementById("global-nav");
    if (!btn || !nav) return;

    const MOBILE_QUERY = window.matchMedia("(max-width: 900px)");

    btn.addEventListener("click", () => {
      const opened = nav.classList.toggle("open");
      btn.setAttribute("aria-expanded", opened ? "true" : "false");
    });

    nav.addEventListener("click", (e) => {
      if (!(e.target instanceof Element)) return;
      if (MOBILE_QUERY.matches && e.target.closest("a")) {
        nav.classList.remove("open");
        btn.setAttribute("aria-expanded", "false");
      }
    });

    document.addEventListener("click", (e) => {
      if (!MOBILE_QUERY.matches) return;
      if (!(e.target instanceof Node)) return;
      const clickedOutside =
        !nav.contains(e.target) &&
        !btn.contains(e.target) &&
        nav.classList.contains("open");
      if (clickedOutside) {
        nav.classList.remove("open");
        btn.setAttribute("aria-expanded", "false");
      }
    });

    document.addEventListener("keydown", (e) => {
      if (!MOBILE_QUERY.matches) return;
      if (e.key === "Escape" && nav.classList.contains("open")) {
        nav.classList.remove("open");
        btn.setAttribute("aria-expanded", "false");
        btn.focus();
      }
    });

    window.addEventListener(
      "resize",
      debounce(() => {
        if (!MOBILE_QUERY.matches) {
          nav.classList.remove("open");
          btn.setAttribute("aria-expanded", "false");
        }
      }, 150)
    );
  }

  /* ---------------------------------------------
     <details> のアコーディオン：モバイル時は1つだけ開く
     --------------------------------------------- */
  function initDetailsAccordion() {
    const allDetails = document.querySelectorAll(".nav details");
    if (!allDetails.length) return;

    const MOBILE_QUERY = window.matchMedia("(max-width: 900px)");

    allDetails.forEach((d) => {
      d.addEventListener("toggle", () => {
        if (MOBILE_QUERY.matches && d.open) {
          allDetails.forEach((x) => {
            if (x !== d) x.open = false;
          });
        }
      });
    });
  }

  /* ---------------------------------------------
     ヒーロー背景の軽量スライド
     - hero1.png, hero2.png, hero3.jpg, hero4.jpg を順番に切替
     - CSS側で .hero[data-bg="n"]::before の背景を指定している
     --------------------------------------------- */
  function initHeroSlider() {
    const hero = document.querySelector(".hero");
    if (!hero) return;
    if (hero instanceof HTMLElement && hero.dataset.rotate === "off") return;

    const MAX = 4;
    let n = Number(hero.dataset.bg || "1");
    setBg(n);

    const INTERVAL_MS = 6000;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduceMotion.matches) return;

    let timer = setInterval(next, INTERVAL_MS);

    hero.addEventListener("mouseenter", pause);
    hero.addEventListener("mouseleave", resume);

    window.addEventListener("visibilitychange", () => {
      if (document.hidden) pause();
      else resume();
    });

    function next() {
      n = n % MAX + 1;
      setBg(n);
    }
    function setBg(i) {
      hero.setAttribute("data-bg", String(i));
    }
    function pause() {
      if (timer) {
        clearInterval(timer);
        timer = null;
      }
    }
    function resume() {
      if (!timer) timer = setInterval(next, INTERVAL_MS);
    }
  }

  /* ------------------------------
     ユーティリティ
     ------------------------------ */
  function debounce(fn, wait) {
    let t = null;
    return function (...args) {
      if (t) clearTimeout(t);
      t = setTimeout(() => fn.apply(this, args), wait);
    };
  }
})();

