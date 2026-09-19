/* ui.js — работает всегда: без CDN, без GSAP. Нижняя панель звонка прячется,
   когда в зоне видимости основная кнопка телефона. Никаких анимаций. */
(function () {
  'use strict';
  try {
    var bar = document.querySelector('.callbar');
    var main = document.querySelector('.bigphone') || document.querySelector('a[href^="tel:"]');
    if (bar && main && 'IntersectionObserver' in window) {
      new IntersectionObserver(function (entries) {
        bar.style.visibility = entries[entries.length - 1].isIntersecting ? 'hidden' : 'visible';
      }, { threshold: 0.4 }).observe(main);
    }
  } catch (e) { /* панель остаётся видимой */ }
})();
