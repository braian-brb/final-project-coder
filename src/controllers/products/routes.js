import { Router } from 'express';

import {
  getProducts,
  getProduct,
  addProduct,
  updateProduct,
  deleteProduct,
} from './controller.js';

const router = Router();

router.get('/', getProducts);
router.get('/:id', getProduct);
router.post('/', addProduct);
router.patch('/:id', updateProduct);
router.delete('/:id', deleteProduct);

export default router;
