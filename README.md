## Product Catalog API

Welcome to the Product Catalog API! This RESTful API is designed to manage products and categories for an e-commerce platform. It supports CRUD operations, inventory tracking, and search functionality, making it a robust solution for managing product data.

## Table of Contents

### Setup and Installation

### API Documentation

### Product Endpoints

### Category Endpoints

### Example Requests and Responses

### The api documentation

## Setup and Installation

### Prerequisites

Before running the Product Catalog API, ensure you have the following installed:

Node.js (v16 or higher)

MongoDB (local or cloud instance)

Postman or any API testing tool (for testing the API)

Steps to Get Started
Clone the Repository:

## git clone https://github.com/IBIRASA/Product_Catalog_API.git

Install Dependencies:

npm install
Configure MongoDB:

Create a .env file in the root directory.

Add your MongoDB connection URI:

MONGO_URI=mongodb://localhost:27017/product-catalog
Start the Server:

npm start
The API will be available at http://localhost:3000.

## API Documentation

All endpoints are prefixed with the following base URL:

http://localhost:3000/api
Product Endpoints

## Get All Products

URL: /products

Method: GET

Description: Retrieve a list of all products.

Response:

[
{
"\_id": "64f1b2c8e4b0d8f8f8f8f8f8",
"name": "Smartphone",
"description": "A high-end smartphone",
"price": 999,
"categoryId": "64f1b2c8e4b0d8f8f8f8f8f9",
"variants": [
{
"size": "6.7 inches",
"color": "Black",
"stock": 10
}
],
"discount": 10
}
]

## Get Product by ID

URL: /products/:id

Method: GET

Description: Retrieve a single product by its ID.

Response:

{
"\_id": "64f1b2c8e4b0d8f8f8f8f8f8",
"name": "Smartphone",
"description": "A high-end smartphone",
"price": 999,
"categoryId": "64f1b2c8e4b0d8f8f8f8f8f9",
"variants": [
{
"size": "6.7 inches",
"color": "Black",
"stock": 10
}
],
"discount": 10
}

## Create a Product

URL: /products

Method: POST

Description: Create a new product.

#### Request Body:

{
"name": "shoes",
"description": " Best shoes ,..",
"price": 29.99,
"categoryId": "67e0f32f5462e88aa3ef5cd3",
"variants": [
{
"size": "L",
"color": "Blue",
"stock": 40
}
],
"discount": 20
}

#### Response:

{
"name": "shoes",
"description": " Best shoes ,..",
"price": 29.99,
"categoryId": "67e0f32f5462e88aa3ef5cd3",
"variants": [
{
"size": "L",
"color": "Blue",
"stock": 40,
"_id": "67e10564a0ef5646434a2038"
}
],
"discount": 20,
"\_id": "67e10564a0ef5646434a2037",
"\_\_v": 0
}

## Update a Product

URL: /products/:id

Method: PUT

Description: Update an existing product by its ID.

#### Request Body:

{
"name" :"category3",
"description" :"heloo-category"
}
Response:

{
"\_id": "67e0f3d05462e88aa3ef5cd8",
"name": "category3",
"description": "heloo-category",
"\_\_v": 0
}

## Delete a Product

URL: /products/:id

Method: DELETE

Description: Delete a product by its ID.

Response:

{
"message": "Product deleted"
}
Category Endpoints

## Get All Categories

URL: /categories

Method: GET

Description: Retrieve a list of all categories.

Response:

[
{
"_id": "67e0f32f5462e88aa3ef5cd3",
"name": "category1",
"description": "heloo category",
"__v": 0
},
{
"_id": "67e0f36f5462e88aa3ef5cd5",
"name": "category2",
"description": "heloo category",
"__v": 0
},
{
"_id": "67e0f3d05462e88aa3ef5cd8",
"name": "category3",
"description": "heloo category",
"__v": 0
}
]

## Create a Category

URL: /categories

Method: POST

Description: Create a new category.

#### Request Body:

{
"name" :"category5",
"description" :"heloo category"
}

#### Response:

{
"name": "category5",
"description": "heloo category",
"\_id": "67e0f97d5462e88aa3ef5cf5",
"\_\_v": 0
}

## API Documentation using POSTMAN

https://documenter.getpostman.com/view/42118517/2sAYkHpe3Q
