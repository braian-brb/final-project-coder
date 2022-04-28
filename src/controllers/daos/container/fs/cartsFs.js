import Container from './container.js';
import productFs from './productsFs.js';

const productsDao = new productFs();

export default class cartFs extends Container {
  constructor() {
    super('carts.txt');
  }

  getCarts = async () => {
    const carts = await this.getAll();
    return carts;
  };

  getCart = async (id) => {
    const cart = await this.getOne(id);
    return cart;
  };

  createCart = async () => {
    const cart = {
      products: [],
      date: new Date().toLocaleString(),
    };
    const result = await this.save(cart);
    return result;
  };

  deleteCart = async (id) => {
    await this.delete(id);
    return true;
  };

  addProductCart = async (idCart, idProduct) => {
    const cartFind = await this.getCart(idCart);
    const productFind = await productsDao.getProduct(idProduct);

    cartFind.products.push(productFind);
    await this.update(idCart, cartFind);

    return cartFind;
  };

  getProductsCart = async (id) => {
    const querySnapshot = await this.getCart(id);
    const products = await querySnapshot.products;
    return products;
  };

  deleteProductCart = async (idCart, idProduct) => {
    const cartFind = await this.getCart(idCart);
    const productFind = cartFind.products.find(
      (product) => product.id === idProduct
    );
    const deletedItemIndex = cartFind.products.indexOf(productFind);
    cartFind.products.splice(deletedItemIndex, 1);
    await this.update(idCart, cartFind);

    return cartFind;
  };
}
