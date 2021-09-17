const {db} = require('./db.js')

const user = {
    //根据手机号获取用户信息
    getUserByPhone: async (phone)=>{
        // const sql = 'select id, phone, password, nickname,head_img, personal_sign, level_id from t_user where phone = ? and is_del = 0';
        const sql = 'select id, phone, password, nickname,head_img, personal_sign, level_id from t_user where phone = ?';
        return await db(sql,[phone])
    },
    //用户登录
    login: async json=>{
        // console.log("我是json",json)
        const User = await user.getUserByPhone(json.phone)
        // console.log("返回的User",User)
        return await User[0]
    },
}
module.exports = user