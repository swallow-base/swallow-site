/* モバイルのハンバーガー挙動 */
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.primary-nav');
if (toggle && nav){
  toggle.addEventListener('click', ()=>{
    const opened = nav.style.display === 'flex';
    nav.style.display = opened ? '' : 'flex';
    toggle.setAttribute('aria-expanded', opened ? 'false' : 'true');
  });
}

/* Hero スライドショー（2秒間隔） */
(function(){
  const tpl = document.getElementById('hero-slides');
  const holder = document.querySelector('.hero-bg');
  if (!tpl || !holder) return;

  const slides = [...tpl.content.querySelectorAll('[data-src]')].map(e=>e.getAttribute('data-src'));
  if (slides.length === 0) return;

  // 画像先読み
  slides.forEach(src => { const img = new Image(); img.src = `/assets/img/${src}`; });

  let i = 0;
  const apply = (src)=>{
    holder.style.opacity = 0;
    setTimeout(()=>{
      holder.style.backgroundImage = `url('/assets/img/${src}')`;
      holder.style.opacity = 1;
    }, 180);
  };

  // 初期
  apply(slides[0]);

  // 2秒ごと
  setInterval(()=>{
    i = (i+1) % slides.length;
    apply(slides[i]);
  }, 2000);
})();
