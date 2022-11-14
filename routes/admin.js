const express = require('express')
const router = express.Router()
const adminController = require('../controllers/admin')


router.delete('/deleteproduct/:prodId', adminController.postDeleteProduct)
router.patch('/editproduct/:prodId', adminController.postEditProduct)

module.exports = router