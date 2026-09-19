/* main.js — сцена «прокатный стан» (только при GSAP; без него и при reduced-motion страница
   остаётся в финальном состоянии: дом с профлистом и каплями). Только transform/opacity/rotate.
   Ловушки соблюдены: стартовые состояния ставятся программно (базовая разметка = финал),
   CSS-переходы выключены классом html.gs, scrub с задержкой. */
(function () {
  'use strict';
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var stand = document.querySelector('.stand');
  var house = document.querySelector('.house');
  if (!stand || !house || !window.ScrollTrigger) return;

  var teeth = gsap.utils.toArray('.tooth');
  var spokes = gsap.utils.toArray('.spoke');
  var drops = gsap.utils.toArray('.drop');
  var wall = document.querySelector('.wall');
  var battens = document.querySelector('.battens');
  var rows = gsap.utils.toArray('.roof > g');
  var phases = gsap.utils.toArray('.phase');

  /* стартовые состояния (базовая разметка = финал, GSAP отводит в начало) */
  gsap.set(stand, { autoAlpha: 1 });
  gsap.set(teeth, { scaleY: 0.1, transformOrigin: '50% 100%' });
  gsap.set('.house .roof', { autoAlpha: 0 });
  gsap.set(wall, { strokeDasharray: 1400, strokeDashoffset: 1400 });
  gsap.set(battens, { autoAlpha: 0, y: -14 });
  gsap.set(rows[0], { y: -120 });
  gsap.set(rows[1], { y: 60 });
  gsap.set(rows[2], { y: 90 });
  drops.forEach(function (d) { gsap.set(d, { autoAlpha: 0, y: -46 }); });
  gsap.set('.metalsheet', { x: -300 });

  var tl = gsap.timeline({
    defaults: { ease: 'none' },
    scrollTrigger: {
      trigger: '.stage-track',
      start: 'top top',
      end: 'bottom bottom',
      scrub: 0.6,
      onUpdate: function (self) {
        var idx = Math.min(3, Math.floor(self.progress * 4));
        phases.forEach(function (p, i) { p.classList.toggle('on', i === idx); });
      }
    }
  });

  /* 01–02: лист входит в стан и прокатывается */
  tl.to('.metalsheet', { x: 0, duration: 0.3 }, 0.02);
  tl.to(spokes, { rotation: 1080, svgOrigin: function (i) { return [300 + i * 110, 272].join(' '); }, duration: 0.45 }, 0.02);
  tl.to(teeth, { scaleY: 1, duration: 0.05, stagger: 0.014, ease: 'power2.out' }, 0.16);

  /* 02→03: стан уходит, дом прорисовывается */
  tl.to(stand, { autoAlpha: 0, y: 36, duration: 0.1 }, 0.46);
  tl.to(wall, { strokeDashoffset: 0, duration: 0.14, ease: 'power1.inOut' }, 0.48);
  tl.to(battens, { autoAlpha: 1, y: 0, duration: 0.08 }, 0.58);

  /* 03: ряды профлиста укладываются */
  tl.to('.house .roof', { autoAlpha: 1, duration: 0.04 }, 0.6);
  tl.to(rows[0], { y: 0, duration: 0.12, ease: 'power2.out' }, 0.62);
  tl.to(rows[1], { y: 0, duration: 0.1, ease: 'power2.out' }, 0.68);
  tl.to(rows[2], { y: 0, duration: 0.1, ease: 'power2.out' }, 0.73);

  /* 04: дождь по готовому скату — волна скатывается, новая занимает место */
  drops.forEach(function (d, i) {
    var at = 0.8 + i * 0.045;
    tl.fromTo(d, { autoAlpha: 0, y: -46, x: 0 }, { autoAlpha: 1, y: 0, duration: 0.05 }, at);
    tl.to(d, { x: -46, y: 52, autoAlpha: 0, duration: 0.09, ease: 'power1.in' }, at + 0.05);
    tl.fromTo(d, { autoAlpha: 0, y: -46, x: 0 }, { autoAlpha: 1, y: 0, duration: 0.05 }, at + 0.14);
  });

  /* появление секций: тихий вход */
  gsap.utils.toArray('.sec .sheet-card, .spec-row, .steps li, .rivets li').forEach(function (el, i) {
    gsap.from(el, {
      autoAlpha: 0, y: 18, duration: 0.5, ease: 'power2.out', delay: (i % 4) * 0.06,
      scrollTrigger: { trigger: el, start: 'top 88%' }
    });
  });
})();
