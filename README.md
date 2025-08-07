# Food API

Проект представляет собой простой REST API сервис на Express и MongoDB для работы с карточками продуктов питания.

## Установка

```bash
npm install
```

## Переменные окружения

Для работы сервера требуется файл `.env` со следующими параметрами:

```ini
PORT=3000
MONGO_CONNECT_ADRES=mongodb://localhost:27017/
```

`MONGO_CONNECT_ADRES` должен заканчиваться на `/`, так как к нему автоматически добавляется название базы `food-api`.

## Запуск

```bash
npm start
```

## Маршруты

- `GET /ping` – проверка доступности сервиса.
- `POST /create` – создание новой карточки продукта.
  - Тело запроса: `{ name, carbohydrates, dryWeight, finishedProductWeight }`.
- `GET /getall` – получение всех карточек продуктов.

## Ответы

Примеры ответов сервиса:

```json
GET /ping
{ "result": "pong" }
```

```json
POST /create
{ "result": "Карточка продукта создана успешно", "food": { ... } }
```

```json
GET /getall
{ "result": "ok", "foods": [ ... ] }
```

## Лицензия

ISC
