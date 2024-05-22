import Order from '../models/order.js';

export const createOrder = async (req, res) => {
  const { products, total } = req.body;
  try {
    const newOrder = new Order({
      user: req.user.id,
      products,
      total
    });
    const order = await newOrder.save();
    res.json(order);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

export const getOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user.id }).populate('products.product', ['name', 'price']);
    res.json(orders);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

export const getOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id).populate('products.product', ['name', 'price']);
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.json(order);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

export const deleteOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    await order.remove();
    res.json({ message: 'Order removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
