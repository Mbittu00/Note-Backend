const express=require('express')
const mongo=require('./db')
const app=express()
let port=process.env.PORT || 4001
app.use(express.json())
mongo()
app.use('/set',require('./route/set'))
app.use('/get',require('./route/get'))
app.use('/rm',require('./route/up'))

app.listen(port)