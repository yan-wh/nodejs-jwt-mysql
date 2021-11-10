const mysql = require("mysql")

const config = {
    database: "table_data_demo",
    user: "root",
    password: "root"
}

// exports.db 与 module.exports.db 是等价的
exports.db = (sql,sqlParams)=>{
    sqlParams = sqlParams? sqlParams:[]
    return new Promise((resolve,reject)=>{
        const pool = mysql.createPool(config)
        pool.getConnection((err,connection)=>{
            if(!err){
                connection.query(sql,sqlParams,(e,results)=>{
                    if(!e){
                        resolve(results)
                        console.log("读取数据库的数据如下:",results)
                        connection.destroy()
                    }else{
                        reject(e)
                        console.log("读取失败",e.message)
                    }
                })
            }else{
                reject(err)
                console.log("连接失败",err.message)
            }
        })
    })
}



// const mysql =  require('mysql')

// const config = {
//     database: 'table_data_demo',
//     user: 'root',
//     password: 'root'
// }

// //前端发送ajax请求异步获取数据（数据处理）
// // sqlParams数据类型 => [], {}, [{}, id]
// exports.db =  (sql,sqlParams)=>{
//     sqlParams = sqlParams == null ? [] : sqlParams
//     // sqlParams = sqlParams || []
//     return new Promise((resolve,reject)=>{
//         const pool = mysql.createPool(config)
//         // res.end() 终结响应处理流程。简单来说就是 如果服务器端没有数据返回到客户端 那么就可以用 res.end
//         // res.send() 发送各种类型的响应。但是 如果 服务器端有数据返回到客户端 这个时候必须用res.send ,不能用 res.end（会报错）
//         pool.getConnection((err,connection)=>{
//             if(!err){
//                 connection.query(sql,sqlParams,(e,results)=>{
//                     if(!e){
//                         console.log("我是与数据库匹配的数据:",results)  //数组
//                         resolve(results)
//                         connection.destroy()
//                     }else{
//                         console.log('sql异常：',e)
//                         reject(e)
//                     }
//                 })
//             }else{
//                 console.log('connect异常：',err)
//                 reject(err)
//             }
//         })
//     })
    
// }
