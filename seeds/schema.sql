-- Drops the bamazonsqlize if it exists currently --
DROP DATABASE IF EXISTS bamazon_db;
-- Creates the "bamazonsqlize" database --


USE bamazon_db;

CREATE TABLE products (
  item_id INT NOT NULL,
  product_name VARCHAR(40) NULL,
  department_name VARCHAR(100) NULL,
  price DECIMAL(10,2) NULL,
  stock_quantity INT NULL
);