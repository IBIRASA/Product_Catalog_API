# Product Catalog API

## Overview

Welcome to the Product Catalog API! This RESTful API is designed to manage products and categories for an e-commerce platform. It supports CRUD operations, inventory tracking, and search functionality, making it a robust solution for managing product data.

**API IS NOW LIVE!!!!! CHECK IT OUT [HERE](https://documenter.getpostman.com/view/42118517/2sAYkHpe3Q)**

## Table of Contents

1 .[ Installation ](#Installation) 2. [Api documentation](#documentation) -[Product](#product) -[Category](#category) -[inventory management](#inventory-management) -[Authentication](#authentication) 3.[ Api documentation link](#documentation)

## **Installation**

1. **Clone the Repository**:

   ```
   git clone https://github.com/IBIRASA/Product_Catalog_API.git

   ```

2. **Installation of dependencies**:

```
npm install
```

```

Node.js (v16 or higher)

```

3. **Configure MongoDb**:

```

MONGO_URI=mongodb://localhost:27017/product-catalog

```

```
Create a .env file in the root directory.

```

3. **Start the Server**
   ```
   npm start
   ```

## **Api documentation**

## **Product**

#### **GET** - List All Products

- **URL**: `http://localhost:3000/api/products`
- **Description**: Retrieve a list of all products.

#### **POST** - Create new product

- **URL**: `http://localhost:3000/api/products`
- **Description**: Create a new product.

#### **PUT** - Update a product

- **URL**: `http://localhost:3000/api/products/id`
- **Description**: Update a product.

#### **DELETE** - Delete a product

- **URL**: `http://localhost:3000/api/products/id`
- **Description**: Delete a product.

## **Category**

#### **GET** - List All the categories

- **URL**: `http://localhost:3000/api/categories`
- **Description**: Retrieve a list of all the categories.

#### **POST** - Create a new category

- **URL**: `http://localhost:3000/api/categories`
- **Description**:Create a new category.

#### **PUT** - Update a category

- **URL**: `http://localhost:3000/api/categories/id`
- **Description**:Update a category.

## **Inventory Management**

- **URL**: `http://localhost:3000/api/products/low-stock`
- **Description**:Get the low stock.

## **Authentication**

#### **POST** -Register

- **URL**: `http://localhost:3000/api/auth/register`
- **Description**:Register a new user

#### **POST** -Login

- **URL**: `http://localhost:3000/api/auth/login`
- **Description**:Login a new user

## **Api documentation link**

### Click [here](https://documenter.getpostman.com/view/42118517/2sAYkHpe3Q)
