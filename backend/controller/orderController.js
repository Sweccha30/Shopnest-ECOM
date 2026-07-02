const Order = require("../model/Order");

const sendEmail = require("../utils/sendEmail");

// Get all orders (Admin)
const myOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user._id})
      .populate("items.productId", "name price");
    res.json(orders);
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};

// Get logged-in user's orders
const getOrders = async (req, res) => {
  try {
    const orders = await Order.find({})
  .populate("user", "name email")
  .populate("items.productId", "name price");
    res.json(orders);
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};

// Create Order
// Create Order
const createOrder = async (req, res) => {
  try {
    const {
      items,
      totalAmount,
      address,
      paymentMethod,
      paymentId,
    } = req.body;

    if (!items || items.length === 0 || !totalAmount || !address) {
      return res.status(400).json({
        message: "Invalid order data",
      });
    }

    const order = new Order({
      user: req.user._id,
      items,
      totalAmount,
      address,
      paymentMethod: paymentMethod || "COD",
      paymentId: paymentId || null,
    });

    await order.save();

    const message = `
Dear ${req.user.name},

Thank you for shopping with ShopNest!

Your order has been placed successfully.

Order ID: ${order._id}
Total Amount: ₹${order.totalAmount}
Payment Method: ${order.paymentMethod}
Order Status: ${order.status}

We are preparing your order and will notify you once it has been shipped.

Thank you for choosing ShopNest!

Regards,
Team ShopNest
`;

  //  await sendEmail(req.user.email, "Order Created", message);

    res.status(201).json({
      message: "Order created successfully",
      order,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error creating order",
      error: error.message,
    });
  }
};

// Update Order Status (Admin)
const updateOrderStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const order = await Order.findById(req.params.id);

    if (order) {
      order.status = status;

     await order.save();
      res.json({ message: 'Order status updated', order });
    } else {
      res.status(404).json({
        message: "Order not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};

module.exports = {
  createOrder,
  myOrders,
  getOrders,
  updateOrderStatus,
};
