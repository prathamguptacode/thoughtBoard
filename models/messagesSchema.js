const mongoose=require('mongoose')
const messagesSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    },
    postedAt:{
        type:Date,
        required:true,
        default:Date.now
    }
})

module.exports = mongoose.model('messages',messagesSchema)