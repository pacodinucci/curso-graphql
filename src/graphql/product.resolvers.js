const ProductsService = require("./../services/product.service");
const service = new ProductsService();

// Con Apollo Server se puede prescindir del async await porque el resolver resuelve la promesa.
// ej: return service.findOne(id);

const getProduct = async (_, {id}) => {
  const product = await service.findOne(id);
  return product;
}

const getProducts = async () => {
  const products = await service.find({});
  return products;
}

const addProduct = async (_, { dto }) => {
  const newProduct = await service.create(dto);
  return newProduct;
}

const updateProduct = (_, {id, dto}) => {
  return service.update(id, dto);
}

const deleteProduct = async (_, {id}) => {
  // En este caso SI es necesario el async await porque
  // tengo que devolver el ID, de lo contrario estaria
  // devolviendo un ID que ya no existe porque ya lo eliminé
  await service.delete(id);
  return id;
}

const getProductsByCategory = (parent) => {
  const id = parent.dataValues.id;
  return service.getByCategory(id);
}

module.exports = { getProduct, getProducts, addProduct, updateProduct, deleteProduct, getProductsByCategory };
