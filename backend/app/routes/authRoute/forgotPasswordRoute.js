const express = require('express');
const router = express.Router();
const forgotController = require('../../controllers/authController/forgotController');

router.post('/api/forgot-password', forgotController.forgotPassword);

module.exports = router;
