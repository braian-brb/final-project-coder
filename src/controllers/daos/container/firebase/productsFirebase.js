import Container from './container.js';

export default class productsFirebase extends Container {
  constructor() {
    super('products');
  }

  async getProducts() {
    const products = await this.getAll();
    return products;
  }

  async getProductById(id) {
    const product = await this.getById(id);
    return product;
  }

  async createProduct(data) {
    const product = await this.create(data);
    return product;
  }

  async updateProduct(id, data) {
    const product = await this.update(id, data);
    return product;
  }

  async deleteProduct(id) {
    const product = await this.deleteById(id);
    return product;
  }

  async deleteAllProducts() {
    await this.deleteAll();
    return true;
  }
}
