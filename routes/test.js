const jwt = require('jsonwebtoken')
const express = require('express')
const router = express.Router()
const config = require('../config/index')

router.post('/', (req,res)=>{
    var token = ''
    if(req.headers.authorization && req.headers.authorization.split(" ")[0] === 'Bearer'){
        token = req.headers.authorization.split(" ")[1]
    }else if(req.query && req.query.token){
        token = req.query.token
    }

    jwt.verify(token, config.jwtKey, (err,decoded)=>{
        if(err){
            res.send({
                status: 0,
                msg: "未授予token或token已过期",
            })
        }else{
            res.send({
                status: 1,
                msg: "token验证成功",
                user: decoded
            })
        }
    })
})
module.exports = router