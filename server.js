const express = require('express')
const db = require('./db')

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.send('server')
})

const port = process.env.PORT || 8000

app.listen(port, (e) => {
    console.log(e)
})