import * as cartModel from './model.js';

const createCart = async (req, res) => {
  await cartModel.createCart();
  res.status(200).json({ mssg: 'Cart Created successfully!' });
};

const deleteCart = async (req, res) => {
  await cartModel.deleteCart(req.params.id);
  res.status(200).json({ mssg: 'Cart deleted successfully!' });
};

const addProductCart = async (req, res) => {
  console.log(req.params.idCart);
  await cartModel.addProductCart(req.params.idCart, req.params.idProduct);
  res
    .status(200)
    .json({ mssg: `Product ${req.params.idProduct} added successfully` });
};

const getCart = async (req, res) => {
  const cartFind = await cartModel.getCart(req.params.id);
  return res.status(200).json(cartFind);
};

const getCarts = async (req, res) => {
  const cartsFind = await cartModel.getCarts();
  return res.status(200).json(cartsFind);
};

const getProductsCart = async (req, res) => {
  const cartFind = await cartModel.getProductsCart(req.params.id);
  return res.status(200).json(cartFind);
};

const deleteProductCart = async (req, res) => {
  await cartModel.deleteProductCart(req.params.idCart, req.params.idProduct);
  res
    .status(200)
    .json({ mssg: `Product ${req.params.idProduct} DELETE successfully` });
};

export {
  createCart,
  deleteCart,
  addProductCart,
  getCart,
  getCarts,
  getProductsCart,
  deleteProductCart,
};
