const express = require('express')
const router = express.Router();
const serviceController = require('../controllers/serviceController')

router.post('/filter',serviceController.getServices)
router.post('/review',serviceController.postReview)

module.exports = router;