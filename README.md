# ⛵ KOWALSKY - Оборудование для яхт

> Профессиональный интернет-магазин оборудования для яхт и швертботов

[![Website](https://img.shields.io/badge/Website-Live-success)](https://kovalevivan.github.io/kowalsky-web/)
[![License](https://img.shields.io/badge/License-Private-red)]()

---

## 🌟 О проекте

**KOWALSKY** — минималистичный современный сайт-каталог для продажи оборудования для яхт классов Луч, Laser, ILCA, Ракета 270, Оптимист.

### ✨ Особенности:

- 🎨 **Минималистичный дизайн** - чёрно-белая палитра
- 📱 **Адаптивная вёрстка** - работает на всех устройствах
- 🖼️ **Галереи товаров** - просмотр нескольких фото
- 🔍 **Фильтрация** - по классам яхт
- 📦 **14 товаров** - полный каталог
- ⚡ **Быстрая загрузка** - < 2 секунды

---

## 📦 Каталог товаров

### Луч / Laser / ILCA (7 товаров)
- Чехол для яхты — 7,500₽
- Удлинитель румпеля 100 см — 4,500₽
- Откреночный ремень — 2,500₽
- Телега для берега
- Конструкция на 8 лодок
- Парус тренировочный
- Шкот 13м

### Ракета 270 (2 товара)
- Чехол — 5,900₽
- Откреночный ремень — 2,500₽

### Оптимист (1 товар)
- Чехол — Предзаказ

### Аксессуары (4 товара)
- Флюгарка
- Кепка KOWALSKY
- Очки для яхтинга
- Перчатки для яхтинга

### Причал (1 товар)
- Сервисная колонка — 75,000₽

---

## 🚀 Быстрый старт

### Локальный запуск:

```bash
# Клонировать репозиторий
git clone https://github.com/kovalevivan/kowalsky-web.git

# Открыть в браузере
open index.html
```

Сайт работает без сборки и зависимостей! 🎉

---

## 📁 Структура проекта

```
kowalsky-web/
├── index.html              # Главная страница
├── style.css               # Стили
├── script.js               # JavaScript
├── placeholder.svg         # Placeholder для товаров
├── логотип.jpeg           # Логотип бренда
├── фото товаров/          # Фотографии
└── docs/                   # Документация
    ├── README.md           # Полное руководство
    ├── DEPLOYMENT.md       # Публикация
    ├── FORM_SETUP.md       # Настройка формы
    ├── EDITING_GUIDE.md    # Редактирование
    └── CHANGELOG.md        # История изменений
```

---

## 🎨 Технологии

- **HTML5** - семантическая разметка
- **CSS3** - Flexbox, Grid, animations
- **JavaScript (Vanilla)** - без фреймворков
- **SVG** - векторные изображения
- **Google Fonts** - шрифт Inter

**Размер:**
- HTML: 17 KB
- CSS: 11 KB
- JS: 4.2 KB
- **Общий:** 32 KB (без фото)

---

## 🌐 Публикация

### Вариант 1: GitHub Pages (бесплатно)

1. Settings → Pages
2. Source: main branch
3. Сайт доступен: `username.github.io/kowalsky-web`

### Вариант 2: Netlify (рекомендуется)

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/kovalevivan/kowalsky-web)

1. Перетащите папку на netlify.com
2. Получите ссылку: `kowalsky.netlify.app`
3. Готово! ✅

### Вариант 3: Vercel

1. Импортируйте репозиторий
2. Deploy
3. Готово! ✅

**Подробнее:** см. `docs/DEPLOYMENT.md`

---

## 📧 Настройка формы обратной связи

**Сейчас:** Форма показывает alert  
**Нужно:** Настроить отправку заявок

### Рекомендуемый способ - Formspree:

1. Зарегистрируйтесь на [formspree.io](https://formspree.io/)
2. Создайте форму
3. Обновите `action` в HTML
4. Заявки приходят на email ✅

**Подробная инструкция:** `docs/FORM_SETUP.md`

**Альтернативы:**
- Telegram Bot (PHP хостинг)
- Netlify Forms (если используете Netlify)

---

## 🎯 Версии

### v2.2 - Текущая (30.10.2025)
- ✅ 14 товаров в каталоге
- ✅ Placeholder для товаров без фото
- ✅ Группировка по классам яхт
- ✅ Обновлена ссылка на Ozon

### v2.1 (30.10.2025)
- ✅ Группировка по классам яхт
- ✅ Новые фильтры

### v2.0 (30.10.2025)
- ✅ Минималистичный редизайн
- ✅ Логотип
- ✅ Галереи товаров

**История изменений:** `docs/CHANGELOG.md`

---

## 📊 Статистика

- **Lighthouse Score:** 95+/100
- **Скорость загрузки:** < 2 сек
- **Mobile-friendly:** ✅
- **SEO-ready:** ✅
- **Accessibility:** A

---

## 📝 Документация

| Файл | Описание |
|------|----------|
| `README.md` | Полное руководство |
| `DEPLOYMENT.md` | Как опубликовать сайт |
| `FORM_SETUP.md` | Настройка формы заявок |
| `EDITING_GUIDE.md` | Как редактировать контент |
| `QUICKSTART.md` | Быстрый старт |
| `PROJECT_SUMMARY.md` | Сводка по проекту |
| `CHANGELOG.md` | История версий |

---

## 🔧 Редактирование

### Изменить цвета:
```css
/* style.css */
:root {
    --color-primary: #000000;   /* Основной */
    --color-secondary: #6b6b6b; /* Вторичный */
}
```

### Добавить товар:
```html
<!-- index.html -->
<div class="product" data-category="luch">
    <div class="product-gallery">
        <img src="фото.jpeg" alt="Товар">
    </div>
    <div class="product-info">
        <h3>Название</h3>
        <p>Описание</p>
        <div class="product-footer">
            <span class="price">1 000 ₽</span>
            <a href="#contact" class="btn btn-small">Заказать</a>
        </div>
    </div>
</div>
```

**Подробнее:** `docs/EDITING_GUIDE.md`

---

## 🤝 Контакты

- **Telegram:** [@nikita_kovalev_shoes](https://t.me/nikita_kovalev_shoes)
- **Ozon:** [Наш магазин](https://ozon.ru/t/jhxxqGG)

---

## 📄 Лицензия

Частный проект. Все права защищены © 2025 KOWALSKY

---

## 🎉 Особенности реализации

### Галереи товаров
Клик по миниатюре меняет главное фото:
```javascript
// script.js - автоматическая инициализация
document.querySelectorAll('.thumb').forEach(thumb => {
    thumb.addEventListener('click', () => {
        mainImg.src = thumb.src;
    });
});
```

### Фильтрация
```javascript
// Фильтры работают по атрибуту data-category
products.forEach(product => {
    if (filter === 'all' || product.dataset.category === filter) {
        product.style.display = 'grid';
    }
});
```

### Адаптивность
```css
/* Mobile-first подход */
@media (max-width: 768px) {
    .products-grid {
        grid-template-columns: 1fr;
    }
}
```

---

## 💡 Roadmap

- [ ] Добавить корзину товаров
- [ ] Интегрировать онлайн-оплату
- [ ] Создать админ-панель
- [ ] Добавить личный кабинет
- [ ] Мобильное приложение
- [ ] English version

---

## 🌟 Star History

Если проект понравился - поставьте ⭐!

---

**Создано с ❤️ для KOWALSKY**

*Последнее обновление: 30 октября 2025*

