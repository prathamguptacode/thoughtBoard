const express = require('express')
const router = express.Router()
const view=require('../controllers/viewMessage')

router.get('/',view)

module.exports = router