function errorhandler(err,req,res,next){
    console.log(err.message)
    res.status(err.status || 500).json({message: 'something went wrong in the server', reason: err.message})
}
module.exports = errorhandler