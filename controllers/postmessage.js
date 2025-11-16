const Messages=require('../models/messagesSchema')

async function post(req,res){
    const message=req.body?.message;
    const name=req.body?.name;

    if((!message) || (!name)){
        const err=new Error('invalid input')
        err.status=400
        throw err
    }

    const newmessage=new Messages({message,name})
    const out=await newmessage.save()
    res.json({message:out})
}

module.exports=post