const express = require('express')
const db = require('./db')

const app = express()

const Pizza = require('./models/pizza')
const pizzaRouter = require('./routes/pizza')
const authRouter = require('./routes/auth')

app.use(express.json())

app.use('/api/pizzas/', pizzaRouter)
app.use('/api/users/', authRouter)

app.get('/', (req, res) => {
    res.send('server')
})

const port = process.env.PORT || 8000

app.listen(port, (e) => {
    console.log(e)
})