# Проект бронирования туров

## 📦 Технологии

- **Frontend**: React.js (`/booking`)
- **Backend**: ASP.NET Core Web API (`/TourAPI`)
- **База данных**: PostgreSQL (через Docker)
- **Email**: SMTP (Yandex)
- **Документация API**: Swagger (`/swagger`)

---

## Запуск проекта

### 1. Клонировать репозиторий



### 2. Применить миграции и запустить контейнеры

```
cd TourAPI
dotnet ef migrations add InitialCreate --project TourAPI/TourAPI.csproj --startup-project TourAPI/TourAPI.csproj
docker-compose down -v
docker-compose build
docker-compose up -d
```

После запуска:

- API доступен по адресу: http://localhost:5110/swagger  
- База данных поднимается автоматически  
- Туры автоматически сидируются

### 3. Запустить фронтенд

Открыть второй терминал:

```
cd booking
npm run dev
```

Фронт доступен по адресу: http://localhost:5173

---

## 📝 Функциональность

- Каталог туров
- Детализация тура
- Форма бронирования
- Валидация всех полей формы
- Email-уведомления клиенту и администратору
- Swagger-документация API
- Адаптивная вёрстка под любые устройства


---

## 📬 Email уведомления

Email отправляется через SMTP (smtp.yandex.ru):  
- Клиент получает подтверждение с деталями тура  
- Администратор получает полную информацию о заявке

SMTP-настройки прописаны в `EmailSenderController`.

---

## 🐳 Docker

- База данных PostgreSQL поднимается из `docker-compose.yml`
- API подключается к БД через строку в `appsettings.json`
- CORS разрешает соединения с фронта (`localhost:5173`)
