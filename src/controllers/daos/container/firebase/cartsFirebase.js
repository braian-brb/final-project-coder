import ProductsFirebase from '../firebase/productsFirebase.js';
import Container from './container.js';

const productsDao = new ProductsFirebase();

export default class cartsFirebase extends Container {
  constructor() {
    super('carts');
  }

  createCart = async () => {
    const newCart = {
      products: [],
      timestamp: new Date().toLocaleString(),
    };
    const cart = await this.create(newCart);
    return cart;
  };

  async getCart(id) {
    const cart = await this.getById(id);
    return cart;
  }

  async getCarts() {
    const carts = await this.getAll();
    return carts;
  }

  async deleteCart(id) {
    const cart = await this.deleteById(id);
    return cart;
  }

  async addProductCart(idCart, idProduct) {
    const cartFind = await this.getCart(idCart);
    const productFind = await productsDao.getProductById(idProduct);

    cartFind.products.push(productFind);
    await this.update(idCart, cartFind);

    return cartFind;
  }

  async getProductsCart(id) {
    const querySnapshot = await this.getCart(id);
    const products = await querySnapshot.products;
    return products;
  }

  async deleteProductCart(idCart, idProduct) {
    const cartFind = await this.getCart(idCart);
    const productFind = cartFind.products.find(
      (product) => product.id === idProduct
    );
    const deletedItemIndex = cartFind.products.indexOf(productFind);
    cartFind.products.splice(deletedItemIndex, 1);
    await this.update(idCart, cartFind);
    return cartFind;
  }
}
