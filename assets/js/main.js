/* ハンバーガーメニュー */
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.primary-nav');
if (toggle && nav){
  toggle.addEventListener('click', ()=>{
    const opened = nav.style.display === 'flex';
    nav.style.display = opened ? '' : 'flex';
    toggle.setAttribute('aria-expanded', opened ? 'false' : 'true');
  });
}

/* Hero スライドショー */
(function(){
  const tpl = document.getElementById('hero-slides');
  const holder = document.querySelector('.hero-bg');
  if (!tpl || !holder) return;

  const slides = [...tpl.content.querySelectorAll('[data-src]')].map(e=>e.getAttribute('data-src'));
  slides.forEach(src => { const img = new Image(); img.src = `assets/img/${src}`; });

  let i = 0;
  const apply = (src)=>{
    holder.style.opacity = 0;
    setTimeout(()=>{
      holder.style.backgroundImage = `url('assets/img/${src}')`;
      holder.style.opacity = 1;
    }, 180);
  };
  apply(slides[0]);
  setInterval(()=>{ i = (i+1) % slides.length; apply(slides[i]); }, 2000);
})();
