module.exports = function(connection, Sequelize) {
  const Product = connection.define(
    "Product",
    {
      item_id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      product_name: Sequelize.STRING,
      department_name: Sequelize.STRING,
      price: Sequelize.STRING,
      stock_quantity: {
        type: Sequelize.INTEGER,
        validate: { min: 1 }
      }
    },
    { timestamps: false }
  );

  return Product;
};
