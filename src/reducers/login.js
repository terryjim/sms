//登录成功后返回token
const login = (state = null, action) => {
    console.log(action)
    switch (action.type) {
        case 'LOGINED':
        console.log(action.token)
            return action.token;
        case 'LOGIN_FAILURE':
            return null;
        default:
            return state;
    }
}
export default login;

