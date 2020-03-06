import { combineReducers } from 'redux'

// import reducer
import loginReducer from './loginReducer'
import dataReducer from './dataReducer'

const reducer =  combineReducers({
    user : loginReducer,
    data : dataReducer
})

export default reducer