const express = require('express')
const user = require('./user.js')
const path = require('path')
var ejs = require('ejs');
const cookieSession = require('cookie-session')
const expJWT = require('express-jwt')
const config = require('./config/index')

const app = express()
const indexRouter = require('./routes/index')
const loginRouter = require('./routes/login')


//设置跨域请求
app.all("*", (req, res, next) => {
    res.header(
      "Access-Control-Allow-Origin",
      req.headers.origin || req.headers.referer || "*"
    );
    res.header(
      "Access-Control-Allow-Headers",
      "Content-Type, Authorization, X-Requested-With"
    );
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("Access-Control-Allow-Credentials", true); //可以带cookies
    res.header("X-Powered-By", "Express");
    // if (req.method == "OPTIONS") {
    //   res.sendStatus(200);
    // } else {
    //   next();
    // }
    next();
});

// 解析token
// app.use(expJWT({ secret: config.jwtKey, algorithms: ['HS256']}).unless({path: ['/login']}))

//获取req的body
app.use(express.json())
//如果你传输的内容不是string类型时，需要extended的配置改为true :
app.use(express.urlencoded({ extended: true }))


//指定静态文件目录，以下两种方法皆可
// app.use('/static', express.static(__dirname + '/static'));
app.use(express.static(path.join(__dirname, "static")));

//引入ejs模板
app.engine('.html', require('ejs').__express)
app.set('view engine', 'html')

// //设置渲染文件的目录
// app.set('views','./views');
// //设置html模板渲染引擎
// app.engine('html',ejs.__express);
// //设置渲染引擎为html
// app.set('view engine','html');

//设置路由文件
app.set('views', path.join(__dirname, 'pages'))



app.use(cookieSession({
    name: 'session',
    secret: 'user',
    maxAge: 60 * 60 *24
}))


//响应码
class Res{
    constructor(code,msg,data){
        this.code = code
        this.msg = msg
        this.data = data
    }
    static success(data){
        return new Res(2000,'请求成功',data)
    }
    static error(msg){
        msg = msg? msg:"请求失败"
        return new Res(5000,msg,null)
    }
    static nologin(){
        return new Res(5010,'用户未登录',null)
    }
}
  

//pages下页面路由

// app.get('/getData/test')相当于 app.use('/getData')+router.get('/test')
app.use('/', indexRouter)


// app.get('/index',(req,res)=>{
//     res.render('index',{
//         title: '首页'
//     })
// })


app.use('/toLogin', loginRouter)

// app.get('/tologin',(req,res)=>{
//     res.type('html');
//     res.render('login',{
//         title: '登录'
//     })
// })

app.post('/toRegister',(req,res)=>{
    res.render('register',{
        title: '注册'
    })
})


// app.get('/',(req,res)=>{
//     res.send("start!")
// })
app.post('/login',async (req,res)=>{
    let json = null
    req.on('data',(chunk)=>{
        // console.log("我是chunk数据",chunk)
        const loginInfo = Buffer.from(chunk).toString()
        console.log("我是Buffer之后的chunk",loginInfo)
        json = JSON.parse(loginInfo)
    })
    req.on('end', async ()=>{
        // console.log("此处的监听判断是否已接受完数据",json)
        const u = await user.login(json)
        if(u != null){
            req.session.userId = u.id
            console.log("我是id",u.id)
            res.send(JSON.stringify(u))  //res.send将Res.success(u)传递给了request.js，因此request可接收到响应数据和响应码
        }else{
            res.send(Res.nologin())
        }
    })
})

const port = 7000
app.listen(port,()=>{
    console.log(`Example app listening at http://localhost:${port}`)
})

// module.exports = app;