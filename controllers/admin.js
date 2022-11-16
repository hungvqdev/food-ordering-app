const Pizza = require('../models/pizza')
const Order = require('../models/order')



exports.postDeleteProduct = async (req, res, next) => {
    const { prodId } = req.params

    try {
        const product = await Pizza.deleteOne({ _id : prodId})
        return res.send(product)
    } catch (error) {
        return res.status(400).json({ messgage: error})
    }


}

exports.postEditProduct = async (req, res, next) => {
    const prod  = req.body
    const { prodId } = req.params
    const updates = { name: prod.name, category: prod.category, image: prod.image, prices: [{small : prod.small, medium: prod.medium, large: prod.large }], description: prod.description}

    try {
        const product = await Pizza.findByIdAndUpdate(prodId, updates, {new: true})
        res.send(product)
    } catch (error) {
        return res.status(400).json({ messgage: error})
    }
}

exports.postAddProduct = async (req, res, next) => {
    const {name, category, image, description, large, small, medium} = req.body
    
    data = {name: name, category: category, image: image, description: description, prices: [{ small: small, medium: medium, large: large}], varients: ['small','medium', 'large']}

    try {
        const newProduct = new Pizza(data)    
        await newProduct.save()
        res.send(newProduct)
    } catch (error) {
        return res.status(400).json({ message: error})
    }
}


exports.isDeliveredOrder = async (req, res, next) => {

    const { orderId } = req.params

    try {
        const order = await Order.findByIdAndUpdate(orderId, {isDelivered: true}, {new: true})
        res.send(order)
    } catch (error) {
        return res.status(400).json({ messgage: error})
    }
}