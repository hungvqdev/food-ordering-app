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

exports.postLogin = async (req, res, next) => {

    const { email, password} = req.body

    try {
        const user = await User.find({email, password})

        if(user.length > 0) {
            const currentUser = {
                name: user[0].name,
                email: user[0].email,
                isAdmin: user[0].isAdmin,
                _id: user[0]._id
            }
            return res.send(currentUser)
        }else {
            return res.status(400).json({ messgage: "Đăng nhập thất bại"})
        }
        
    } catch (error) {
        return res.status(400).json({ messgage: error})
    }
}