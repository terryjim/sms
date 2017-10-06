//短信历史记录列表
let sample = {
    'content': [
        { 'tels': '187188199,1897866567', 'content': '东区发生火灾，请速到现场[湖北城建职院]', sentTime: '2017-08-02' },
        { 'tels': '187188199,1897866567', 'content': '东区发生火灾，请速到现场[湖北城建职院]', created: '2017-08-02' },
        { 'tels': '187188199,1897866567', 'content': '东区发生火灾，请速到现场[湖北城建职院]', created: '2017-08-02' },
        { 'tels': '187188199,1897866567', 'content': '东区发生火灾，请速到现场[湖北城建职院]', created: '2017-08-02' },
        { 'tels': '187188199,1897866567', 'content': '东区发生火灾，请速到现场[湖北城建职院]', created: '2017-08-02' },
        { 'tels': '187188199,1897866567', 'content': '东区发生火灾，请速到现场[湖北城建职院]', created: '2017-08-02' },
        { 'tels': '187188199,1897866567', 'content': '东区发生火灾，请速到现场[湖北城建职院]', created: '2017-08-02' },
        { 'tels': '187188199,1897866567', 'content': '东区发生火灾，请速到现场[湖北城建职院]', created: '2017-08-02' },
        { 'tels': '187188199,1897866567', 'content': '东区发生火灾，请速到现场[湖北城建职院]', created: '2017-08-02' },
        { 'tels': '187188199,1897866567', 'content': '东区发生火灾，请速到现场[湖北城建职院]', created: '2017-08-02' },
        { 'tels': '187188199,1897866567', 'content': '东区发生火灾，请速到现场[湖北城建职院]', created: '2017-08-02' },
        { 'tels': '187188199,1897866567', 'content': '东区发生火灾，请速到现场[湖北城建职院]', created: '2017-08-02' },
        { 'tels': '187188199,1897866567', 'content': '东区发生火灾，请速到现场[湖北城建职院]', created: '2017-08-02' }
    ],
    "last": false,
    "totalElements": 817,
    "totalPages": 41,
    "number": 10,
    "size": 20,
    "numberOfElements": 20,
    "sort": [
        {
            "direction": "DESC",
            "property": "created",
            "ignoreCase": false,
            "nullHandling": "NATIVE",
            "descending": true,
            "ascending": false
        }
    ],
    "first": false
}
const sms = (state = sample, action) => {
    if (action.type === 'SMS_LIST') {
        if (action.list != null)
            state = Object.assign({},action.list)
        else
            state = null
    }
    return state;

}
export default sms;