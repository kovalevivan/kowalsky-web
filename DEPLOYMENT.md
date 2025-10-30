# 🚀 Инструкция по публикации сайта KOWALSKY

Три самых простых способа сделать ваш сайт доступным в интернете **бесплатно** за 5-10 минут.

---

## 1️⃣ GitHub Pages (Самый простой)

### Шаг 1: Создайте аккаунт на GitHub
- Перейдите на [github.com](https://github.com)
- Нажмите **Sign Up** и зарегистрируйтесь

### Шаг 2: Создайте новый репозиторий
1. Нажмите на **+** в правом верхнем углу → **New repository**
2. Назовите его, например: `kowalsky-website`
3. Выберите **Public**
4. Нажмите **Create repository**

### Шаг 3: Загрузите файлы
В терминале выполните:

```bash
cd /Users/ivankovalev/Documents/sandbox/kowalski
git init
git add index.html style.css script.js *.jpeg
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/ВАШ_USERNAME/kowalsky-website.git
git push -u origin main
```

### Шаг 4: Включите GitHub Pages
1. Зайдите в **Settings** вашего репозитория
2. Найдите раздел **Pages** в левом меню
3. В **Source** выберите **main** branch
4. Нажмите **Save**

**Готово!** Ваш сайт будет доступен по адресу:  
`https://ВАШ_USERNAME.github.io/kowalsky-website/`

⏱ **Время**: 5-10 минут  
💰 **Стоимость**: Бесплатно  
✅ **Домен**: Бесплатный поддомен GitHub

---

## 2️⃣ Netlify (Проще простого - drag & drop)

### Способ А: Через интерфейс (без командной строки)

1. **Зарегистрируйтесь** на [netlify.com](https://www.netlify.com/)
2. Нажмите **Add new site** → **Deploy manually**
3. **Перетащите** папку `kowalski` в окно браузера
4. Подождите 30 секунд

**Готово!** Netlify автоматически даст вам адрес типа:  
`https://случайное-название.netlify.app`

### Изменить адрес сайта:
1. Зайдите в **Site settings**
2. Найдите **Site name**
3. Измените на `kowalsky` или любое свободное имя
4. Ваш новый адрес: `https://kowalsky.netlify.app`

### Способ Б: Через GitHub (автоматические обновления)

1. Загрузите код на GitHub (см. раздел 1)
2. На Netlify нажмите **Add new site** → **Import an existing project**
3. Выберите **GitHub**
4. Выберите репозиторий `kowalsky-website`
5. Нажмите **Deploy**

**Преимущество**: Каждый раз когда вы обновите код на GitHub, сайт обновится автоматически!

⏱ **Время**: 2-5 минут  
💰 **Стоимость**: Бесплатно  
✅ **Домен**: Бесплатный поддомен + возможность подключить свой домен

---

## 3️⃣ Vercel (Для профессионального использования)

### Шаг 1: Зарегистрируйтесь
- Перейдите на [vercel.com](https://vercel.com)
- Войдите через GitHub

### Шаг 2: Импортируйте проект

#### Вариант А: Через GitHub
1. Загрузите код на GitHub (см. раздел 1)
2. На Vercel нажмите **Add New** → **Project**
3. Выберите репозиторий `kowalsky-website`
4. Нажмите **Deploy**

#### Вариант Б: Через командную строку
```bash
npm install -g vercel
cd /Users/ivankovalev/Documents/sandbox/kowalski
vercel
```

Следуйте инструкциям в терминале.

**Готово!** Ваш сайт будет доступен по адресу:  
`https://kowalsky-website.vercel.app`

⏱ **Время**: 3-5 минут  
💰 **Стоимость**: Бесплатно  
✅ **Домен**: Бесплатный поддомен + SSL сертификат

---

## 🌍 Подключение своего домена (например, kowalsky.ru)

### Купить домен:
- [REG.RU](https://www.reg.ru/) - от 190₽/год за .ru
- [Timeweb](https://timeweb.com/) - от 149₽/год
- [Namecheap](https://www.namecheap.com/) - от $8/год за .com

### Подключить к хостингу:

#### Для GitHub Pages:
1. Добавьте файл `CNAME` в корень проекта с вашим доменом:
```bash
echo "kowalsky.ru" > CNAME
git add CNAME
git commit -m "Add custom domain"
git push
```
2. В настройках домена добавьте A-запись на IP: `185.199.108.153`

#### Для Netlify/Vercel:
1. Зайдите в **Settings** → **Domain management**
2. Нажмите **Add custom domain**
3. Введите ваш домен
4. Следуйте инструкциям по настройке DNS

---

## 📊 Добавление аналитики

### Яндекс.Метрика (для русской аудитории)

1. Создайте счётчик на [metrika.yandex.ru](https://metrika.yandex.ru/)
2. Скопируйте код счётчика
3. Вставьте перед `</head>` в `index.html`:

```html
<!-- Яндекс.Метрика -->
<script type="text/javascript" >
   (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
   m[i].l=1*new Date();
   for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
   k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
   (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

   ym(ВАШ_ID, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true
   });
</script>
```

### Google Analytics (для международной аудитории)

1. Создайте аккаунт на [analytics.google.com](https://analytics.google.com/)
2. Получите код отслеживания
3. Вставьте код в `<head>` секцию `index.html`

---

## 🔍 SEO оптимизация

Добавьте в `<head>` секцию `index.html`:

```html
<!-- Базовые мета-теги -->
<meta name="description" content="KOWALSKY - профессиональное оборудование для яхт и швертботов. Чехлы, карбоновые удлинители, аксессуары. Доставка по всей России.">
<meta name="keywords" content="чехлы для яхт, швертботы, оборудование для яхт, карбоновый удлинитель, Луч, Laser, ILCA">
<meta name="author" content="KOWALSKY">

<!-- Open Graph для социальных сетей -->
<meta property="og:type" content="website">
<meta property="og:title" content="KOWALSKY - Оборудование для яхт">
<meta property="og:description" content="Профессиональное оборудование для яхт и швертботов">
<meta property="og:image" content="https://ваш-сайт.ru/photo_2025-10-30 22.10.28.jpeg">
<meta property="og:url" content="https://ваш-сайт.ru">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="KOWALSKY - Оборудование для яхт">
<meta name="twitter:description" content="Профессиональное оборудование для яхт и швертботов">
<meta name="twitter:image" content="https://ваш-сайт.ru/photo_2025-10-30 22.10.28.jpeg">

<!-- Favicon -->
<link rel="icon" type="image/png" href="favicon.png">
```

---

## 💡 Дополнительные советы

### 1. Оптимизируйте изображения
```bash
# Установите ImageMagick
brew install imagemagick

# Сжимайте изображения
for file in *.jpeg; do
  convert "$file" -quality 85 "optimized-$file"
done
```

### 2. Добавьте SSL (HTTPS)
Все три платформы (GitHub Pages, Netlify, Vercel) автоматически дают бесплатный SSL сертификат.

### 3. Настройте редирект с www
В настройках домена добавьте редирект:
- `www.kowalsky.ru` → `kowalsky.ru`

### 4. Проверьте скорость сайта
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)

### 5. Проверьте мобильную версию
- [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)

---

## 🆘 Возможные проблемы и решения

### Проблема: Изображения не загружаются
**Решение**: Убедитесь, что все фото загружены в репозиторий:
```bash
git add *.jpeg *.jpg *.png
git commit -m "Add images"
git push
```

### Проблема: Сайт не обновляется
**Решение**: 
- GitHub Pages: Подождите 5-10 минут
- Netlify/Vercel: Очистите кэш браузера (Cmd+Shift+R)

### Проблема: Форма не работает
**Решение**: Используйте Formspree или Netlify Forms:
```html
<form name="contact" method="POST" data-netlify="true">
```

---

## 📞 Нужна помощь?

1. **GitHub Pages**: [docs.github.com/pages](https://docs.github.com/pages)
2. **Netlify**: [docs.netlify.com](https://docs.netlify.com/)
3. **Vercel**: [vercel.com/docs](https://vercel.com/docs)

---

**Успехов с запуском! 🚀**

