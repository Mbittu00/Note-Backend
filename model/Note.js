const mongoose=require('mongoose');
  const Notemodel = mongoose.Schema({
    title:  String,
    note:String
  });
  module.exports=mongoose.model('Note',Notemodel)