const express = require("express");


const { protect } = require('../middleware/authMiddleware');
const { admin } = require('../middleware/adminMiddleware');
const { getProducts , getProductById, createProduct, updateProduct, deleteProduct } = require('../controller/productController');

const multer = require('multer');          //form data from postmans e file upload krne ke liye
const upload= multer({ dest: 'uploads/' });

const router = express.Router();

//all products
router.route('/').get(getProducts).post(protect, admin, upload.single('image') ,  createProduct);     //multer used

router.route('/:id').get(getProductById).put(protect, admin, upload.single('image') , updateProduct).delete(protect, admin , deleteProduct);
//all user dekh paye but aagr sirf login walo ko permission deni hai to protect lga do



module.exports = router;                   //imp
