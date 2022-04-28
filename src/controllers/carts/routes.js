import { Router } from 'express';

import {
  createCart,
  deleteCart,
  addProductCart,
  getCart,
  getCarts,
  getProductsCart,
  deleteProductCart,
} from './controller.js';

const router = Router();

router.post('/', createCart);
router.post('/:idCart/products/:idProduct', addProductCart);
router.delete('/:id', deleteCart);
router.delete('/:idCart/products/:idProduct', deleteProductCart);
router.get('/', getCarts);
router.get('/:id', getCart);
router.get('/:id/products', getProductsCart);

export default router;
