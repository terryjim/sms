const pages = (state ={total:21,currentPage:10}, action) => {
    if (action.type === 'CHANGE_PAGE') {       
        state = Object.assign({},{total:state.total,currentPage:action.currentPage})
    }
   
    return state;

}
export default pages;