const express = require('express')
const jwt = require('jsonwebtoken')
const config = require('../config/index')
const router = express.Router()

router.post('/', (req, res)=>{
    var requestToken = ''
    if(req.headers.authorization && req.headers.authorization.split(' ')[0] == 'Bearer'){
        requestToken = req.headers.authorization.split(' ')[1]
    }else if(req.query && req.query.token){
        requestToken = req.query.token
    }

    jwt.verify(requestToken, config.jwtKey, (err,decode)=>{
        if(err){
            res.send({
                status: '0',
                msg: '请重新登录'
            })
        }else{
            res.send({
                status: '1',
                msg: 'token于有效期内',
                user: decode
            })
        }
    })
})

module.exports = router