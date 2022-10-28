const User = require('../models/user')

exports.postRegister = async (req, res, next) => {

    const { name, email, password} = req.body

    const newUser = new User({name, email, password})

    try {
        newUser.save()
        res.send('Đăng ký thành công')
    } catch (error) {
        return res.status(400).json({ message: error})
    }
}