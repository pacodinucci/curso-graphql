const { getProduct, getProducts, addProduct, updateProduct, deleteProduct, getProductsByCategory} = require("./product.resolvers");
const { login } = require("./auth.resolvers");
const { addCategory, getCategory } = require("./category.resolvers");
const { RegularExpression } = require("graphql-scalars");
const { get } = require("../routes/products.router");

const CategoryNameType = new RegularExpression("CategoryNameType", /^[a-zA-Z0-9]{3,8}$/)

const resolvers = {
  Query: {
    hello: () => "Hola mundo",
    getPerson: (_, args) => `Hello, my name is ${args.name}, I'm ${args.age} years old.`,
    getInt: () => 1,
    getFloat: (_, args) => args.price,
    getBoolean: () => true,
    getID: () => "134-56b",
    getString: () => ["pedro","juan"],
    getNumbers: (_, args) => args.numbers,
    // Products
    product: getProduct,
    products: getProducts,
    category: getCategory
  },
  Mutation: {
    addProduct,
    updateProduct,
    deleteProduct,
    login,
    addCategory
  },
  CategoryNameType,
  Category: {
    products: getProductsByCategory
  }
}

module.exports = resolvers;
