const SMS={}
window.SMS=SMS
const apiBaseUrl='http://localhost:8080/sms/'
SMS.config={   
    loginUrl:apiBaseUrl+'login',
    sendSmsUrl:apiBaseUrl+'sendSms',
    getSmsListUrl:apiBaseUrl+'getSmsList',
   // getSmsSumUrl:apiBaseUrl+'getSmsSum',
    getSmsStatUrl:apiBaseUrl+'getSmsStat',
    getChgPwdUrl:apiBaseUrl+'chgPwd',
}