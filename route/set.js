const express=require('express')
const note=require('../model/Note')
const app=express.Router()
app.post('/',(req,res)=>{
  note.create(req.body,(err,data)=>{
    if(err){
      res.status(500).send(err)
    } else{
      res.status(201).send(data)
    }
  })
})
module.exports=app