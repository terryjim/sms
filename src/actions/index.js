let WebIM = window.WebIM
/************************************************************
 * 上方导航事件
************************************************************/
//是否登录成功
export const logined = (token) => ({
    type: 'LOGINED',
    token
})
export const loginFailure = () => ({
    type: 'LOGIN_FAILURE'
})

export const login = (userName,password) => dispatch => {
  
  //不能用headers=new Headers()，否则跨域出错
  let headers = {};
  //headers.Authorization = WebIM.config.tokenLocal
  let args = { method: 'GET', mode: 'cors', headers: headers,cache:'reload'} 
  console.log('登录')
  return dispatch(logined('qwerfasdfasdfasdfasdfasfd'))
 /* return fetch(window.SMS.config.loginUrl, args).then(response => response.json())
    .then(json => {
      if (json.Status === 200) {
        console.log('查找好友成功')
        let list = json.Data.list;
        list = list.map(child => ({ openId: child.OpenId, name: child.Cards[0].name, mobile: child.Cards[0].mobile, email: child.Cards[0].email, cards: child.Cards.map(x => ({companyName: x.companyName, title: x.title })) }))
        list.sort((param1, param2) => (param1.name).localeCompare(param2.name))
        return dispatch(getFriends(list))
      }
      else {
        alert("获取好友列表出错！")
        return null;
      }
    })*/
}

/************************************************************
 * 左侧点击事件
************************************************************/

//选择好友显示好友基础信息
export const showIntro = (openId) => ({
    type: 'SHOW_INTRO',
    openId
})

/************************************************************
 * 其它事件
************************************************************/
//刷新，1:好友　2:群组　3:组织
export const loading = (id) => (
    {
        type: 'LOADING',
        id
    }
)





function convertObjectToFormData(obj) {
    var formData = new FormData();
    for (var key in obj) {
        formData.append(key, obj[key]);
    }
    return formData;
}

