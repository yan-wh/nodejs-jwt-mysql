const {db} = require('../db')
// const crypto = require('crypto')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const config = require('../config/index')

module.exports = {
    loginHandle: async (req,res)=>{
        // console.log("我是req",req.body)
        //判断用户是否存在
        const sql = 'select * from t_user where phone = ?'
        const result = await db(sql,req.body.phone)
        if(result.length !== 0){
            console.log("该用户存在")
            
            //比较密码
            
            // let enpwd = crypto.createHash('sha256').update(req.body.password + req.body.phone).digest('hex')
            
            //生成salt的迭代次数
            const saltRounds = 10;
            //随机生成salt
            const salt = bcrypt.genSaltSync(saltRounds);
            //获取hash值
            var hash = bcrypt.hashSync(req.body.password, salt);
            //把hash值赋值给password变量
            // password = hash;
            console.log("我是hash加密的密码",hash)
            
            const compare = bcrypt.compareSync(req.body.password, result[0].password)
            if(compare == true){
                console.log("密码正确")
                //生成token
                const token = jwt.sign({password: req.body.password}, config.jwtKey, {expiresIn: '1h'})
                res.send({
                    status: 200,
                    msg: '登录成功',
                    token
                })
            }else{
                console.log("密码错误")
            }
        }else{
            console.log("该用户不存在")
            res.send({
                status: 202,
                msg: '已经接受请求，但未处理完成'
            })
        }
        
    }

}