# RACKOON — Telegram Mini App (демо)

Пять экранов: лобби, Crash, Upgrade, Cases, Mines. Игровой баланс (100 TON на старте) хранится на устройстве игрока, без сервера и реальных денег.

## Залить на хостинг
Папка `dist/` — готовый сайт. Её можно загрузить на любой статический хостинг с HTTPS (Netlify, Vercel, GitHub Pages).

## Подключить к боту
В @BotFather: создать бота (/newbot), затем в настройках бота указать ссылку на сайт для Mini App / кнопки меню.

## Пересобрать после правок
Экраны лежат в `src/screens/*.dc.html` (разметка + логика), движок — `src/main.jsx`.
```
npm install react react-dom esbuild
./build.sh
```
