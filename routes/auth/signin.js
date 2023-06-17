const express = require('express');
const { signinView } = require('../../controllers/auth/signinController')
const router = express.Router();

router.get('/signin', signinView)

module.exports = router;
