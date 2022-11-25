const express = require('express')
const db = require('./db')
const cors = require('cors');
const app = express()
require('dotenv').config();
const path = require('path')

const pizzaRouter = require('./routes/pizza')
const authRouter = require('./routes/auth')
const adminRouter = require('./routes/admin')

app.use(cors());
app.use(express.json())

app.use('/api/pizza/', pizzaRouter)
app.use('/api/users/', authRouter)
app.use('/api/admin/', adminRouter)

app.get('/', (req, res) => {
    res.send('server is running')
})

const port = process.env.PORT || 8000

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})