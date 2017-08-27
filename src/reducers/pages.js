const pages = (state ={total:21,currentPage:10}, action) => {
    if (action.type === 'CHANGE_PAGE') {
        alert(action.currentPage)
        state = Object.assign({},{total:state.total,currentPage:action.currentPage})
    }
     if (action.type === 'LOGIN_FAILURE') {
        state = null
    }
    return state;

}
export default pages;