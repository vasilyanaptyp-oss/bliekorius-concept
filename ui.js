/* ui.js — работает всегда: без CDN, без GSAP, до полной загрузки.
   Здесь: нижняя панель звонка (скрыть, когда основной номер виден),
   SMS-ссылки, переключение языка, копирование номера. Никаких анимаций. */
(function () {
  'use strict';

  // Прятать нижнюю панель, когда в зоне видимости основной номер (IntersectionObserver — прогресс.
  // Без IO панель просто остаётся: звонок доступен всегда.)
  try {
    var bar = document.querySelector('.callbar');
    var main = document.querySelector('a[href^="tel:"], .btn');
    if (bar && main && 'IntersectionObserver' in window) {
      new IntersectionObserver(function (entries) {
        bar.style.display = entries[entries.length - 1].isIntersecting ? 'none' : '';
      }, { threshold: 0.5 }).observe(main);
    }
  } catch (e) { /* панель остаётся видимой */ }
})();
