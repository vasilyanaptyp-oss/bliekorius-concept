# STATE — bliekorius

## Задание (19.09)
Концепт главной MB „Bliekorius“ (кровля и жесть, Plungė, с 2013). Репо bliekorius-concept, Pages, noindex.
Телефон +370 613 11174, почта mbbliekorius@gmail.com. Адрес не показывать — только Plungė.
[PATIKSLINTI] не выводить. Без стоковых фото — иллюстрации/фактуры/схемы. site-qa PASS + кадровый лист + скрины 390/1280 Артуру.

## Этапы
- [x] Материалы content/bliekorius/ прочитаны
- [x] Скиллы направления; DIRECTIONS.md (3 варианта; выбран «Прокатный стан» A)
- [x] Репо + Pages (new-site.py --concept --publish)
- [x] Шрифты Barlow Condensed + Barlow (glyphcheck OK, fontfetch latin+latin-ext, cmap OK)
- [x] GSAP в vendor/, фактуры zinc.png/zinc-light.png (seed 2013), og.png
- [x] index.html + main.js (сцена проката) + ui.js + favicon + JSON-LD (RoofingContractor, без streetAddress)
- [x] Скиллы: uicolor, tokens, copy, emil-design-eng, impeccable, landing (таблица в отчёте)
- [x] Коммит и пуш
- [x] site-qa PASS на живом адресе
- [x] Кадровый лист фишки
- [x] Реестр, память, lessons, отчёт Артуру

## Решения
- Пара шрифтов Barlow Condensed + Barlow (одна гарнитура, два формата) — не в реестре.
- Палитра: цинк-бумага #EDF0F1 / графит #1D2226 / оцинковка #A9B2B8 / тёмный профлист #262C31 / сурик #B3402A (антикор-краска). Контрасты ≥4.5 (проверено скриптом; текстовые метки steel-2→ink-2).
- Скелет hero: тёмная полоса профлиста с дождём + суриковая кромка сверху, светлый фасад с заголовком и статичным домиком; не как в реестре.
- Фишка: sticky-сцена 280svh «прокатный стан»: лист едет → 24 зуба выдавливаются → стан уходит → дом прорисовывается → 3 ряда профлиста укладываются → дождь скатывается. Без JS/reduced — финальное состояние (базовая разметка = финал, GSAP ставит стартовые). Только transform/opacity/dashoffset.
- [PATIKSLINTI] не выведено: lietaus nuvedimo sistemos (блок убран), pramoniniai objektai в skardinimas, «visoje Žemaitijoje» (строка доверия = запасной вариант «Dirbame jau nuo 2013-ųjų»), часы, адрес (только Plungė), garantija, число работников. «Senų stogų keitimas — nuimame seną dangą ir įdedame naują» оставлено как нейтральное описание процесса (пометка была про формулировку) — в отчёте.
- JSON-LD: без streetAddress (адрес не показываем), только Plungė.

## Текущий шаг
Готово, отчёт отправлен.
