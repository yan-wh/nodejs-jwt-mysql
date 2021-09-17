

const request = (options) => {
    console.log("我是options",options)
    return new Promise((resolve, reject) => {
        $.ajax({
            url: options.url,
            type: options.type ? options.type: 'get',
            contentType: 'application/json',
            data: options.Data,
            success: (res) => {
                // console.log("res响应码:" , res.code);  //成功请求，想要码为自定义的2000
                if(res.code == 2000){
                    location.href = '/'
                }else if(res.code == 5010){
                    location.href = '/toRegister'
                }else{
                    console.log("登录操作发生意料外的错误，请尝试刷新页面!")
                }
                resolve(res)
            }
        })
    })
}
