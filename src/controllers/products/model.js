import { productsDao } from '../daos/index.js';

//const productsDao =  await import(`../daos/${persist}/productDao.js`); //

const getProducts = async () => {
  return await productsDao.getProducts();
};

const getProduct = async (id) => {
  return productsDao.getProduct(id);
};

const addProduct = async (prod) => {
  prod.timestamp = new Date().toLocaleString();
  await productsDao.addProduct(prod);
  return prod;
};

const updateProduct = async (id, prod) => {
  return await productsDao.updateProduct(id, prod);
};

const deleteProduct = async (id) => {
  return await productsDao.deleteProduct(id);
};

export { getProducts, getProduct, addProduct, updateProduct, deleteProduct };
