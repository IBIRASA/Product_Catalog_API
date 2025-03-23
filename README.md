### Product Catalog API 🛒

Welcome to the Product Catalog API! This RESTful API is designed to manage products and categories for an e-commerce platform. It supports CRUD operations, inventory tracking, and search functionality.

### Table of Contents 📚

Setup and Installation

API Documentation

Product Endpoints

Category Endpoints

Example Requests and Responses

Assumptions and Limitations

Design Decisions

Setup and Installation ⚙️
Prerequisites
Node.js (v16 or higher)

MongoDB (local or cloud instance)

## Postman or any API testing tool

Steps
Clone the repository:

bash
Copy
git clone https://github.com/your-username/product-catalog-api.git
cd product-catalog-api
Install dependencies:

bash
Copy
npm install
Create a .env file in the root directory and add your MongoDB connection URI:

plaintext
Copy
MONGO_URI=mongodb://localhost:27017/product-catalog
Start the server:

bash
Copy
npm start
The API will be available at http://localhost:3000.

API Documentation 📖
Base URL
Copy
http://localhost:3000/api
### Product Endpoints 📦

1. Get All Products
   URL: /products

Method: GET

## Description: Retrieve a list of all products.

Response:

json
Copy
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
] 2. Get Product by ID
URL: /products/:id

Method: GET

## Description: Retrieve a single product by its ID.

Response:

json
Copy
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
} 3. Create a Product
URL: /products

Method: POST

## Description: Create a new product.

Request Body:

json
Copy
{
"name": "Laptop",
"description": "A high-performance laptop",
"price": 1200,
"categoryId": "64f1b2c8e4b0d8f8f8f8f8f9",
"variants": [
{
"size": "15 inches",
"color": "Silver",
"stock": 5
}
],
"discount": 5
}
Response:

json
Copy
{
"\_id": "64f1b2c8e4b0d8f8f8f8f8f8",
"name": "Laptop",
"description": "A high-performance laptop",
"price": 1200,
"categoryId": "64f1b2c8e4b0d8f8f8f8f8f9",
"variants": [
{
"size": "15 inches",
"color": "Silver",
"stock": 5
}
],
"discount": 5
} 4. Update a Product
URL: /products/:id

Method: PUT

## Description: Update an existing product by its ID.

Request Body:

json
Copy
{
"price": 1100
}
Response:

json
Copy
{
"\_id": "64f1b2c8e4b0d8f8f8f8f8f8",
"name": "Laptop",
"description": "A high-performance laptop",
"price": 1100,
"categoryId": "64f1b2c8e4b0d8f8f8f8f8f9",
"variants": [
{
"size": "15 inches",
"color": "Silver",
"stock": 5
}
],
"discount": 5
} 5. Delete a Product
URL: /products/:id

Method: DELETE

## Description: Delete a product by its ID.

Response:

json
Copy
{
"message": "Product deleted"
}
Category Endpoints 🗂️

1. Get All Categories
   URL: /categories

Method: GET

## Description: Retrieve a list of all categories.

Response:

json
Copy
[
{
"_id": "64f1b2c8e4b0d8f8f8f8f8f9",
"name": "Electronics",
"description": "All electronic gadgets"
}
] 2. Create a Category
URL: /categories

Method: POST

## Description: Create a new category.

Request Body:

json
Copy
{
"name": "Electronics",
"description": "All electronic gadgets"
}
Response:

json
Copy
{
"\_id": "64f1b2c8e4b0d8f8f8f8f8f9",
"name": "Electronics",
"description": "All electronic gadgets"
}
Example Requests and Responses 📨
Create a Category
Request:

bash
Copy
POST /api/categories
Content-Type: application/json

{
"name": "Electronics",
"description": "All electronic gadgets"
}
Response:

json
Copy
{
"\_id": "64f1b2c8e4b0d8f8f8f8f8f9",
"name": "Electronics",
"description": "All electronic gadgets"
}
## Create a Product
Request:

bash
Copy
POST /api/products
Content-Type: application/json

{
"name": "Laptop",
"description": "A high-performance laptop",
"price": 1200,
"categoryId": "64f1b2c8e4b0d8f8f8f8f8f9",
"variants": [
{
"size": "15 inches",
"color": "Silver",
"stock": 5
}
],
"discount": 5
}
Response:

json
Copy
{
"\_id": "64f1b2c8e4b0d8f8f8f8f8f8",
"name": "Laptop",
"description": "A high-performance laptop",
"price": 1200,
"categoryId": "64f1b2c8e4b0d8f8f8f8f8f9",
"variants": [
{
"size": "15 inches",
"color": "Silver",
"stock": 5
}
],
"discount": 5
}

## Assumptions and Limitations ⚠️

Unique Category Names: Category names must be unique.

Product Variants: Products can have multiple variants (e.g., size, color, stock).

## Inventory Tracking: Inventory is tracked at the variant level.

## Error Handling: Basic error handling is implemented for invalid inputs and missing resources.

## Scalability: The API is designed for small to medium-sized e-commerce platforms.

## Design Decisions 🎨

MongoDB: Chosen for its flexibility and scalability in handling product and category data.

## RESTful Design: Follows REST principles for consistency and ease of use.

## Modular Code: Separates concerns into models, services, controllers, and routes for maintainability.

## Error Handling: Provides meaningful error messages for better debugging.

## Validation: Ensures data integrity with input validation.
