//是否登录成功
export const logined = ({ token, userName }) => ({
  type: 'LOGINED',
  token,
  userName
})
//根据指定页面查询记录
/* export const getListByPage = (page) => dispatch => {
  dispatch(getResult([
    { 'tels': '187188199,1897866567', 'content': '东区发生火灾，请速到现场[湖北城建职院]', sentTime: '2017-08-02' },
    { 'tels': '187188199,1897866567', 'content': '东区发生火灾，请速到现场[湖北城建职院]', sentTime: '2017-08-02' },
    { 'tels': '187188199,1897866567', 'content': '东区发生火灾，请速到现场[湖北城建职院]', sentTime: '2017-08-02' }
  ]))
} */
export const getResult = (json) => (
  {
    type: 'SMS_LIST',
    list: json
  }
)
export const changePage = (page) => dispatch => {
  dispatch(getResult([
    { 'tels': '187188199,1897866567', 'content': '东区发生火灾，请速到现场[湖北城建职院]', sentTime: '2017-08-02' },
    { 'tels': '187188199,1897866567', 'content': '东区发生火灾，请速到现场[湖北城建职院]', sentTime: '2017-08-02' },
    { 'tels': '187188199,1897866567', 'content': '东区发生火灾，请速到现场[湖北城建职院]', sentTime: '2017-08-02' }
  ]))
  return dispatch(changePage2(page))
}
export const changePage2 = (page) =>
  ({
    type: 'CHANGE_PAGE',
    currentPage: page
  }
  )

export const loginFailure = () => ({
  type: 'LOGIN_FAILURE'
})
//用户管辖的部门列表
export const userDepts = (depts) => ({
  type: 'USER_DEPTS',
  depts
})
export const stat = (json) => (
  {
    type: 'STAT',
    stat: json
  }
)
export const login = ({ userName, password }) => dispatch => {
  //不能用headers=new Headers()，否则跨域出错
  /*let headers = { 'Content-Type': 'application/x-www-form-urlencoded' };*/
  let headers = { 'Content-Type': 'application/json' };

  //headers.Authorization = WebIM.config.tokenLocal
  let body = JSON.stringify({
    userName, password
  })

  let args = { method: 'POST', mode: 'cors', headers: headers, body, cache: 'reload' }
  console.log('登录')
  dispatch(loading())
  // return dispatch(logined('qwerfasdfasdfasdfasdfasfd'))
  return fetch(window.SMS.config.loginUrl, args).then(response => {
    return (response.json())
  })
    .then(json => {
      console.log(json)
      if (json != null && json.token != null && json.token != '') {
        console.log('登录成功')
        dispatch(loaded())
        return dispatch(logined({ token: json.token, userName }))
      }
      else {
        console.log('登录失败')
        alert('用户名或密码错误，请重新登录！')
        return dispatch(loaded())
      }
    }).catch(e => {
      console.log(e);
      alert('网络异常，请稍后再试！')
      return dispatch(loaded())
    }
    )
}

export const sendSms = (json) => dispatch => {
  //不能用headers=new Headers()，否则跨域出错
  /*let headers = { 'Content-Type': 'application/x-www-form-urlencoded' };*/
  let headers = { 'Content-Type': 'application/json' };

  //headers.Authorization = WebIM.config.tokenLocal

  let args = { method: 'POST', mode: 'cors', headers: headers, body: json, cache: 'reload' }
  console.log('短信发送')
  dispatch(loading())
  // return dispatch(logined('qwerfasdfasdfasdfasdfasfd'))
  return fetch(window.SMS.config.sendSmsUrl, args).then(response => response.json()).then(json => {

    console.log(json)
    /*if (json != null && json.token != null && json.token != '') {
      console.log('登录成功')      
      dispatch(loaded())
      return dispatch(logined({token:json.token,userName}))
    }
    else {
      console.log('登录失败')
      alert('用户名或密码错误，请重新登录！')
      
    }*/
    if (json != '1#1') {
      alert('发送失败')
    } else {
      alert('发送成功!')
    }
    return dispatch(loaded())

  }).catch(e => {
    console.log(e);
    alert('发送异常，请稍后再试！')
    return dispatch(loaded())
  }
    )
}
//页面刷新中
export const loading = () => (
  {
    type: 'LOADING'
  }
)
//页面刷新中
export const loaded = () => (
  {
    type: 'LOADED'
  }
)




function convertObjectToFormData(obj) {
  var formData = new FormData();
  for (var key in obj) {
    formData.append(key, obj[key]);
  }
  return formData;
}

