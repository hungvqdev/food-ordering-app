const express = require('express')
const router = express.Router()
const pizzaController = require('../controllers/pizza')

router.get('/allpizza',pizzaController.getPizza)

router.post('/placeorder', pizzaController.postOrder)

router.post('/userorders', pizzaController.getUserOrders)

module.exports = router