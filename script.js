// Minimal JS: mobile nav toggle, simple carousel auto-scroll, contact form stub
document.addEventListener('DOMContentLoaded', function(){
  const navToggle = document.getElementById('nav-toggle');
  const siteNav = document.getElementById('site-nav');
  navToggle && navToggle.addEventListener('click', ()=> {
    const expanded = siteNav.style.display === 'flex';
    siteNav.style.display = expanded ? 'none' : 'flex';
  });

  // Simple carousel: translate track continuously
  const track = document.querySelector('.carousel-track');
  if(track){
    let speed = 0.5; // px per tick
    let pos = 0;
    // Clone nodes to make loop seamless
    const items = Array.from(track.children);
    items.forEach(node => track.appendChild(node.cloneNode(true)));

    let rafId;
    function tick(){
      pos -= speed;
      if(Math.abs(pos) >= track.scrollWidth/2) pos = 0; // reset when half duplicated
      track.style.transform = `translateX(${pos}px)`;
      rafId = requestAnimationFrame(tick);
    }
    // start
    tick();

    // pause on hover
    track.addEventListener('mouseenter', ()=> cancelAnimationFrame(rafId));
    track.addEventListener('mouseleave', ()=> { rafId = requestAnimationFrame(tick); });
  }

  // Contact form stub: prevent real submission and show a friendly message
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  if(form){
    form.addEventListener('submit', (e)=>{
      e.preventDefault();
      // Simulate sending
      status.textContent = 'Enviando mensaje...';
      setTimeout(()=>{
        status.textContent = 'Gracias — tu mensaje fue simulado (sin envío real).';
        form.reset();
      }, 900);
    });
  }

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      const href = this.getAttribute('href');
      if(href.length>1){
        e.preventDefault();
        const el = document.querySelector(href);
        if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
      }
    });
  });
});
