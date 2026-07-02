const User = require("../model/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const sendEmail = require("../utils/sendEmail");

//token generate
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" });
};

//register a new user
const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
   console.log(req.body);

  try {
    const existingUser = await User.findOne({ email });
  
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    
    //Implement JWT token generation for authentication
    //OTP sending and verification for email confirmation
    //Welcome Mail
    
    //TODOS: Hash the password before saving to the database
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    if (user) {
      const otp = Math.floor(100000 + Math.random() * 900000).toString();

      // TODO: Save OTP in the database for verification
      // user.otp = otp;
      // await user.save();

      const message = `
      Welcome to Shopnest, ${name}!

      Thank you for registering with us.
      We are excited to have you onboard.

      Your OTP for Shopnest registration is: ${otp}
      `;

      await sendEmail(
        email,
        "Welcome to Shopnest - Your OTP for Registration",
        message
      );

      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        token: generateToken(user._id),
      });
    } else {
      res.status(400).json({
        message: "Invalid user data",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};


//login user
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        token: generateToken(user._id),
      });
    } else {
      res.status(400).json({
        message: "Invalid email or password",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};

//get user
//get users
const getUsers = async (req, res) => {
  try {
    const users = await User.find({}).select("-password");

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};

module.exports = {
  registerUser, loginUser, getUsers
};