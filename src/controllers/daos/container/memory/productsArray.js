import Container from './container.js';

export default class productsArray extends Container {
  constructor() {
    super();
  }

  getProducts() {
    return this.containers;
  }

  getProduct(id) {
    return this.containers.find((container) => container.id === id);
  }

  addProduct(data) {
    const product = {
      ...data,
      id:
        Math.random().toString(36).substring(2, 15) +
        Math.random().toString(36).substring(2, 15),
    };
    this.containers.push(product);
    return product;
  }

  updateProduct(id, data) {
    const product = this.getProduct(id);
    Object.assign(product, data);
    return product;
  }
  // deleteProduct
  deleteProduct(id) {
    const product = this.getProduct(id);
    const deletedItemIndex = this.containers.indexOf(product);
    this.containers.splice(deletedItemIndex, 1);
    return product;
  }

  // deleteAll
  deleteAll() {
    this.containers = [];
  }
}
