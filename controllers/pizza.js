const Pizza = require('../models/pizza')
const Order = require('../models/order');
const stripe = require('stripe')('sk_test_51LleMUFld5FTAPzbhy8Nl9evH4hbj1JFRfRxvYz7q4GeQYrlykHlxKfy55Sn82ZPwcg5UdizkkGI9pq7wcEuVmP300HcEkVw4j')
const { v4: uuidv4 } = require('uuid');


exports.getPizza = async (req, res, next) => {
    try {
        const pizzas = await Pizza.find({})
        res.send(pizzas)
    } catch (error) {
        return res.status(400).json({ message: error})
    }
}

exports.getOrders = async (req, res, next) => {
    try {
        const orders = await Order.find({}).sort({"createdAt":-1})
        res.send(orders)
    } catch (error) {
        return res.status(400).json({ message: error})
    }
}

exports.postOrder = async (req, res, next) => {
    const {token, totalCart, currentUser, cartItems} = req.body

    try {
        const customer = await stripe.customers.create({
            email: token.email,
            source: token.id
        })
        const payment = await stripe.charges.create({
            amount: totalCart*1000,
            currency: 'VND',
            customer: customer.id,
            receipt_email: token.email
        }, {
            idempotencyKey: uuidv4()
        })
        if(payment) {
            const newOrder = new Order({
                name : currentUser.name,
                email : currentUser.email ,
                userId : currentUser._id ,
                orderItems : cartItems , 
                orderAmount : totalCart,
                shippingAddress : {
                    street : token.card.address_line1,
                    city : token.card.address_city,
                    country : token.card.address_country,
                    pincode : token.card.address_zip
                },
                transactionId : payment.source.id
            })
            newOrder.save()
  
            res.send('Order placed successfully')
        }else {
            res.send('Payment failed')
            console.log('failed')
        }
    } catch (error) {
        return res.status(400).json({ message: error})
    }
}

exports.getUserOrders = async (req, res, next) => {
    const {userId} = req.body
    try {
        const orders = await Order.find({userId: userId})
        res.send(orders)
    } catch (error) {
        return res.status(400).json({ message: error})
    }
}