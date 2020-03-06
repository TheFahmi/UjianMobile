const loginReducer = (state = { username : '', auth : false}, action) => {
    switch(action.type) {
        case 'LOG_IN' :
            return { ...state, username : action.payload }
        case 'LOG_OUT' :
            return { ...state, username : ''}
        case 'CHEK_AUTH_SUCCESS' :
            return { username : action.payload, auth : true}
        case 'CHEK_AUTH_FAIL' : 
            return { ...state, auth : true }
        default : return state
    }
}

export default loginReducer