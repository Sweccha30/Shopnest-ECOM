const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);

require("dotenv").config();
const bcrypt = require("bcryptjs");

const connectDB = require("./config/db");

const User = require("./model/User");
const Product = require("./model/Product");

connectDB();

const seedDatabase = async () => {
  
  try {
    // Delete old data
    await User.deleteMany();
    await Product.deleteMany();

    // Hash password
    const password = await bcrypt.hash("123456", 10);

    // Create users
    const users = await User.insertMany([
      {
        name: "Admin User",
        email: "admin@shopnest.com",
        password,
        role: "admin",
      },
      {
        name: "John Doe",
        email: "john@gmail.com",
        password,
        role: "user",
      },
      {
        name: "Alice Johnson",
        email: "alice@gmail.com",
        password,
        role: "user",
      },
      {
        name: "Rahul Sharma",
        email: "rahul@gmail.com",
        password,
        role: "user",
      },
    ]);

    console.log("Users Seeded");

    const products = [
      {
        name: "iPhone 15",
        description: "Latest Apple smartphone.",
        price: 79999,
        category: "Mobiles",
        stock: 20,
        imagesUrl:
          "https://images.unsplash.com/photo-1592750475338-74b7b21085ab",
      },
      {
        name: "Samsung Galaxy S24",
        description: "Samsung flagship smartphone.",
        price: 72999,
        category: "Mobiles",
        stock: 15,
        imagesUrl:
          "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf",
      },
      {
        name: "MacBook Air M3",
        description: "Apple Laptop",
        price: 124999,
        category: "Laptops",
        stock: 8,
        imagesUrl:
          "https://images.unsplash.com/photo-1517336714739-489689fd1ca8",
      },
      {
        name: "Dell XPS 15",
        description: "High performance Windows laptop.",
        price: 99999,
        category: "Laptops",
        stock: 12,
        imagesUrl:
          "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
      },
      {
        name: "Sony WH1000XM5",
        description: "Noise cancelling headphones.",
        price: 27999,
        category: "Accessories",
        stock: 35,
        imagesUrl:
          "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
      },
      {
        name: "Boat Rockerz 550",
        description: "Wireless headphones.",
        price: 2499,
        category: "Accessories",
        stock: 50,
        imagesUrl:
          "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
      },
      {
        name: "Nike Air Max",
        description: "Comfortable running shoes.",
        price: 6999,
        category: "Footwear",
        stock: 40,
        imagesUrl:
          "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      },
      {
        name: "Adidas Ultraboost",
        description: "Premium sports shoes.",
        price: 8999,
        category: "Footwear",
        stock: 30,
        imagesUrl:
          "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519",
      },
      {
        name: "Apple Watch Series 10",
        description: "Latest smartwatch.",
        price: 45999,
        category: "Wearables",
        stock: 18,
        imagesUrl:
          "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d",
      },
      {
        name: "iPad Air",
        description: "Apple tablet with M2 chip.",
        price: 64999,
        category: "Tablets",
        stock: 14,
        imagesUrl:
          "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0",
      },
    ];
    console.log("\n==========================================");
console.log("      SHOPNEST LOGIN CREDENTIALS");
console.log("==========================================");

console.log("\n👑 ADMIN");
console.log("Email    : admin@shopnest.com");
console.log("Password : 123456");

console.log("\n👤 USER 1");
console.log("Email    : john@gmail.com");
console.log("Password : 123456");

console.log("\n👤 USER 2");
console.log("Email    : alice@gmail.com");
console.log("Password : 123456");

console.log("\n👤 USER 3");
console.log("Email    : rahul@gmail.com");
console.log("Password : 123456");

console.log("==========================================\n");

    await Product.insertMany(products);

    console.log("Products Seeded");
    console.log("Database Seeded Successfully");

    process.exit();
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

seedDatabase();