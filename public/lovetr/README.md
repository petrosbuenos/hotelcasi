# Lovetr Section - Casino Reviews

Це повністю незалежний розділ сайту, створений на чистому HTML/CSS/JavaScript без використання React.

## 📁 Структура файлів

```
public/lovetr/
├── index.html          # Головна сторінка
├── styles.css          # Стилі
├── script.js           # JavaScript функціональність
└── README.md           # Ця документація
```

## 🌐 Доступ

Сторінка доступна за адресою: `http://localhost:3000/lovetr/index.html`

## ✨ Особливості

### 🎨 Дизайн
- **Сучасний дизайн** з градієнтами та glassmorphism ефектами
- **Повністю адаптивний** для всіх пристроїв
- **Анімації** при прокручуванні та наведенні
- **Темна тема** з золотими акцентами

### 🎰 Функціональність
- **12 казино** з детальною інформацією
- **Рейтинги** з зірками
- **Бонуси** та особливості кожного казино
- **FAQ секція** з інтерактивними питаннями
- **Паралакс ефекти** та плавні анімації

### 📱 Responsive Design
- **Mobile-first** підхід
- **Адаптивна сітка** для казино
- **Оптимізовані кнопки** для мобільних пристроїв

### 🚀 Performance
- **Оптимізований CSS** з використанням CSS Grid та Flexbox
- **Lazy loading** для зображень
- **Intersection Observer** для анімацій
- **Мінімальний JavaScript** без зайвих залежностей

## 🛠️ Технології

- **HTML5** - семантична розмітка
- **CSS3** - сучасні стилі з градієнтами та анімаціями
- **Vanilla JavaScript** - без фреймворків
- **CSS Grid & Flexbox** - для layout
- **Intersection Observer API** - для анімацій

## 📊 SEO Optimization

- **Meta теги** для пошукових систем
- **Open Graph** для соціальних мереж
- **Twitter Cards** для Twitter
- **Canonical URL** для уникнення дублів
- **Семантична HTML розмітка**

## 🎯 Структура сторінки

1. **Hero Section** - головний банер з CTA кнопкою
2. **Title Section** - заголовок та опис
3. **Features Section** - особливості (безпека, мобільність)
4. **Casinos Section** - список 12 казино
5. **FAQ Section** - часто задавані питання
6. **Footer** - комплаєнс логотипи та дисклеймер

## 🔧 Налаштування

### Додавання нового казино

Відредагуйте масив `casinos` в `script.js`:

```javascript
{
    id: 13,
    name: "New Casino",
    logo: "🎮",
    rating: 4.5,
    bonus: "100% do 1000 PLN",
    features: ["Feature 1", "Feature 2", "Feature 3"],
    primaryAction: "Graj Teraz",
    secondaryAction: "Recenzja"
}
```

### Зміна стилів

Всі стилі знаходяться в `styles.css`. Основні змінні:

- **Кольори**: градієнти та акценти
- **Шрифти**: розміри та ваги
- **Анімації**: тривалість та ефекти

### Додавання FAQ

Відредагуйте масив `faqs` в `script.js`:

```javascript
{
    question: "Нове питання?",
    answer: "Відповідь на нове питання."
}
```

## 🚀 Deployment

Сторінка автоматично доступна через React dev server:
- **Development**: `http://localhost:3000/lovetr/index.html`
- **Production**: `https://stayversoreviews.com/lovetr/index.html`

## 📈 Analytics

В `script.js` є функція `initAnalytics()` для додавання відстеження:
- Кліки по кнопках
- Відстеження продуктивності
- Обробка помилок

## 🔒 Безпека

- **HTTPS** для production
- **Content Security Policy** (можна додати)
- **XSS protection** через innerHTML sanitization

## 📝 Ліцензія

Цей розділ є частиною основного проекту StayVerso Reviews. 