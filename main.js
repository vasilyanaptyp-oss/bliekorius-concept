/* main.js — грузится ТОЛЬКО после локальных vendor/gsap.min.js + ScrollTrigger.min.js (см. index.html).
   Правила: только transform/opacity/stroke-dashoffset; tl.set не в 0, а 0.001;
   states не переключать CSS-классами; reduced-motion — выход сразу (уже проверен в index.html,
   сюда при reduced-motion не попадаем, но подстрахуемся). */
(function () {
  'use strict';
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  gsap.registerPlugin(ScrollTrigger);

  // пример: появление секций
  // gsap.utils.toArray('section').forEach(function (s) {
  //   gsap.from(s, { autoAlpha: 0, y: 24, duration: 0.6, ease: 'power2.out',
  //     scrollTrigger: { trigger: s, start: 'top 85%' } });
  // });
})();
