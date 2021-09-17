const express = require('express')
const {loginHandle} = require('../routerhandle/login')
const router = express.Router()

router.post('/', loginHandle)
module.exports = router