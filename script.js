/* =========================================================
   Manvi Rathore — Portfolio interactions
   3D background (Three.js) · GSAP scroll · dynamic content
   ========================================================= */
'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isTouch = window.matchMedia('(hover: none)').matches;

  /* ---------- Dynamic content ---------- */
  const services = [
    { icon: '📱', t: 'Social Media Management', d: 'End-to-end handling of your pages with a consistent, aesthetic identity.' },
    { icon: '🎬', t: 'Reel Editing', d: 'Scroll-stopping, trend-focused edits that keep viewers watching.' },
    { icon: '💍', t: 'Wedding Content', d: 'Same-day cinematic wedding reels & candid story-driven moments.' },
    { icon: '🎵', t: 'BTS for Music Videos', d: 'Behind-the-scenes coverage that builds hype around the release.' },
    { icon: '✨', t: 'Brand Shoots', d: 'Curated visuals that make products and spaces look irresistible.' },
    { icon: '📸', t: 'Event Coverage', d: 'Live shoots & recap reels that capture the full energy of the day.' },
    { icon: '🧭', t: 'Content Strategy', d: 'Planned, trend-aware content calendars built to actually engage.' },
    { icon: '📲', t: 'Instagram Management', d: 'Growth-focused posting, stories and engagement done for you.' },
    { icon: '🛍️', t: 'Product Reels', d: 'Punchy product features designed to convert browsers into buyers.' },
    { icon: '🎯', t: 'Promotional Videos', d: 'Polished promos for launches, offers and announcements.' },
    { icon: '🌟', t: 'PR Shoots', d: 'Press-ready visuals and coverage for collabs and features.' },
    { icon: '🎥', t: 'Commercial Videos', d: 'Clean, on-brand commercial content for cafés, resorts & more.' },
  ];

  const skills = [
    { name: 'CapCut', val: 95 },
    { name: 'Canva', val: 92 },
    { name: 'Reel Editing', val: 94 },
    { name: 'Creative Storytelling', val: 90 },
    { name: 'Content Planning', val: 88 },
    { name: 'Adobe Premiere Pro', val: 60, note: 'Learning' },
  ];

  const niche = ['Events', 'Music Videos', 'Fashion', 'Beauty', 'Lifestyle', 'Weddings', 'Birthdays & Engagements', 'Cafés & Resorts'];

  const collabs = [
    { n: 'Rajgarh Resort', t: 'Resort' },
    { n: 'HeLi Jaipur', t: 'Lifestyle' },
    { n: 'Surya Resort', t: 'Resort' },
    { n: 'Global International School', t: 'Education' },
    { n: 'Sainik School', t: 'Education' },
    { n: 'Random Rathore', t: 'Creator' },
  ];

  const achievements = [
    { i: '📈', t: 'Managed social media pages end-to-end' },
    { i: '🎥', t: 'Covered live events & on-site shoots' },
    { i: '✂️', t: 'Engagement-focused, trend-led editing' },
    { i: '💬', t: 'Helped improve audience engagement' },
    { i: '🌟', t: 'Delivered PR shoots & promotional content' },
  ];

  const showcase = [
    { cls: 'shot--a', video: 'assets/reel-1.mp4', poster: 'assets/reel-1-poster.jpg', label: 'Brand Reel', sub: 'Shoot · edit · export' },
    { cls: 'shot--b', video: 'assets/reel-2.mp4', poster: 'assets/reel-2-poster.jpg', label: 'Content Edit', sub: 'Promotional video' },
    { cls: 'shot--c', img: 'assets/manvi-portrait.jpg', label: 'Lifestyle & Fashion', sub: 'Creative shoot' },
    { cls: 'shot--d', img: 'assets/work-editing.png', label: 'Reel Editing', sub: 'CapCut · 2K/4K export' },
    { cls: 'shot--e', icon: '💍', label: 'Wedding', sub: 'Content creation' },
    { cls: 'shot--f', icon: '🎵', label: 'Music Video', sub: 'BTS coverage' },
    { cls: 'shot--g', icon: '☕', label: 'Cafés & Resorts', sub: 'Brand shoots' },
  ];

  const el = (tag, cls, html) => {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  };

  // Services
  const sg = document.getElementById('servicesGrid');
  services.forEach((s, i) => {
    const c = el('article', 'svc reveal', `
      <span class="svc__num">0${i + 1}</span>
      <div class="svc__icon">${s.icon}</div>
      <h4>${s.t}</h4>
      <p>${s.d}</p>`);
    c.setAttribute('data-cursor', '');
    sg.appendChild(c);
  });

  // Skills
  const sb = document.getElementById('skillsBars');
  skills.forEach(s => {
    const li = el('li', 'reveal', `
      <b><span>${s.name}${s.note ? ` <em style="font-style:italic;color:var(--gold);font-weight:600">· ${s.note}</em>` : ''}</span><span>${s.val}%</span></b>
      <div class="track"><div class="fill" data-fill="${s.val}"></div></div>`);
    sb.appendChild(li);
  });

  // Niche chips
  const nc = document.getElementById('nicheChips');
  niche.forEach(n => {
    const c = el('span', 'chip reveal', n);
    c.setAttribute('data-cursor', '');
    nc.appendChild(c);
  });

  // Collabs
  const wl = document.getElementById('workLogos');
  collabs.forEach(c => {
    wl.appendChild(el('div', 'logo reveal', `
      <span class="dot">${c.n.charAt(0)}</span>
      <div><b>${c.n}</b><span>${c.t}</span></div>`));
  });

  // Achievements
  const ag = document.getElementById('achievementsGrid');
  achievements.forEach(a => {
    ag.appendChild(el('div', 'ach reveal', `<i>${a.i}</i><p>${a.t}</p>`));
  });

  // Showcase
  const shg = document.getElementById('showcaseGrid');
  showcase.forEach(s => {
    let media;
    if (s.video) {
      media = `<video class="shot__video" src="${s.video}" poster="${s.poster}" muted loop playsinline preload="none" aria-label="${s.label}"></video>
               <span class="shot__badge-reel">▶ Reel</span>
               <span class="shot__play" aria-hidden="true">🔊</span>`;
    } else if (s.img) {
      media = `<img src="${s.img}" alt="${s.label}" loading="lazy" decoding="async" width="800" height="600" />`;
    } else {
      media = `<div class="shot__icon">${s.icon}</div>`;
    }
    const c = el('article', `shot ${s.cls}${s.video ? ' shot--video' : ''} reveal`,
      media + `<div class="shot__label"><b>${s.label}</b><span>${s.sub}</span></div>`);
    c.setAttribute('data-cursor', '');
    shg.appendChild(c);
  });

  // Autoplay videos only while visible (saves data + battery); tap to toggle on touch
  const vids = [...shg.querySelectorAll('.shot__video')];
  if (vids.length) {
    if ('IntersectionObserver' in window && !reduceMotion) {
      const io = new IntersectionObserver(entries => {
        entries.forEach(en => {
          const v = en.target;
          if (en.isIntersecting) { v.play().catch(() => {}); }
          else { v.pause(); }
        });
      }, { threshold: 0.5 });
      vids.forEach(v => io.observe(v));
    }
    // Tap/click a video tile to play with sound
    vids.forEach(v => {
      v.closest('.shot').addEventListener('click', () => {
        if (v.muted) { v.muted = false; v.closest('.shot').classList.add('shot--playing'); v.play().catch(() => {}); }
        else { v.muted = true; v.closest('.shot').classList.remove('shot--playing'); }
      });
    });
  }
  // Placeholder tile inviting new work
  const ph = el('article', 'shot shot--placeholder reveal', `<div class="shot__icon">＋</div><div class="shot__label"><b>Your project</b><span>Let's create together</span></div>`);
  ph.setAttribute('data-cursor', '');
  shg.appendChild(ph);

  document.getElementById('year').textContent = new Date().getFullYear();

  /* ---------- Loader ---------- */
  const loader = document.getElementById('loader');
  const bar = loader.querySelector('.loader__bar i');
  let heroStarted = false;
  const finishLoad = () => {
    if (heroStarted) return;
    heroStarted = true;
    loader.classList.add('hide');
    startHero();
  };
  let prog = 0;
  const tick = setInterval(() => {
    prog = Math.min(100, prog + Math.random() * 18);
    bar.style.width = prog + '%';
    if (prog >= 100) {
      clearInterval(tick);
      setTimeout(finishLoad, 350);
    }
  }, 130);
  // Safety net: never let the loader hang (e.g. slow timers)
  setTimeout(() => { clearInterval(tick); bar.style.width = '100%'; finishLoad(); }, 4000);

  /* ---------- Navbar ---------- */
  const nav = document.getElementById('nav');
  const navLinks = document.getElementById('navLinks');
  const navToggle = document.getElementById('navToggle');

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });

  const closeMenu = () => {
    navLinks.classList.remove('open');
    navToggle.classList.remove('active');
    document.body.classList.remove('nav-open');
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.setAttribute('aria-label', 'Open menu');
  };
  navToggle.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    navToggle.classList.toggle('active', open);
    document.body.classList.toggle('nav-open', open);
    navToggle.setAttribute('aria-expanded', String(open));
    navToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  });
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
  // Close menu on Escape
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && navLinks.classList.contains('open')) closeMenu();
  });

  /* ---------- Scroll progress ---------- */
  const sp = document.getElementById('scrollProgress');
  window.addEventListener('scroll', () => {
    const h = document.documentElement;
    const max = h.scrollHeight - h.clientHeight;
    sp.style.width = (max > 0 ? (h.scrollTop / max) * 100 : 0) + '%';
  }, { passive: true });

  /* ---------- Custom cursor ---------- */
  if (!isTouch) {
    const cursor = document.getElementById('cursor');
    const dot = document.getElementById('cursorDot');
    let cx = 0, cy = 0, tx = 0, ty = 0;
    window.addEventListener('mousemove', e => {
      tx = e.clientX; ty = e.clientY;
      dot.style.transform = `translate(${tx}px,${ty}px) translate(-50%,-50%)`;
    });
    const loop = () => {
      cx += (tx - cx) * 0.18; cy += (ty - cy) * 0.18;
      cursor.style.transform = `translate(${cx}px,${cy}px) translate(-50%,-50%)`;
      requestAnimationFrame(loop);
    };
    loop();
    document.addEventListener('mouseover', e => {
      if (e.target.closest('[data-cursor]')) cursor.classList.add('grow');
    });
    document.addEventListener('mouseout', e => {
      if (e.target.closest('[data-cursor]')) cursor.classList.remove('grow');
    });
  }

  /* ---------- Portrait 3D tilt ---------- */
  const portrait = document.getElementById('tiltPortrait');
  if (portrait && !isTouch) {
    const hero = document.querySelector('.hero');
    hero.addEventListener('mousemove', e => {
      const r = hero.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      portrait.style.transform = `rotateY(${px * 16}deg) rotateX(${-py * 16}deg)`;
    });
    hero.addEventListener('mouseleave', () => {
      portrait.style.transform = 'rotateY(0) rotateX(0)';
    });
  }

  /* ---------- GSAP reveal + counters ---------- */
  function startHero() {
    if (window.gsap) {
      gsap.to('.hero__title .line > span', {
        y: 0, duration: 1.1, stagger: 0.12, ease: 'power4.out', delay: 0.1
      });
      gsap.to('.hero .reveal', {
        opacity: 1, y: 0, duration: 1, stagger: 0.1, ease: 'power3.out', delay: 0.35
      });
    } else {
      document.querySelectorAll('.hero__title .line > span').forEach(s => s.style.transform = 'translateY(0)');
      document.querySelectorAll('.hero .reveal').forEach(r => { r.style.opacity = 1; r.style.transform = 'none'; });
    }
    runCounters(document.querySelector('.hero'));
  }

  if (window.gsap && window.ScrollTrigger && !reduceMotion) {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray('.section .reveal, .marquee').forEach(node => {
      if (node.closest('.hero')) return;
      gsap.fromTo(node, { opacity: 0, y: 36 }, {
        opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: node, start: 'top 88%' }
      });
    });

    // Animate skill bars on enter
    ScrollTrigger.create({
      trigger: '#skillsBars', start: 'top 80%', once: true,
      onEnter: () => document.querySelectorAll('.fill').forEach(f => f.style.width = f.dataset.fill + '%')
    });

    // Counters per section
    document.querySelectorAll('[data-count]').forEach(c => {
      ScrollTrigger.create({ trigger: c, start: 'top 90%', once: true, onEnter: () => animateCount(c) });
    });
  } else {
    // Fallback: reveal everything
    document.querySelectorAll('.reveal').forEach(r => { r.style.opacity = 1; r.style.transform = 'none'; });
    document.querySelectorAll('.fill').forEach(f => f.style.width = f.dataset.fill + '%');
  }

  function runCounters(scope) {
    (scope || document).querySelectorAll('[data-count]').forEach(animateCount);
  }
  function animateCount(node) {
    if (node.dataset.done) return;
    node.dataset.done = '1';
    const target = +node.dataset.count;
    const suffix = node.dataset.suffix || '';
    const dur = 1400; const t0 = performance.now();
    const step = now => {
      const p = Math.min(1, (now - t0) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      node.textContent = Math.round(target * eased) + suffix;
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }

  /* ---------- Three.js 3D background ---------- */
  initThree(reduceMotion);
});

function initThree(reduceMotion) {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas || typeof THREE === 'undefined') return;

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100);
  camera.position.z = 14;

  const group = new THREE.Group();
  scene.add(group);

  // Floating particle field
  const COUNT = window.innerWidth < 640 ? 120 : 240;
  const geo = new THREE.BufferGeometry();
  const pos = new Float32Array(COUNT * 3);
  for (let i = 0; i < COUNT; i++) {
    pos[i * 3] = (Math.random() - 0.5) * 36;
    pos[i * 3 + 1] = (Math.random() - 0.5) * 24;
    pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
  }
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  const dots = new THREE.Points(geo, new THREE.PointsMaterial({
    color: 0x2f5c43, size: 0.12, transparent: true, opacity: 0.55, sizeAttenuation: true
  }));
  group.add(dots);

  // Elegant wireframe orbs
  const orbs = [];
  const palette = [0x2f5c43, 0xc9a24b, 0x8fae93];
  const mk = (r, detail, color, x, y, z, scale) => {
    const m = new THREE.Mesh(
      new THREE.IcosahedronGeometry(r, detail),
      new THREE.MeshBasicMaterial({ color, wireframe: true, transparent: true, opacity: 0.32 })
    );
    m.position.set(x, y, z);
    m.userData = { sx: 0.0007 * scale, sy: 0.001 * scale };
    group.add(m); orbs.push(m);
  };
  mk(3.2, 1, palette[0], -9, 3, -2, 1);
  mk(2.1, 0, palette[1], 9, -3, 1, 1.3);
  mk(1.5, 1, palette[2], 6, 5, -4, 0.8);
  mk(2.6, 0, palette[0], -7, -5, -3, 0.9);

  let mx = 0, my = 0, tmx = 0, tmy = 0;
  if (!('ontouchstart' in window)) {
    window.addEventListener('mousemove', e => {
      tmx = (e.clientX / window.innerWidth - 0.5);
      tmy = (e.clientY / window.innerHeight - 0.5);
    });
  }

  let scrollY = 0;
  window.addEventListener('scroll', () => { scrollY = window.scrollY; }, { passive: true });

  let frame = 0;
  const clock = new THREE.Clock();
  const render = () => {
    frame = requestAnimationFrame(render);
    const t = clock.getElapsedTime();

    mx += (tmx - mx) * 0.05;
    my += (tmy - my) * 0.05;

    group.rotation.y = mx * 0.4 + t * 0.02;
    group.rotation.x = my * 0.3;
    group.position.y = scrollY * 0.0012;

    dots.rotation.y = t * 0.03;
    orbs.forEach(o => { o.rotation.x += o.userData.sx; o.rotation.y += o.userData.sy; });

    camera.position.x += (mx * 2 - camera.position.x) * 0.04;
    camera.position.y += (-my * 2 - camera.position.y) * 0.04;
    camera.lookAt(scene.position);

    renderer.render(scene, camera);
  };

  if (reduceMotion) {
    renderer.render(scene, camera); // static frame
  } else {
    render();
  }

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  // Pause when tab hidden (saves battery)
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) { cancelAnimationFrame(frame); }
    else if (!reduceMotion) { render(); }
  });
}
