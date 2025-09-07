
// Load partials
async function includePartials(){
  const slots = document.querySelectorAll('[data-include]');
  for(const slot of slots){
    const name = slot.getAttribute('data-include');
    const res = await fetch(`/swallow-site/partials/${name}.html`, {cache:'no-store'}).catch(()=>null);
    if(res && res.ok){ slot.innerHTML = await res.text(); }
  }
}

// Nav toggle
function initNav(){
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('.nav');
  if(!hamburger || !nav) return;
  const close = () => { hamburger.setAttribute('aria-expanded','false'); nav.classList.remove('open'); };
  hamburger.addEventListener('click', ()=>{
    const expanded = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('open');
  });
  document.addEventListener('click', (e)=>{
    if(!nav.contains(e.target) && !hamburger.contains(e.target)) close();
  });
  document.addEventListener('keydown', (e)=>{ if(e.key === 'Escape') close(); });
}

// Hero slideshow
function initHero(){
  const hero = document.querySelector('.hero');
  if(!hero) return;
  if(hero.dataset.rotate === 'off') return;
  if(window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  let bg = parseInt(hero.getAttribute('data-bg')||'1',10);
  setInterval(()=>{
    bg = bg % 4 + 1;
    hero.setAttribute('data-bg', String(bg));
  }, 3000);
}

// Accordion: mobile one-open rule
function initAccordions(){
  const mql = window.matchMedia('(max-width: 768px)');
  function bind(){
    const list = document.querySelectorAll('details[data-accordion]');
    list.forEach(d=>{
      d.addEventListener('toggle', ()=>{
        if(mql.matches && d.open){
          list.forEach(o=>{ if(o!==d) o.open = false; });
        }
      });
    });
  }
  bind();
  mql.addEventListener?.('change', bind);
}

document.addEventListener('DOMContentLoaded', async ()=>{
  await includePartials();
  initNav();
  initHero();
  initAccordions();
});

function initNav(){
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('.nav');
  if(!hamburger || !nav) return;

  const close = () => {
    hamburger.setAttribute('aria-expanded','false');
    nav.classList.remove('open');
    document.documentElement.style.overflow = '';
    document.body.style.overflow = '';
  };

  hamburger.addEventListener('click', ()=>{
    const expanded = hamburger.getAttribute('aria-expanded') === 'true';
    const willOpen = !expanded;
    hamburger.setAttribute('aria-expanded', String(willOpen));
    nav.classList.toggle('open');
    if (willOpen) {
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    }
  });

  // 外側クリックで閉じる
  document.addEventListener('click', (e)=>{
    if(!nav.contains(e.target) && !hamburger.contains(e.target)) close();
  });

  // Escで閉じる
  document.addEventListener('keydown', (e)=>{ if(e.key === 'Escape') close(); });

  // メニュー内のリンクで閉じる
  nav.querySelectorAll('a').forEach(a=>{
    a.addEventListener('click', close);
  });
}
