const dataReducer = (state = {data : []}, action) => {
    switch(action.type) {
        case 'GET_DATA' :
            return { data : action.payload}
        case 'GET_DATA_ERROR' :
            return { data : []}
        default : return state
    }
}

export default dataReducer