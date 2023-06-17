const express = require('express');
const { signupView } = require('../../controllers/auth/signupController')
const router = express.Router();

router.get('/signup', signupView)

module.exports = router;
