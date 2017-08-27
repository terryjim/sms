import { combineReducers } from 'redux'
/* import { reducer as formReducer } from 'redux-form' */
import user from './user'
import sms from './sms'
import pages from './pages'
import stat from './stat'
// export default combineReducers({user,form:formReducer,sms})
export default combineReducers({user,sms,pages,stat})

