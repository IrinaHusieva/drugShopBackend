import express from 'express';
import { createOrder } from '../../controllers/orders-controller.js';
const routerOrder = express.Router();

routerOrder.post('/api/orders', createOrder);
export default routerOrder;