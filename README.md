# 🛒 ShopNest - MERN E-Commerce Platform

A full-stack MERN e-commerce application that enables users to browse products, manage their shopping cart, place orders using Cash on Delivery (COD), and allows administrators to manage products and orders through a dedicated dashboard.

---

## 🚀 Features

### 👤 User Features

* User Registration & Login
* JWT Authentication
* Browse Products
* Product Details Page
* Shopping Cart
* Quantity Management
* Cash on Delivery (COD) Checkout
* Order Placement
* User Profile
* Order Success Page
* Responsive Design

---

### 🛠️ Admin Features

* Admin Dashboard
* Add Products
* Edit Products
* Delete Products
* Manage Orders
* View Registered Users
* Analytics Dashboard

---

## 🛠️ Tech Stack

### Frontend

* React.js
* React Router DOM
* Redux Toolkit
* Context API
* CSS3

### Backend

* Node.js
* Express.js
* JWT Authentication
* Multer
* Nodemailer

### Database

* MongoDB
* Mongoose

### Tools

* Git
* GitHub
* Cloudinary
* Postman

---

## 📁 Project Structure

```
Shopnest-ECOM/
│
├── backend/
│   ├── config/
│   ├── controller/
│   ├── middleware/
│   ├── model/
│   ├── routes/
│   ├── uploads/
│   └── utils/
│
├── frontend/
│   ├── src/
│   │   ├── admin/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── redux/
│   │   └── styles/
│   └── public/
│
└── package.json
```

---

## 🔐 Authentication

The application uses JWT (JSON Web Token) based authentication.

* User Registration
* User Login
* Protected Routes
* Admin Authorization
* Persistent Login

---

## 🛍️ Shopping Flow

```
Home
   ↓
Products
   ↓
Product Details
   ↓
Add to Cart
   ↓
Cart
   ↓
Checkout
   ↓
Cash on Delivery
   ↓
Order Success
```

---

## 📦 Installation

### Clone Repository

```bash
git clone https://github.com/Sweccha30/Shopnest-ECOM.git
```

### Install Dependencies

```bash
npm install
cd backend
npm install
cd ../frontend
npm install
```

### Environment Variables

Create a `.env` file inside the **backend** directory.

Example:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
EMAIL_USER=your_email
EMAIL_PASS=your_app_password
```

---

## ▶️ Run the Project

Start both frontend and backend:

```bash
npm run dev
```

Or separately:

Backend

```bash
cd backend
npm run dev
```

Frontend

```bash
cd frontend
npm start
```

---

## 📸 Screenshots

Add screenshots of the following pages after deployment:

* Home Page
* Product Listing
* Product Details
* Shopping Cart
* Checkout
* Admin Dashboard
* Orders Page

---

## 📌 Future Improvements

* Razorpay Integration
* Wishlist
* Product Reviews & Ratings
* Search & Filters
* Coupon System
* Online Payments
* Order Tracking
* Email Notifications
* Dark Mode

---

## 📚 Learning Outcomes

This project helped me gain practical experience with:

* MERN Stack Development
* REST API Design
* JWT Authentication
* MongoDB & Mongoose
* Redux Toolkit
* React Context API
* Express Middleware
* File Uploads
* CRUD Operations
* State Management
* Git & GitHub

---

## 🤝 Contributing

Contributions are welcome.

1. Fork the repository.
2. Create a new feature branch.
3. Commit your changes.
4. Push the branch.
5. Open a Pull Request.

---

## 👨‍💻 Author

**Sweccha Yadav**

GitHub: https://github.com/Sweccha30

---

⭐ If you found this project useful, consider giving it a star.
