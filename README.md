# Product Catalog API

Welcome to the Product Catalog API! This RESTful API is designed to manage products and categories for an e-commerce platform. It supports CRUD operations, inventory tracking, and search functionality, making it a robust solution for managing product data.

# Table of Contents

## Setup and Installation

## API Documentation

## Product Endpoints

## Category Endpoints

## Testing with Postman


# Setup and Installation

Before running the Product Catalog API, ensure you have the following installed:

### Node.js (v16 or higher)

### MongoDB (local or cloud instance)

# Steps to Get Started

## Clone the Repository:

git clone https://github.com/IBIRASA/Product_Catalog_API.git

## Install Dependencies:

npm install
Configure MongoDB:

Create a .env file in the root directory.

Add your MongoDB connection URI:

MONGO_URI=mongodb://localhost:27017/product-catalog
Start the Server:

npm start
The API will be available at http://localhost:3000.

# API Documentation

All endpoints are prefixed with the following base URL:

http://localhost:3000/api

# Product Endpoints

#### Get All Products

URL: /products

Method: GET

Description: Retrieve a list of all products.

## Get Product by ID

URL: /products/:id

Method: GET

Description: Retrieve a single product by its ID.

## Create a Product

URL: /products

Method: POST

Description: Create a new product.

## Update a Product

URL: /products/:id

Method: PUT

Description: Update an existing product by its ID.

## Delete a Product

URL: /products/:id

Method: DELETE

Description: Delete a product by its ID.

# Get All Categories

URL: /categories

Method: GET

Description: Retrieve a list of all categories.

## Create a Category

URL: /categories

Method: POST

Description: Create a new category.

## API Documentation using POSTMAN


[API  DESIGN Documentation](https://documenter.getpostman.com/view/42118517/2sAYkHpe3Q)
