import { Order } from '../models/Order.js';

export const createOrder = async (req, res) => {
  try {
    const { customer, items, total } = req.body;
    
    const newOrder = new Order({
      customer,
      items,
      total,
    });

    const savedOrder = await newOrder.save();

    res.status(201).json(savedOrder);
  } catch (error) {
    console.error('Error creating order:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};