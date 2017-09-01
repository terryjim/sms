//统计总量及按月统计数量
let sample = {
    total: 1000,
    sum: 10.00,
    data: [
        { 'month': '2017-07', 'count': 15 },
        { 'month': '2017-06', 'count': 12 },
        { 'month': '2017-05', 'count': 25 },
        { 'month': '2017-04', 'count': 115 },
        { 'month': '2017-03', 'count': 215 },
        { 'month': '2017-02', 'count': 31 },
        { 'month': '2017-01', 'count': 44 },
        { 'month': '2016-12', 'count': 1 },
    ]
}
const stat = (state = sample, action) => {
    if (action.type === 'STAT') {
        state = action.list.slice()
    }  
    return state;

}
export default stat;