const express=require('express')
const note=require('../model/Note')
const app=express.Router()
app.get('/',(req,res)=>{
  note.find((err,data)=>{
    if(err){
      res.status(500).send(err)
    } else{
      res.status(201).send(data)
    }
  })
})
module.exports=app