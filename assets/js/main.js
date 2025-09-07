
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
