# Онлайн-магазин книг

[![React](https://img.shields.io/badge/React-18.2-blue)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-4.0-orange)](https://vitejs.dev/)

Интернет-магазин книг с возможностью просмотра каталога, добавления в корзину и оформления заказа.

## Особенности

- Интеграция с Google Books API
- Система корзины с добавлением/удалением товаров
- Личный кабинет пользователя
- Адаптивный дизайн для всех устройств
- Локализованный интерфейс (русский язык)

### Установка
```bash
git clone https://github.com/ваш-логин/название-репозитория.git
cd site
npm install
npm run dev
Откройте http://localhost:5173 в браузере.
```

#### Технологии
Frontend:
   React 18
   Vite 4
   React Router 6
   Context API

Стили:
   CSS Modules
   Адаптивная верстка

API:
   Google Books API
   JSON Server (для локального API)

##### Структура проекта
site/
├── public/ # Статические файлы
│ └── vite.svg # Логотип Vite
│
├── src/ # Исходный код
│ │
│ ├── assets/ # Ресурсы (изображения, шрифты)
│ │
│ ├── components/ # Переиспользуемые компоненты
│ │ ├── footer/ # Компонент подвала
│ │ ├── for-account/ # Компоненты для страницы аккаунта
│ │ ├── for-cart/ # Компоненты корзины
│ │ ├── for-catalog/ # Компоненты каталога
│ │ ├── for-home/ # Компоненты главной страницы
│ │ ├── for-register/ # Компоненты регистрации
│ │ └── header/ # Компонент шапки
│ │
│ ├── context/ # Контексты React
│ │ ├── AuthContext.jsx # Контекст авторизации
│ │ └── CartContext.jsx # Контекст корзины
│ │
│ ├── pages/ # Страницы приложения
│ │ ├── account/ # Личный кабинет
│ │ ├── cart/ # Корзина
│ │ ├── catalog/ # Каталог книг
│ │ ├── home/ # Главная страница
│ │ └── register/ # Регистрация/авторизация
│ │
│ ├── App.jsx # Корневой компонент
│ ├── App.css # Глобальные стили
│ ├── index.css # Базовые стили
│ ├── main.jsx # Точка входа
│ └── index.html # Базовый HTML
│
├── .gitignore # Игнорируемые файлы Git
├── eslint.config.js # Конфигурация ESLint
├── package.json # Зависимости и скрипты
└── package-lock.json # Фиксация версий зависимостей

###### Контакты и ссылки на проект
Переверзева Арина Владимировна
ПИЭ-31
89132339285
arina040655@gmail.com

Гитхаб: https://github.com/ArinaPereverzeva/site-BookHub

Фигма: https://www.figma.com/design/67G9DEGLlCzdAN9HwNsRs7/%D0%9F%D1%80%D0%B0%D0%BA%D1%82%D0%B8%D0%BA%D0%B0?node-id=0-1&t=ImFxffcvAHvZmOYO-1 
