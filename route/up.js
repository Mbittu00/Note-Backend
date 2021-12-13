const express=require('express')
const note=require('../model/Note')
const app=express.Router()
app.delete('/',(req,res)=>{
  note.findByIdAndRemove(req.body._id, function(err){
      if(err){
          res.send("not worked");
      } else {
          res.send("worked");
      }
   });
})
module.exports=app