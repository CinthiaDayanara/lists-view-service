# 🚀 Microservice `lists-view-service`

## 📌 Description
This microservice allows **retrieving lists** in a task management system.
It provides a REST API for viewing all lists stored in the database, ensuring efficient data access.

## 🛠️ Technologies
- Node.js
- Express.js
- PostgreSQL (AWS RDS)
- Sequelize (ORM

## 📂 Project Structure
```
lists-view-service/
│── src/
│   ├── controllers/
│   │   ├── viewController.js
│   ├── models/
│   │   ├── List.js
│   ├── routes/
│   │   ├── viewRoutes.js
│   ├── services/
│   │   ├── viewService.js ✅ (Business logic for retrieving lists)
│   ├── config/
│   │   ├── database.js
│   ├── utils/
│   │   ├── validators.js ✅ (Reusable validation functions)
│   ├── app.js
│── server.js
│── Dockerfile
│── docker-compose.yml
│── .env
│── README.md
```

## 🔧 Installation
```sh
npm install
```

## 🚀 Running the Microservice
```sh
npm start
```
Or using Docker:
```sh
docker-compose up --build
```

## 🔗 API Endpoints
### **1️⃣ Retrieve All Lists**
```sh
curl -X GET http://localhost:5017/lists
```
