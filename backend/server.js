const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()

const main = require('./routers/main')
const find = require('./routers/findOne')

const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://vadim:vadim@cluster0-shard-00-00-uenhb.azure.mongodb.net:27017,cluster0-shard-00-01-uenhb.azure.mongodb.net:27017,cluster0-shard-00-02-uenhb.azure.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority', { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });

const connetion = mongoose.connection

connetion.once('open', () => {
    console.log('DB was connected successfully')
})

app.use('/', main)
app.use('/find', find)

app.listen(process.env.PORT, () => {
    console.log('Server has been started')
})