import AsyncStorage from '@react-native-community/async-storage';
export const loginAction = (data) => {
    return {
        type : 'LOG_IN',
        payload : data
    }
}

// export const loginConfirm = () => {
//     return {
//         type : 'CONFIRM'
//     }
// }

export const checkLogin = () => {
    return async (dispatch) => {
        try {
            let username  = await AsyncStorage.getItem('username')
            console.log(username)
            if(!username) return dispatch({ type : 'CHEK_AUTH_FAIL'})
            dispatch({type : 'CHEK_AUTH_SUCCESS', payload : username})
            console.log('success')
        } catch (err) {
            dispatch({type : 'CHEK_AUTH_FAIL'})
        }
    }
}

export const logOutAction = () => {
    return {
        type : 'LOG_OUT'
    }
}