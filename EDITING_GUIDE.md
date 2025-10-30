# 📝 Руководство по редактированию сайта KOWALSKY

Краткая инструкция для быстрых изменений на сайте.

---

## 🎨 Изменить цвета

**Файл:** `style.css` (строки 10-16)

```css
:root {
    --color-primary: #000000;     /* Основной цвет (чёрный) */
    --color-secondary: #6b6b6b;   /* Вторичный цвет (серый) */
    --color-border: #e5e5e5;      /* Цвет рамок */
    --color-bg: #ffffff;          /* Фон (белый) */
    --color-bg-alt: #fafafa;      /* Альтернативный фон */
}
```

### Примеры цветовых схем:

**Тёмная тема:**
```css
--color-primary: #ffffff;
--color-secondary: #a0a0a0;
--color-border: #333333;
--color-bg: #000000;
--color-bg-alt: #1a1a1a;
```

**Морская тема (вернуть синий):**
```css
--color-primary: #0a4d68;
--color-secondary: #088395;
--color-border: #d4e9f0;
--color-bg: #ffffff;
--color-bg-alt: #f0f8fa;
```

**Тёплая тема:**
```css
--color-primary: #2c2c2c;
--color-secondary: #8b7355;
--color-border: #e8ddd0;
--color-bg: #ffffff;
--color-bg-alt: #faf8f5;
```

---

## 🖼️ Изменить логотип

### В навигации:
**Файл:** `index.html` (строка ~23)

```html
<a href="#" class="logo">
    <img src="логотип.jpeg" alt="KOWALSKY">
</a>
```

### В футере:
**Файл:** `index.html` (строка ~256)

```html
<img src="логотип.jpeg" alt="KOWALSKY" class="footer-logo">
```

### Изменить размер логотипа:
**Файл:** `style.css`

```css
/* Навигация */
.logo img {
    height: 48px;  /* Измените значение */
}

/* Футер */
.footer-logo {
    height: 48px;  /* Измените значение */
}
```

---

## 📸 Работа с фотографиями товаров

### Добавить товар с одной фотографией:

**Файл:** `index.html` (вставить в секцию `.products-grid`)

```html
<div class="product" data-category="covers">
    <div class="product-gallery">
        <img src="название-фото.jpeg" alt="Описание" class="product-main-img">
    </div>
    <div class="product-info">
        <h3>Название товара</h3>
        <p>Описание товара</p>
        <div class="product-footer">
            <span class="price">1 000 ₽</span>
            <a href="#contact" class="btn btn-small">Заказать</a>
        </div>
    </div>
</div>
```

### Добавить товар с галереей (несколько фото):

```html
<div class="product" data-category="accessories">
    <div class="product-gallery">
        <img src="фото-1.jpeg" alt="Описание" class="product-main-img">
        <div class="product-thumbnails">
            <img src="фото-1.jpeg" alt="" class="thumb active">
            <img src="фото-2.jpeg" alt="" class="thumb">
            <img src="фото-3.jpeg" alt="" class="thumb">
            <img src="фото-4.jpeg" alt="" class="thumb">
        </div>
    </div>
    <div class="product-info">
        <h3>Название товара</h3>
        <p>Описание</p>
        <div class="product-footer">
            <span class="price">1 000 ₽</span>
            <a href="#contact" class="btn btn-small">Заказать</a>
        </div>
    </div>
</div>
```

**Важно:** 
- Первое фото в `product-main-img` и первый `thumb` должны совпадать
- Класс `active` у первой миниатюры обязателен

### Добавить бейдж (Новинка, Предзаказ, Premium):

```html
<div class="product-info">
    <span class="badge">Новинка</span>
    <!-- или -->
    <span class="badge badge-premium">Premium</span>
    <h3>Название товара</h3>
    ...
</div>
```

---

## 💰 Изменить цены

**Файл:** `index.html`

Найдите нужный товар и измените:

```html
<span class="price">7 500 ₽</span>
```

---

## 📝 Изменить текст на главной странице

### Заголовок Hero:
**Файл:** `index.html` (строка ~30)

```html
<h1>Профессиональное<br>оборудование для яхт</h1>
```

### Описание Hero:
**Файл:** `index.html` (строка ~31)

```html
<p>Качественные чехлы, карбоновые удлинители...</p>
```

### Преимущества (секция About):
**Файл:** `index.html` (строки ~43-61)

```html
<div class="about-item">
    <div class="about-number">01</div>
    <h3>Заголовок</h3>
    <p>Описание преимущества</p>
</div>
```

---

## 📱 Изменить контакты

### Telegram:
**Файл:** `index.html` (строка ~193)

```html
<a href="https://t.me/ВАШЕ_ИМЯ" class="contact-method">
```

### Ozon:
**Файл:** `index.html` (строка ~206)

```html
<a href="https://ozon.ru/ВАША_ССЫЛКА" class="contact-method">
```

---

## ✏️ Изменить описание товара

**Файл:** `index.html`

Найдите нужный товар и измените:

```html
<div class="product-info">
    <h3>Название товара</h3>
    <p>Описание товара - тут можно писать что угодно</p>
    ...
</div>
```

---

## 🔤 Изменить шрифт

**Файл:** `style.css` (строка 9)

```css
--font-main: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
```

**Файл:** `index.html` (строка ~8 в `<head>`)

Замените ссылку на Google Fonts:

```html
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

И в CSS:
```css
--font-main: 'Roboto', sans-serif;
```

**Популярные шрифты:**
- Inter (текущий)
- Roboto
- Open Sans
- Montserrat
- Poppins

---

## 📏 Изменить размеры текста

**Файл:** `style.css`

```css
/* Главный заголовок */
.hero-content h1 {
    font-size: 64px;  /* Измените на нужный */
}

/* Заголовки товаров */
.product-info h3 {
    font-size: 20px;
}

/* Цены */
.price {
    font-size: 24px;
}
```

---

## 🎯 Категории товаров

Доступные категории для фильтрации:
- `covers` - Чехлы
- `accessories` - Аксессуары
- `equipment` - Оборудование

### Изменить категорию товара:

**Файл:** `index.html`

```html
<div class="product" data-category="covers">
<!-- Измените covers на нужную категорию -->
```

### Добавить новую категорию:

1. Добавьте кнопку фильтра:
```html
<button class="filter-btn" data-filter="новая">Новая категория</button>
```

2. Примените категорию к товарам:
```html
<div class="product" data-category="новая">
```

---

## 🖼️ Оптимизация изображений

### Сжать фотографии (через терминал):

```bash
# Установить ImageMagick
brew install imagemagick

# Сжать все jpeg
for file in *.jpeg; do
  convert "$file" -quality 85 -resize 1200x1200\> "opt-$file"
done
```

### Рекомендуемые размеры:
- Логотип: максимум 200px высота
- Фото товаров: 1200x900px (соотношение 4:3)
- Миниатюры: 300x300px

---

## 📲 Мобильная версия

Все изменения автоматически адаптируются под мобильные устройства благодаря:

```css
@media (max-width: 768px) {
    /* Стили для планшетов и смартфонов */
}

@media (max-width: 480px) {
    /* Стили для маленьких смартфонов */
}
```

---

## 🔧 Полезные инструменты

### Подбор цветов:
- [Coolors.co](https://coolors.co/) - генератор палитр
- [Color Hunt](https://colorhunt.co/) - готовые палитры

### Шрифты:
- [Google Fonts](https://fonts.google.com/)
- [Font Pair](https://fontpair.co/) - сочетания шрифтов

### Оптимизация изображений:
- [TinyPNG](https://tinypng.com/) - онлайн сжатие
- [Squoosh](https://squoosh.app/) - продвинутое сжатие

### Проверка сайта:
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)

---

## ⚠️ Частые ошибки

### Фото не отображается
✅ Проверьте:
- Название файла точно совпадает (с учётом регистра и пробелов)
- Файл находится в той же папке, что и index.html
- Путь написан правильно: `src="имя-файла.jpeg"`

### Стили не применяются
✅ Проверьте:
- Файл `style.css` в той же папке
- Очистите кэш браузера (Cmd + Shift + R)

### Галерея не работает
✅ Проверьте:
- Файл `script.js` подключен
- Миниатюры имеют класс `thumb`
- Первая миниатюра имеет класс `active`

---

## 💾 Сохранение изменений

После каждого изменения:
1. Сохраните файл (Cmd + S)
2. Обновите браузер (Cmd + R или Cmd + Shift + R)
3. Проверьте на мобильном устройстве

---

**Удачи с редактированием! 🚀**

