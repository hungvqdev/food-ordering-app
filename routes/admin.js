const express = require('express')
const router = express.Router()
const adminController = require('../controllers/admin')


router.delete('/deleteproduct/:prodId', adminController.postDeleteProduct)
router.post('/deleteselect', adminController.postDeleteSelect)
router.patch('/editproduct/:prodId', adminController.postEditProduct)
router.post('/addproduct', adminController.postAddProduct)
router.patch('/delivered/:orderId', adminController.isDeliveredOrder)
router.post('/changeuser', adminController.postChangeUser)

module.exports = router