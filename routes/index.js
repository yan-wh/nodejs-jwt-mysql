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
// 如果使用 exports = router 的话，那么这时候exports和module.exports操作的就不是同一块内存了,
// exports指向了新的内存,实际上module.exports也指向了新的内存，但是nodejs中寻找的是module变量下的exports属性所指向的内存块,
// 如果exports和module.exports操作的不是同一个内存块的话，exports就不起作用了，所以不管怎么样，使用module.exports是万无一失的。。。