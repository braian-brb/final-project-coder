import productsMongo from '../daos/container/mongo/productsMongo.js';
import CartsMongo from '../daos/container/mongo/cartsMongo.js';
import { connectDB } from '../../utils/mongo/mongoose.js';

import ProductsFirebase from '../daos/container/firebase/productsFirebase.js';
import cartsFirebase from '../daos/container/firebase/cartsFirebase.js';

import productFs from '../daos/container/fs/productsFs.js';
import cartsFs from '../daos/container/fs/cartsFs.js';

const db = process.env.TIPO_DB || 'firebase';

let productsDao;
let cartsDao;

if (db == 'mongo') {
  productsDao = new productsMongo();
  cartsDao = new CartsMongo();
  async function main() {
    await connectDB();
  }
  main();
} else if (db == 'firebase') {
  productsDao = new ProductsFirebase();
  cartsDao = new cartsFirebase();
} else if (db == 'fs') {
  productsDao = new productFs();
  cartsDao = new cartsFs();
}

export { productsDao, cartsDao };
