import Container from './container.js';
import productsMongo from './productsMongo.js';
import cartSchema from './schemas/cartSchema.js';

const productsDao = new productsMongo();

export default class CartsMongo extends Container {
  constructor() {
    super('carts', cartSchema);
  }

  async getCarts() {
    const carts = await this.getAll();
    return carts;
  }

  async getCart(id) {
    const cart = await this.getById(id);
    return cart;
  }

  async createCart() {
    const cart = new cartSchema({
      products: [],
    });
    cart.save().then((result) => {
      return result;
    });
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
