require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
mongoose.connect(process.env.DB_URL).then(()=> console.log('connected to db'))
const errorHandler=require('./middleware/errorHandler')
app.use(express.json())
app.set("view engine","ejs")
app.set("views","./views")
app.use(express.static('./public'))

const welcome=require('./routes/view')
app.use('/',welcome)

const post=require('./routes/post')
app.use('/',post)

app.use(errorHandler)
app.listen(process.env.PORT,()=> console.log(`listening to port ${process.env.PORT}`))