const express = require('express')
const router = express.Router();
const userController = require('../controllers/userController')

router.post('/login',userController.login)
router.post('/signup',userController.signupTourist)
router.post('/signupBusiness',userController.signupBusiness)
router.post('/verifyotp', userController.verifyOtp)
router.post('/resendotp', userController.resendOtp)

module.exports = router;