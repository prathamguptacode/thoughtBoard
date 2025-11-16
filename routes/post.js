const express=require('express')
const router=express.Router()
const post=require('../controllers/postmessage')

router.post('/new',post)

module.exports = router