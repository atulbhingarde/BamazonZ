const db = require("../models");

const items = [
  {
    product_name: "Refridgerator",
    department_name: "Appliances",
    price: 3999.99,
    stock_quantity: 20
  },
  {
    product_name: "Washer",
    department_name: "Appliances",
    price: 599.99,
    stock_quantity: 10
  },
  {
    product_name: "Microwave",
    department_name: "Appliances",
    price: 199.99,
    stock_quantity: 15
  },
  {
    product_name: "Hard Drive",
    department_name: "Computers",
    price: 105.99,
    stock_quantity: 100
  },
  {
    product_name: "Keyboard",
    department_name: "Computers",
    price: 25.99,
    stock_quantity: 50
  },
  {
    product_name: "Mouse",
    department_name: "Computers",
    price: 19.99,
    stock_quantity: 50
  },
  {
    product_name: "iPod",
    department_name: "Music",
    price: 199.99,
    stock_quantity: 20
  },
  {
    product_name: "SanDisk",
    department_name: "Music",
    price: 80.99,
    stock_quantity: 10
  },
  {
    product_name: "Headphone",
    department_name: "Music",
    price: 6.99,
    stock_quantity: 20
  },
  {
    product_name: "TV",
    department_name: "Clearance",
    price: 495.99,
    stock_quantity: 20
  }
];

db.sequelize.sync({ force: true }).then(function() {
  db.Product.bulkCreate(items)
    .then(function(rows) {
      console.log("\n\nINSERTED\n\n");
      db.sequelize.close();
    })
    .catch(function(err) {
      console.log("\n\nError:", err);
      db.sequelize.close();
    });
});
