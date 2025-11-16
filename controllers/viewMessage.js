const Messages=require('../models/messagesSchema')

async function view(req,res) {
    const messages=await Messages.find()
    // res.json({messages})
    res.render('../views/index',{messages})
}

module.exports = view