const mongoose=require('mongoose')
const uri=`mongodb+srv://poke:0000@cluster0.p6rfm.mongodb.net/Note?retryWrites=true&w=majority`
function mongo(){
  mongoose.connect(uri,()=>{
    console.log('connected')
  })
}
module.exports=mongo