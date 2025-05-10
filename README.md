# 🌍 Проект бронирования туров

## 📦 Технологии

- **Frontend**: React.js (`/booking`)
- **Backend**: ASP.NET Core Web API (`/TourAPI`)
- **База данных**: PostgreSQL (ручное развёртывание)
- **Email**: SMTP (Yandex)
- **Документация API**: Swagger (`/swagger`)

---

## 🚀 Развёртывание проекта

### 1. Развёртывание бэкенда на somee.com

1. Зарегистрируйтесь на [https://somee.com](https://somee.com)
2. Создайте новый сайт с типом **ASP.NET Free Hosting**
3. Перейдите в **File Manager** → создайте папку `api`
4. В Visual Studio или Rider:
   - Откройте проект `TourAPI`
   - Выполните сборку:
     ```
     dotnet publish -c Release -o ./dist
     ```
   - Зайдите в `dist` и загрузите **все файлы** из неё в папку `/api` на somee  

5. Перейдите по адресу:
   ```
   http://ИМЯ_ВАШЕГО_САЙТА.somee.com/api/swagger/index.html
   ```
   чтобы убедиться, что API работает

---

### 2. Создание базы данных PostgreSQL и загрузка данных

1. Установите и откройте **DataGrip** или pgAdmin
2. Подключитесь к вашему PostgreSQL-серверу (например: host, port, username, password)
3. Создайте новую базу данных, например: `TourDb`
4. Выполните SQL-скрипт создания таблиц:
   ```sql
   CREATE TABLE "Tours" (
     "Id" SERIAL PRIMARY KEY,
     "Image" TEXT,
     "Type" TEXT,
     "Title" TEXT,
     "Duration" TEXT,
     "Cost" TEXT,
     "Reviews" INTEGER,
     "Destination" TEXT
   );

   CREATE TABLE "Applications" (
     "Id" SERIAL PRIMARY KEY,
     "TourId" INTEGER REFERENCES "Tours"("Id") ON DELETE CASCADE,
     "FullName" TEXT,
     "Country" TEXT,
     "Email" TEXT,
     "Phone" TEXT,
     "Comment" TEXT,
     "SubmissionDate" TIMESTAMP
   );
   ```

5. Выполните SQL-скрипт вставки стартовых туров:
   ```sql
   INSERT INTO "Tours" ("Image", "Type", "Title", "Duration", "Cost", "Reviews", "Destination")
   VALUES
     ('/images/savoey.png', 'Food', 'Savoey Seafood Restaurant', '2 hours', '$30', 124, 'Phuket'),
     ('/images/railay.png', 'Nature', 'Railay Beach Exploration', '1 day', '$80', 86, 'Krabi'),
     ('/images/elephJung.png', 'Adventure', 'Elephant Jungle Sanctuary', '3 hours', '$65', 201, 'Chiang Mai');
   ```
   // нужна фотография: успешная вставка данных

6. В `appsettings.json` в проекте `TourAPI` укажите строку подключения к вашей БД:
   ```json
   "ConnectionStrings": {
     "DefaultConnection": "Host=ВАШ_ХОСТ;Port=ПОРТ;Database=TourDb;Username=ИМЯ;Password=ПАРОЛЬ"
   }
   ```

---

### 3. Развёртывание фронтенда

1. Перейдите в папку `/booking`
2. Выполните:
   ```
   npm install
   npm run build
   ```
3. В папке `booking/dist` появится готовая сборка фронтенда
4. Загрузите содержимое папки `dist` в корень сайта (в ту же директорию, где находится `/api`)  
   // нужна фотография: загрузка фронта через File Manager на somee



## ✅ Возможности проекта

- Просмотр списка туров
- Фильтрация по теме, продолжительности и направлению
- Просмотр деталей тура
- Отправка заявки на бронирование
- Отправка email пользователю и администратору
- Валидация всех полей формы
- Swagger-документация для API
- Адаптивная верстка

---

## 📬 Email-уведомления

Письма отправляются через SMTP (smtp.yandex.ru):

- Клиент получает письмо с подтверждением бронирования
- Администратор получает все данные заявки

Настройки SMTP указываются в `EmailSenderController.cs`. Используется пароль приложения.


