import Container from './container.js';

import productsArray from './productsArray.js';

const productsDao = new productsArray();

export default class cartsArray extends Container {
  constructor() {
    super();
  }

  getCarts() {
    return this.containers;
  }

  getCart(id) {
    return this.containers.find((container) => container.id === id);
  }

  createCart() {
    const cart = {
      products: [],
      id:
        Math.random().toString(36).substring(2, 15) +
        Math.random().toString(36).substring(2, 15),
    };
    this.containers.push(cart);
    return cart;
  }

  deleteCart(id) {
    const cart = this.getCart(id);
    const deletedItemIndex = this.containers.indexOf(cart);
    this.containers.splice(deletedItemIndex, 1);
    return cart;
  }

  addProductCart(idCart, idProduct) {
    const cartFind = this.getCart(idCart);
    const productFind = productsDao.getProduct(idProduct);
    cartFind.products.push(productFind);
    this.update(idCart, cartFind);
    return cartFind;
  }

  getProductsCart(id) {
    const querySnapshot = this.getCart(id);
    const products = querySnapshot.products;
    return products;
  }

  deleteProductCart(idCart, idProduct) {
    const cartFind = this.getCart(idCart);
    const productFind = cartFind.products.find(
      (product) => product.id === idProduct
    );
    const deletedItemIndex = cartFind.products.indexOf(productFind);
    cartFind.products.splice(deletedItemIndex, 1);
    this.update(idCart, cartFind);
    return cartFind;
  }

  deleteAll() {
    this.containers = [];
  }
}
