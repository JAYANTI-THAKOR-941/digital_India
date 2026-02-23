import express from 'express'
import {  createProduct, getAllProducts, getProductById } from '../controllers/productController.js';

const router = express.Router();

router.post('/create',createProduct);
router.get('/all',getAllProducts);
router.get('/:id',getProductById);

export default router;