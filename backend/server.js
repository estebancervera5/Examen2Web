const express = require('express')
const colors = require('colors')  
const connectDB = require('./config/db')
const { errorHandler } = require('./middleware/errorMiddleware')
const dotenv = require('dotenv').config()

connectDB()

const port = process.env.PORT || 5000;

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/games', require('./routes/gameRoutes'))

app.use(errorHandler)

app.listen(port, () => console.log(`Servidor iniciado en el puerto ${port}`.yellow)); 

