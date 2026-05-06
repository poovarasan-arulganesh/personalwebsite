/* =====================================================
   MAIN.JS — Canvas background, cursor, interactions
   No need to edit unless you want to tweak effects
===================================================== */

/* ══════════════════════════════
   CANVAS — Calm ocean particle background
   Soft floating orbs + gentle connections
══════════════════════════════ */
(function () {
  const canvas = document.getElementById('bg-canvas');
  const ctx    = canvas.getContext('2d');
  let W, H;
  const mouse  = { x: -999, y: -999 };

  /* Dynamic color — updated by theme engine via window._canvasAccent */
  function getAccent() {
    return window._canvasAccent || '42,157,143';
  }

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  class Orb {
    constructor(init) {
      this.reset(init);
    }
    reset(init) {
      this.x     = Math.random() * W;
      this.y     = init ? Math.random() * H : H + 20;
      this.r     = Math.random() * 2 + 0.5;
      this.speedY = -(Math.random() * 0.25 + 0.05);
      this.speedX = (Math.random() - 0.5) * 0.2;
      this.alpha = Math.random() * 0.35 + 0.08;
      this.color = null; /* resolved at draw time */
    }
    draw() {
      const c = getAccent();
      ctx.save();
      ctx.globalAlpha = this.alpha;
      ctx.fillStyle   = `rgba(${c},1)`;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
    update() {
      /* Gentle mouse repel */
      const dx   = this.x - mouse.x;
      const dy   = this.y - mouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 100) {
        const force = (100 - dist) / 100;
        this.x += (dx / dist) * force * 1.5;
        this.y += (dy / dist) * force * 1.5;
      }
      this.x += this.speedX;
      this.y += this.speedY;
      if (this.y < -10) this.reset(false);
    }
  }

  const COUNT = 80;
  const orbs  = Array.from({ length: COUNT }, () => new Orb(true));

  function drawConnections() {
    for (let i = 0; i < orbs.length; i++) {
      for (let j = i + 1; j < orbs.length; j++) {
        const dx   = orbs[i].x - orbs[j].x;
        const dy   = orbs[i].y - orbs[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 110) {
          ctx.save();
          ctx.globalAlpha = (1 - dist / 110) * 0.06;
        ctx.strokeStyle = `rgba(${getAccent()},1)`;
          ctx.lineWidth   = 0.7;
          ctx.beginPath();
          ctx.moveTo(orbs[i].x, orbs[i].y);
          ctx.lineTo(orbs[j].x, orbs[j].y);
          ctx.stroke();
          ctx.restore();
        }
      }
    }
  }

  function loop() {
    ctx.clearRect(0, 0, W, H);
    drawConnections();
    orbs.forEach(o => { o.update(); o.draw(); });
    requestAnimationFrame(loop);
  }
  loop();

  document.addEventListener('mousemove', e => { mouse.x = e.clientX; mouse.y = e.clientY; });
  document.addEventListener('mouseleave', () => { mouse.x = -999; mouse.y = -999; });
})();


/* ══════════════════════════════
   CUSTOM CURSOR — smooth lagging ring
══════════════════════════════ */
(function () {
  const dot  = document.getElementById('cursor-dot');
  const ring = document.getElementById('cursor-ring');
  let rx = 0, ry = 0, mx = 0, my = 0;

  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    dot.style.left = mx + 'px';
    dot.style.top  = my + 'px';
  });

  (function tick() {
    rx += (mx - rx) * 0.10;
    ry += (my - ry) * 0.10;
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';
    requestAnimationFrame(tick);
  })();
})();


/* ══════════════════════════════
   SCROLL REVEAL
══════════════════════════════ */
(function () {
  const els = document.querySelectorAll('.reveal');
  const io  = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  els.forEach(el => io.observe(el));
})();


/* ══════════════════════════════
   HAMBURGER / MOBILE NAV
══════════════════════════════ */
(function () {
  const btn = document.getElementById('hamburger');
  const nav = document.getElementById('mobile-nav');

  btn.addEventListener('click', () => {
    btn.classList.toggle('open');
    nav.classList.toggle('open');
  });

  document.querySelectorAll('.nav-close-trigger').forEach(a => {
    a.addEventListener('click', () => {
      btn.classList.remove('open');
      nav.classList.remove('open');
    });
  });
})();
