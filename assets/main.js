
function ready(fn){if(document.readyState!=='loading'){fn()}else{document.addEventListener('DOMContentLoaded',fn)}}
ready(function(){
  document.querySelectorAll('.ac-header').forEach(function(btn){
    btn.addEventListener('click',function(){
      const body=this.parentElement.querySelector('.ac-body');
      const open=body.style.display==='block';
      // close others in same accordion
      const acc=this.closest('.accordion');
      acc.querySelectorAll('.ac-body').forEach(b=>b.style.display='none');
      if(!open){ body.style.display='block'; }
    });
  });
});

// === Hero slideshow (crossfade) ===
(function(){
  const root = document.querySelector('.hero-slideshow');
  if(!root) return;

  const slides = Array.from(root.querySelectorAll('.hero-slide')).filter(Boolean);
  if(slides.length <= 1) return; // 1枚以下なら何もしない

  // 動きを減らす設定の尊重
  const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(reduce) return;

  let idx = 0;
  const INTERVAL = 5000; // 切替間隔(ms) ここを 3000〜7000 で好みに調整
  let timer = null;

  const show = (i) => {
    slides.forEach((el, n) => el.classList.toggle('is-active', n === i));
  };

  const start = () => {
    stop();
    timer = setInterval(() => {
      idx = (idx + 1) % slides.length;
      show(idx);
    }, INTERVAL);
  };

  const stop = () => timer && (clearInterval(timer), timer = null);

  // ホバーで一時停止（スマホでは無視される）
  root.addEventListener('mouseenter', stop);
  root.addEventListener('mouseleave', start);

  // 先頭を表示して開始
  show(idx);
  start();

  // 画像を事前に温める（任意：CSSの background-image 用プリロード）
  slides.forEach(s => {
    const m = /url\\(["']?(.*?)["']?\\)/.exec(s.style.backgroundImage);
    if(m && m[1]) { const img = new Image(); img.src = m[1]; }
  });
})();

// ================================
// ヘッダーのナビゲーション制御
// - PCでは横並び、モバイルではハンバーガーに切り替え
// - aria-expanded を更新してアクセシビリティにも対応
// ================================
const btn = document.querySelector('.nav-toggle');       // ハンバーガーボタン
const nav = document.getElementById('global-nav');       // ナビゲーション全体

btn?.addEventListener('click', () => {
  const opened = nav.classList.toggle('open');           // openクラスを切り替え
  btn.setAttribute('aria-expanded', opened ? 'true' : 'false');
});

// ================================
// サブメニュー（<details>）のアコーディオン制御
// - モバイル時のみ「1つだけ開く」動作にする
// - PCでは常にすべて展開可能
// ================================
document.querySelectorAll('.nav details').forEach(d => {
  d.addEventListener('toggle', () => {
    if (window.matchMedia('(max-width: 900px)').matches && d.open) {
      document.querySelectorAll('.nav details').forEach(x => {
        if (x !== d) x.open = false;   // 自分以外を閉じる
      });
    }
  });
});

