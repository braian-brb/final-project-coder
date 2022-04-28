import Container from './container.js';

export default class productsFs extends Container {
  constructor() {
    super('products.txt');
  }

  addProduct = async (data) => {
    const product = await this.save(data);
    return product;
  };

  getProducts = async () => {
    const products = await this.getAll();
    return products;
  };

  getProduct = async (id) => {
    const product = await this.getOne(id);
    return product;
  };

  updateProduct = async (id, data) => {
    const product = await this.update(id, data);
    return product;
  };

  deleteProduct = async (id) => {
    const product = await this.delete(id);
    return product;
  };

  deleteAllProducts = async () => {
    const result = await this.deleteAll();
    return result;
  };
}
