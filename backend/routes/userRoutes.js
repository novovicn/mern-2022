const express = require('express');
const { registerUser, loginUser, getUserProfile } = require('../controllers/userController');
const protect = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/', registerUser)
router.post('/login', loginUser)
router.post('/profile', protect, getUserProfile);


module.exports = router;