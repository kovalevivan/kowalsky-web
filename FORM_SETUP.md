# 📧 Настройка формы обратной связи

**Текущий статус:** Форма показывает alert, но не отправляет заявки никуда.

Выберите один из вариантов настройки ⬇️

---

## 🚀 Вариант 1: Formspree (РЕКОМЕНДУЕТСЯ)

**Время:** 5 минут  
**Сложность:** ⭐ Легко  
**Стоимость:** Бесплатно (50 заявок/месяц)  
**Куда приходят:** На ваш email

### Шаг 1: Регистрация

1. Зайдите на [formspree.io](https://formspree.io/)
2. Нажмите **Get Started** → **Sign Up**
3. Введите email и создайте аккаунт

### Шаг 2: Создание формы

1. После входа нажмите **+ New Form**
2. Введите название: `KOWALSKY - Заявки`
3. Нажмите **Create Form**
4. Скопируйте ссылку вида: `https://formspree.io/f/ваш-id`

### Шаг 3: Обновление HTML

Откройте `index.html` и найдите строку **~383**:

```html
<!-- БЫЛО -->
<form class="contact-form" id="contactForm">

<!-- СТАНЕТ -->
<form action="https://formspree.io/f/ваш-id" method="POST" class="contact-form">
```

**Важно:**
- Замените `ваш-id` на реальный ID из Formspree
- Уберите `id="contactForm"` (не обязательно, но можно)

### Шаг 4: Обновление полей формы

Добавьте атрибуты `name` к полям (если их нет):

```html
<input type="text" name="name" placeholder="Ваше имя" required>
<input type="tel" name="phone" placeholder="Телефон" required>
<input type="email" name="email" placeholder="Email">
<textarea name="message" rows="4" placeholder="Интересующий товар или вопрос"></textarea>
```

### Шаг 5: Готово! ✅

Теперь:
- ✅ Заявки приходят на ваш email
- ✅ Автоматическое подтверждение клиенту
- ✅ История всех заявок в Formspree
- ✅ Защита от спама

---

## 💬 Вариант 2: Telegram Bot

**Время:** 15 минут  
**Сложность:** ⭐⭐ Средне  
**Стоимость:** Бесплатно  
**Куда приходят:** В ваш Telegram

### Шаг 1: Создание бота

1. Откройте Telegram
2. Найдите [@BotFather](https://t.me/BotFather)
3. Отправьте `/newbot`
4. Введите имя: `KOWALSKY Заявки`
5. Введите username: `kowalsky_orders_bot`
6. Скопируйте **токен** (строка вида `1234567890:ABCdefGHIjklMNOpqrsTUVwxyz`)

### Шаг 2: Получение Chat ID

1. Найдите [@userinfobot](https://t.me/userinfobot)
2. Отправьте `/start`
3. Скопируйте ваш **Chat ID** (число вида `123456789`)

### Шаг 3: Создание обработчика

Создайте файл `send-to-telegram.php` (нужен PHP хостинг):

```php
<?php
$token = "ВАШ_ТОКЕН_БОТА";
$chat_id = "ВАШ_CHAT_ID";

$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$message = $_POST['message'];

$text = "🆕 Новая заявка с сайта KOWALSKY\n\n";
$text .= "👤 Имя: $name\n";
$text .= "📱 Телефон: $phone\n";
$text .= "📧 Email: $email\n";
$text .= "💬 Сообщение: $message";

$url = "https://api.telegram.org/bot$token/sendMessage";
$data = [
    'chat_id' => $chat_id,
    'text' => $text
];

$options = [
    'http' => [
        'method' => 'POST',
        'header' => 'Content-Type: application/x-www-form-urlencoded',
        'content' => http_build_query($data)
    ]
];

$context = stream_context_create($options);
$result = file_get_contents($url, false, $context);

header('Location: index.html?success=true');
?>
```

### Шаг 4: Обновление HTML

```html
<form action="send-to-telegram.php" method="POST" class="contact-form">
    <input type="text" name="name" placeholder="Ваше имя" required>
    <input type="tel" name="phone" placeholder="Телефон" required>
    <input type="email" name="email" placeholder="Email">
    <textarea name="message" rows="4" placeholder="Сообщение"></textarea>
    <button type="submit" class="btn btn-primary">Отправить</button>
</form>
```

### Шаг 5: Готово! ✅

- ✅ Заявки приходят в Telegram
- ✅ Мгновенные уведомления
- ✅ Удобно отвечать сразу

**Минус:** Нужен PHP хостинг

---

## 🌐 Вариант 3: Netlify Forms

**Время:** 2 минуты  
**Сложность:** ⭐ Очень легко  
**Стоимость:** Бесплатно (100 заявок/месяц)  
**Куда приходят:** Email + панель Netlify

### Только если публикуете на Netlify!

### Шаг 1: Добавьте атрибут к форме

```html
<form name="contact" method="POST" data-netlify="true" class="contact-form">
    <input type="text" name="name" placeholder="Ваше имя" required>
    <input type="tel" name="phone" placeholder="Телефон" required>
    <input type="email" name="email" placeholder="Email">
    <textarea name="message" rows="4" placeholder="Сообщение"></textarea>
    <button type="submit" class="btn btn-primary">Отправить</button>
</form>
```

### Шаг 2: Готово! ✅

Netlify автоматически:
- ✅ Обрабатывает заявки
- ✅ Отправляет на email
- ✅ Показывает в панели управления
- ✅ Защищает от спама

---

## 📊 Сравнение вариантов:

| Параметр | Formspree | Telegram Bot | Netlify Forms |
|----------|-----------|--------------|---------------|
| **Время настройки** | 5 мин | 15 мин | 2 мин |
| **Сложность** | ⭐ | ⭐⭐ | ⭐ |
| **Email уведомления** | ✅ | ❌ | ✅ |
| **Telegram уведомления** | ❌ | ✅ | ❌ |
| **История заявок** | ✅ | ✅ | ✅ |
| **Защита от спама** | ✅ | ⚠️ | ✅ |
| **Нужен хостинг** | ❌ | ✅ (PHP) | ❌ |
| **Лимит бесплатно** | 50/мес | ∞ | 100/мес |

---

## 🎯 Какой выбрать?

### Выберите Formspree если:
- ✅ Хотите получать заявки на email
- ✅ Нужна простая настройка
- ✅ Хотите историю заявок
- ✅ Не хотите заморачиваться

### Выберите Telegram Bot если:
- ✅ Всегда в Telegram
- ✅ Хотите мгновенные уведомления
- ✅ Можете настроить PHP
- ✅ Много заявок (>50/мес)

### Выберите Netlify Forms если:
- ✅ Публикуете на Netlify
- ✅ Хотите всё в одном месте
- ✅ Нужна максимальная простота

---

## 💡 Рекомендация:

**Начните с Formspree** (5 минут):
1. Самый простой способ
2. Заявки сразу на email
3. Работает везде
4. Бесплатно для старта

Если заявок будет много - переключитесь на Telegram Bot.

---

## 🔧 Пошаговая настройка Formspree (детально):

### 1. Регистрация (1 минута)

```
1. Откройте: https://formspree.io/
2. Кликните: "Get Started"
3. Кликните: "Sign Up"
4. Введите:
   - Email: ваш_email@mail.ru
   - Password: придумайте пароль
5. Кликните: "Sign Up"
6. Проверьте email и подтвердите
```

### 2. Создание формы (1 минута)

```
1. После входа кликните: "+ New Form"
2. Введите название: KOWALSKY Заявки
3. Кликните: "Create Form"
4. Скопируйте URL вида: https://formspree.io/f/xbljabcd
   (ваш будет другой)
```

### 3. Настройка сайта (3 минуты)

Откройте файл `index.html` и найдите (примерно строка 383):

```html
<form class="contact-form" id="contactForm">
```

Замените на:

```html
<form action="https://formspree.io/f/ВСТАВЬТЕ_ВАШ_ID" method="POST" class="contact-form">
```

**Важно:** Замените `ВСТАВЬТЕ_ВАШ_ID` на реальный ID!

### 4. Проверка (1 минута)

```
1. Откройте index.html в браузере
2. Прокрутите к форме "Оставьте заявку"
3. Заполните поля
4. Нажмите "Отправить"
5. Должна открыться страница Formspree с подтверждением
6. Проверьте email - должно прийти письмо
```

### 5. Дополнительные настройки (опционально)

В панели Formspree можно настроить:
- ✅ Автоответ клиенту
- ✅ Редирект после отправки
- ✅ Webhook для интеграций
- ✅ Защита от спама

---

## ⚠️ Важно!

### Если используете Formspree:

1. **Удалите JavaScript обработчик** из `script.js` (строки 68-76):

```javascript
// Можно удалить этот код:
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Спасибо за заявку! Мы свяжемся с вами в ближайшее время.');
        contactForm.reset();
    });
}
```

2. **Или закомментируйте:**

```javascript
// const contactForm = document.getElementById('contactForm');
// 
// if (contactForm) {
//     contactForm.addEventListener('submit', (e) => {
//         e.preventDefault();
//         alert('Спасибо за заявку! Мы свяжемся с вами в ближайшее время.');
//         contactForm.reset();
//     });
// }
```

---

## 🎉 После настройки:

Протестируйте форму:
1. Заполните все поля
2. Нажмите "Отправить"
3. Проверьте email
4. Убедитесь что заявка пришла

**Готово!** Теперь вы получаете все заявки! 📧

---

## 📞 Нужна помощь?

Если что-то не получается:
1. Проверьте что URL Formspree правильный
2. Проверьте что добавили `method="POST"`
3. Проверьте что у полей есть атрибут `name`
4. Откройте консоль браузера (F12) - там будут ошибки

---

**Создано:** 30 октября 2025  
**Версия:** 1.0

