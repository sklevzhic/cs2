## 3 сайта с одинаковой логикой, отличаются только цветовой схемой.

Как деплоить:
1. Файл `.[example]env.local` переименовать в `.env.local`
2. Изменить переменные
```json
NEXT_PUBLIC_BASE_URL=http://3.70.1.9:5015 // путь к бэкенду ассистента
```
3. Запуск проектов

Первый сайт
```json
1. npm run build
2. npm run start
```

Второй сайт
```json
1. npm run build:dark
2. npm run start:dark
```

Третий сайт
```json
1. npm run build:blue
2. npm run start:blue
```

## Бот

### [ссылка на бота](https://t.me/csgo_shop_assistant_bot)