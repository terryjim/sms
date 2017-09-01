const SMS={}
window.SMS=SMS
const apiBaseUrl='http://localhost:8080/hbcj/sms/'
SMS.config={   
    loginUrl:apiBaseUrl+'login',
    sendSmsUrl:apiBaseUrl+'sendSms',
    getSmsListUrl:apiBaseUrl+'getSmsList',
    getSmsSumUrl:apiBaseUrl+'getSmsSum',
}