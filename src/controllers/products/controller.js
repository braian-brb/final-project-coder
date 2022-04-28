import * as productModel from './model.js';

const getProducts = async (req, res) => {
  const products = await productModel.getProducts();
  console.log(products);
  return res.status(200).json(products);
};

const getProduct = async (req, res) => {
  const productFind = await productModel.getProduct(req.params.id);
  return res.status(200).json(productFind);
};

const addProduct = async (req, res) => {
  //req.body.timestamp = new Date().toLocaleString();
  productModel.addProduct(req.body);
  return res.status(200).json({ mssg: 'CREATE' });
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  console.log(`Controller: ${req.body.name}`);
  await productModel.updateProduct(id, req.body);
  return res.status(200).json({ mssg: 'UPDATE' });
};

const deleteProduct = async (req, res) => {
  await productModel.deleteProduct(req.params.id);
  return res.status(200).json({ mssg: 'DELETE' });
};

export { getProducts, getProduct, addProduct, updateProduct, deleteProduct };
