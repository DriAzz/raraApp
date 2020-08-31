# RaRa's Pizzeria & Sandwiches

## **How to use** :
----
>### **Front-End**
>---
>### **`npm install`**
>
>- Installs the _**node_modules**_ for this folder. Must be in the **_rara-pizza_** directory.
>--- 
>### **`npm start`**
>- Starts the server for the application. Must be in the **_rara-pizza_**
directory.
>---

----

>### **Back-End**
>---
>### **`npm install`**
>
>- Installs the _**node_modules**_ for this folder. Must be in the _**express-backend**_
directory.
>-----
>### **`sequelize db:migrate`**
>
>### _**IMPORTANT**_
>- You must create a database before running this command.
>- *Next* check _**config.json**_ located _**/rarapizza/express-backend/config/**_
>---
_Here's what the file looks like_
---
```json
{
  "development": {
    "username": "root",         //Use your database username
    "password": "password1!",   //Use your database password
    "database": "raradata",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false,
    "define": { "timestamps" : false }
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false
  }
}
```
>- *Next* run `sequelize db:migrate`
>---
>### `nodemon`
>- Must be in _**rarapizza/backend-express/**_ directory to start the back-end server.