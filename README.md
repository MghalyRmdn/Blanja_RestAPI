# blanja-DB-API

Sebuah aplikasi RESTFul API dengan database MySQL yang diambil sebagai data API dan menggunakan Postman untuk melakukan testing.

# Requirement:
- Node JS
- Express JS -> npm i express
- Javascript
- MySQL -> npm i mysql

# Tools
- NPM
- Nodemon -> npm i nodemon
- Morgan -> npm i morgan
- ESLint
- Postman

# Database
Nama DB: blanja_db

Table: - products, category, history

# Endpoint
1. GET
   - localhost:8000/products
   - localhost:8000/history
   - localhost:8000/products/search
   - localhost:8000/products/sort/by-name
   - localhost:8000/products/sort/by-price
   - localhost:8000/products/sort/by-update

2. POST
   - localhost:8000/products/create-product
   - localhost:8000/history

3. PATCH
   - localhost:8000/products/update-product

4. DELETE
   - localhost:8000/delete-product-:id

# Postman
Postman Documentation:
https://www.getpostman.com/collections/e7b00c9079b587c5afa0
   

