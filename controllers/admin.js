const Pizza = require('../models/pizza')


exports.postDeleteProduct = async (req, res, next) => {
    const { prodId } = req.params

    console.log(prodId)

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

    console.log(updates)

    try {
        const product = await Pizza.findByIdAndUpdate(prodId, updates, {new: true})
        res.send(product)
    } catch (error) {
        return res.status(400).json({ messgage: error})
    }
}