import Container from './container.js';
import productSchema from './schemas/productSchema.js';

export default class productsMongo extends Container {
  constructor() {
    super('products', productSchema);
  }

  async getProducts() {
    const products = await this.getAll();
    return products;
  }

  async getProduct(id) {
    const product = await this.getById(id);
    return product;
  }

  async addProduct(data) {
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

  async deleteAll() {
    const result = await super.deleteAll();
    return result;
  }
}
