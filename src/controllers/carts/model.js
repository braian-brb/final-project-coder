import { cartsDao } from '../daos/index.js';

const createCart = async (cart) => {
  return await cartsDao.createCart(cart);
};

const getCart = async (id) => {
  return await cartsDao.getCart(id);
};

const getCarts = async () => {
  return await cartsDao.getCarts();
};

const updateCart = async (id, cart) => {
  return await cartsDao.updateCart(id, cart);
};

const deleteCart = async (id) => {
  return await cartsDao.deleteCart(id);
};

//AddProductCart
const addProductCart = async (idCart, idProduct) => {
  return await cartsDao.addProductCart(idCart, idProduct);
};

//getProductCart
const getProductsCart = async (id) => {
  return await cartsDao.getProductsCart(id);
};

export {
  createCart,
  getCart,
  getCarts,
  updateCart,
  deleteCart,
  addProductCart,
  getProductsCart,
};
