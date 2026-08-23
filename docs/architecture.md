# Архитектура UI: Loandepot

Документ описывает **иерархию секций**, целевую файловую структуру и **процесс работы** над каждой секцией. Поведение продукта — в `docs/Task.md`. Стек: React + Vite, React Router, Redux Toolkit Query, React Hook Form + Zod, Tailwind CSS v4.

---

## 1. Роли

| Роль | Зона ответственности |
| --- | --- |
| **ИИ** | Чистый **статический JSX-каркас** и вёрстка Tailwind по скриншотам/Figma. Тексты, картинки, слайды, поля форм — **захардкожены**. Без пропсов, без обработчиков событий, без `useState` / `useReducer` / эффектов / fetch / роутинга. |
| **Разработчик** | Вся архитектура: декомпозиция каркаса на компоненты, **Component API** (сигнатуры props), `src/pages`, `src/store`, RTK Query, Zod + RHF, React Router, обработчики, слайдеры, модалки, таймеры, скачивание PDF. |

ИИ не проектирует props и не «подготавливает» колбэки. Разработчик самостоятельно рефакторит статический markup в параметризованные компоненты.

---

## 2. Стилизация (обязательно на всех шагах)

Цвета — **только** токены из `@theme` в `src/index.css`. Запрещены дефолтные шкалы Tailwind (`purple-600`, `green-400`) и сырой HEX в JSX.

| Токен | HEX |
| --- | --- |
| `bg-brand-purple-dark`, `text-brand-purple-dark` | `#301A37` |
| `bg-brand-purple`, `text-brand-purple`, `border-brand-purple` | `#6D53AF` |
| `bg-brand-green`, `text-brand-green`, `border-brand-green` | `#9EC73D` |
| `bg-brand-green-alt` | `#A9CA5B` |
| `bg-brand-gray`, `text-brand-gray`, `border-brand-gray` | `#979797` |
| `bg-brand-gray-light`, `border-brand-gray-light` | `#E2E2E2` |
| `bg-brand-light`, `text-brand-light` | `#FAFAFA` |
| `bg-black`, `text-white` | только когда нужно по макету |

Макет:

- Mobile-first.
- Десктоп: секция занимает `h-screen` / `100vh`, контент умещается на одном экране.
- Мобильный макет не задан: блоки столбиком, без постраничного перелистывания.
- Oxlint без предупреждений.

---

## 3. Целевая структура каталогов

После рефакторинга код живёт так (имена файлов — ориентир; разработчик может укрупнять или дробить).

```
src/
  components/
    ui/                    # Button, Badge, поля, Modal, VideoPlayer…
    layout/                # AppShell, SideNav, BookingBar, PageSection, VideoModal
    home/                  # секции главной и их куски после декомпозиции
    modules/               # секция модуля, бейджи, видео, PDF, нижняя навигация
  pages/                   # HomePage, ModulesPage — сборка, роут, данные, события
  store/                   # RTK store + API slices
  schemas/                 # Zod (по необходимости)
  hooks/                   # слайдеры, видео-гейт, таймер Explore (по необходимости)
  layouts/                 # полноэкранный пейджинг десктопа (по необходимости)
```

На **шаге 1** ИИ кладёт каркас секции одним (или несколькими) статическими файлами в соответствующую папку, например `src/components/home/HeroSection.jsx` — монолитный JSX без API. Дробление на `HeroSlide.jsx` и т.д. делает разработчик на шаге 2.

Страницы и store ИИ не заполняет логикой. `src/pages` и `src/store` — зона разработчика.

Иконки: `src/assets/icons` (или inline SVG в каркасе). Не stateful-компоненты.

---

## 4. Карта страниц и секций

| Маршрут (подключает разработчик) | Секции |
| --- | --- |
| `/` | Hero, Difference, Explore, Join, How are you, Schedule |
| `/modules` (опционально `/:id`) | N полноэкранных секций модулей = числу слайдов Hero |

Один набор модулей в БД: слайды Hero и секции `/modules` — одни и те же записи.

**Каркас приложения (общий для обеих страниц):** левый сайдбар (логотип, стрелка «дальше»), правый верх — CTA бронирования и иконка 9 точек (часть той же кнопки). На шаге 1 это статическая вёрстка; клики и пейджинг — шаг 3.

---

## 5. Алгоритм работы над каждой секцией

Работа идёт **по одной секции** (или по общему layout, если он ещё не готов). Не смешивать шаги в одном проходе ИИ.

### Шаг 1. Генерация каркаса (ИИ)

Цель: визуально близкий к скриншоту **неживой** markup.

ИИ:

1. Смотрит скриншот / Figma и `docs/Task.md` (только layout и копирайт).
2. Пишет JSX: сетка, отступы, типографика, бренд-токены, `h-screen` на десктопе.
3. Вшивает плейсхолдер-контент: заголовки, абзацы, теги, `src` картинок/видео, подписи кнопок, несколько слайдов/карточек/полей формы прямо в разметке.
4. Интерактив рисует как **вид**, не как поведение: активный слайд — классами; «Click to show» — уже открытая или закрытая карточка как на кадре; форма — обычные `<input>` без `value`/`onChange` из стейта (допустимы нативные атрибуты `placeholder`, `type`).
5. Кнопки — `<button type="button">` или `<a href="#">` без `onClick` / `onSubmit`.
6. Не вводит props, не выносит данные в массивы «для будущего map», не добавляет комментарии «TODO: connect Redux».

Чеклист шага 1:

- [ ] Нет `useState`, `useReducer`, `useEffect`, `useQuery`, `navigate`.
- [ ] Нет пропсов у секции (кроме того, что React требует для корня файла — компонент без аргументов: `export function HeroSection() { ... }`).
- [ ] Нет `onClick` / `onChange` / `onSubmit` / `onClose`.
- [ ] Цвета только `brand-*`, black, white.
- [ ] Секция читается как статичная страница, а не как виджет с API.

### Шаг 2. Декомпозиция и проектирование props (разработчик)

Цель: Component API и мелкие компоненты. Логику ещё не подключать (или подключать заглушки, но контракт уже свой).

Разработчик:

1. Режет монолит на файлы в `src/components/ui`, `layout`, `home`, `modules` по дереву из §8.
2. Выносит повторяющиеся куски (кнопка, бейдж, слайд, поле).
3. Проектирует **сигнатуры props**: данные, флаги вида (`isActive`, `phase`), колбэки (`onNext`, `onReveal`). Ориентир — §8 и §9; итоговый API — решение разработчика.
4. Заменяет хардкод на пропсы; временные моки можно оставить в `pages/` или story-обёртке, не в «умных» компонентах.
5. Сохраняет вёрстку и токены; не меняет визуал без нужды.

Результат шага 2: глупые компоненты с понятным API, ещё без RTK/RHF (или с прокинутыми моками с страницы).

### Шаг 3. Связывание с логикой (разработчик)

Цель: живая секция по ТЗ.

Разработчик в `src/pages`, `src/store`, хуках:

1. Роуты, пейджинг секций (логотип → первая, стрелка → следующая), десктоп 100vh vs мобильный стек.
2. RTK Query: модули, теги, URL видео и PDF из БД; Hero и `/modules` — один источник.
3. Слайдеры, таймер Explore, reveal Difference, модалка видео, гейт второго видео, скачивание PDF.
4. Join / Schedule: Zod + RHF; дата/время — готовый пикер в слоте поля.
5. Букинг-кнопки — заглушки до внешнего сервиса.
6. Анимации интерактива (триггеры — состояние в контейнере, классы — в UI).

Повторить шаги 1→2→3 для следующей секции. Layout (шелл) предпочтительно закрыть тем же циклом **до** внутренних секций, чтобы секции вставлялись в готовую рамку.

---

## 6. Что рисует каркас (шаг 1) vs что делает логика (шаг 3)

Краткая памятка по ТЗ: на шаге 1 видно конечный (или один выбранный) кадр макета; на шаге 3 появляется поведение.

| Место | Каркас (ИИ) | Логика (разработчик) |
| --- | --- | --- |
| Сайдбар | Логотип, стрелка | Первая секция / следующая секция |
| 9 точек + CTA | Текст и иконка | No-op → букинг |
| Hero | Несколько слайдов, у «активного» описание и стрелка, плюс | Слайдер; стрелка → `/modules` с номером; плюс → первый модуль |
| Difference | Карточки «Click to show» и/или состояние с видео | Reveal; когда все открыты — заголовок, описание, кнопка смотреть, меньший видео-блок |
| Explore | Стопка слайдов, активный с текстом, кнопка вперёд | Автопереключение, таймер на «вперёд», уход/возврат левого слайда |
| Join / Schedule | Поля и кнопка отправки, пример городов, слот даты | Валидация, RHF, пикер |
| How are you | Слайды, средний крупнее | Слайдер с увеличенным активным |
| Модуль | Бейджи, два видео, PDF, нижняя навигация, CTA | Теги и файлы с API; второе видео после первого; скачивание PDF |
| Видео | Постер / кнопка play в вёрстке | Модалка, любой URL/формат с API |

---

## 7. Ориентир данных (для шага 3 и модели БД)

ИИ эти поля в типы не оформляет — вшивает строки в JSX. Разработчик мапит API → props.

**Module:** `id`, `index`, `title`, `description`, `tags[]`, `heroMediaUrl`, `videoPrimaryUrl`, `videoSecondaryUrl`, `pdfUrl`.

**Explore / How are you slide:** `id`, `title`, `description?`, `mediaUrl`.

**Difference item:** `id`, `teaserLabel`, `title`, `body`, `mediaUrl`.

**City option:** `value`, `label`.

---

## 8. Целевое дерево компонентов (после шага 2)

ИИ на шаге 1 **не обязан** создавать все файлы. Это карта, к которой разработчик приводит каркас.

```
src/components/
  ui/
    Button.jsx
    IconButton.jsx
    Badge.jsx
    ArrowLink.jsx
    Modal.jsx
    VideoPlayer.jsx
    SectionHeading.jsx
    TextField.jsx
    SelectField.jsx
    DateTimeField.jsx
  layout/
    AppShell.jsx
    SideNav.jsx
    BookingBar.jsx
    PageSection.jsx
    VideoModal.jsx
  home/
    HeroSection.jsx
    HeroSlide.jsx
    HeroPlusControl.jsx
    DifferenceSection.jsx
    DifferenceCard.jsx
    DifferenceMedia.jsx
    ExploreSection.jsx
    ExploreSlide.jsx
    JoinSection.jsx
    JoinFormFields.jsx
    HowAreYouSection.jsx
    HowAreYouSlide.jsx
    ScheduleSection.jsx
    ScheduleFormFields.jsx
  modules/
    ModuleSection.jsx
    ModuleBadgeList.jsx
    ModuleVideoPair.jsx
    PdfDownloadButton.jsx
    ModuleBottomNav.jsx

src/pages/
  HomePage.jsx
  ModulesPage.jsx

src/store/
  index.js
  api.js                    # RTK Query (имя на усмотрение)
```

`HomePage`: шелл, список секций, модалка, формы Join/Schedule, индексы слайдеров.

`ModulesPage`: тот же шелл, синхронизация модуля с URL, гейт видео, PDF.

---

## 9. Ориентир Component API (шаг 2, не задача ИИ)

Ниже — **подсказка** для декомпозиции, не ТЗ для генерации каркаса. Разработчик волен изменить имена и состав пропсов.

### 9.1 `ui/`

- **Button** — `children`, `variant` (`primary` \| `secondary` \| `ghost`), `type`, `disabled`, `onClick`, слоты иконок.
- **IconButton** — `label`, `icon`, `onClick`, `disabled`, `variant`.
- **Badge** — `children`.
- **ArrowLink** — `label`, `onClick`.
- **Modal** — `isOpen`, `onClose`, `children`.
- **VideoPlayer** — `src`, `poster`, `autoPlay`, `onEnded`.
- **SectionHeading** — `title`, `subtitle`, `align`.
- **TextField** — `id`, `name`, `label`, `value`, `onChange`, `onBlur`, `error`, `placeholder`, `type`.
- **SelectField** — как TextField + `options`.
- **DateTimeField** — `label`, `error`, `children` (пикер с страницы).

### 9.2 `layout/`

- **AppShell** — `sidebar`, `children`, `variant` (`paged` \| `stack`).
- **SideNav** — `onLogoClick`, `onNextClick`, `logo`, `nextDisabled`.
- **BookingBar** — `label`, `onBookingClick`.
- **PageSection** — `children`, `id`, `background`.
- **VideoModal** — `isOpen`, `src`, `title`, `onClose`, `onEnded`.

### 9.3 Главная

- **HeroSection** — `slides`, `activeIndex`, `onPrev` / `onNext`, `onSlideArrowClick`, `onPlusClick`, `onPlayClick`, booking.
- **HeroSlide** — `title`, `description`, `mediaUrl`, `isActive`, `onArrowClick` (текст и стрелка только у активного).
- **HeroPlusControl** — `onClick`, `label`.
- **DifferenceSection** — `items`, `revealedIds`, `onReveal`, `phase` (`cards` \| `video`), `video`, `onWatchClick`.
- **DifferenceCard** — `teaserLabel`, `isRevealed`, `title`, `body`, `onReveal`.
- **DifferenceMedia** — `mode`, URL, `compact`.
- **ExploreSection** — `slides`, `activeIndex`, `onPrev` / `onNext`, `forwardProgress`, `direction`.
- **ExploreSlide** — тексты при `isActive`, `position` (`left` \| `center` \| `right` \| `hidden`).
- **JoinSection** / **JoinFormFields** — слот или `values`, `errors`, `cityOptions`, обработчики, `onSubmit`.
- **HowAreYouSection** / **HowAreYouSlide** — `activeIndex`, `isActive` (увеличенный слайд), `onSelect`.
- **ScheduleSection** / **ScheduleFormFields** — как Join + слот `dateTimeSlot`.

### 9.4 Модули

- **ModuleSection** — `module`, два видео, `isSecondaryUnlocked`, play, `onDownloadPdf`, booking CTA.
- **ModuleBadgeList** — `tags` с API.
- **ModuleVideoPair** — primary/secondary, `secondaryLocked`.
- **PdfDownloadButton** — `label`, `onClick` (URL не хардкодить после шага 3).
- **ModuleBottomNav** — `items`, `activeId`, `onSelect`.

---

## 10. Карта событий (шаг 3)

```
SideNav.logo           → первая секция
SideNav.arrow          → следующая секция
BookingBar             → заглушка букинга
HeroSlide.arrow        → /modules с id/index
Hero plus              → первый модуль
Play                   → VideoModal
DifferenceCard         → reveal; все открыты → фаза video
Explore next           → слайд + таймер
Join/Schedule submit   → RHF + Zod
Module PDF             → файл по pdfUrl из БД
Module video 2         → после просмотра первого
ModuleBottomNav        → секция модуля
How are you showing up → заглушка букинга
```

---

## 11. Качество

- Анимации — после шага 3: hover и переходы по классам от состояния контейнера.
- Lighthouse: Performance ≥ 75, остальные категории ≥ 90 (мобильный и десктоп).
- На шаге 1 не ставить автоplay тяжёлого видео вне кадра — достаточно постера.

---

## 12. Порядок секций в проекте (рекомендуемый)

1. Layout: `AppShell`, `SideNav`, `BookingBar`, `PageSection`.
2. Главная по экранам: Hero → Difference → Explore → Join → How are you → Schedule.
3. Страница модулей: `ModuleSection` и связанные куски.
4. Общие `ui/` — выносить на шаге 2, когда повтор уже виден, не заранее «библиотекой вслепую».

Для каждого пункта — полный цикл: **каркас → декомпозиция и props → связывание с логикой**.
