const express = require('express');
const router = express.Router();

const SignUpController = require('../app/controllers/SignUpController');
//slug: bien dong
router.get('/stored/sign_up_hospital', SignUpController.StoreSignuphospital);


module.exports = router;
