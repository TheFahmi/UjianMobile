import Axios from "axios"

export const getData = () => {
    return async (dispatch) => {
        try {
            let res = await Axios.get('https://developers.zomato.com/api/v2.1/search?start=1&count=10&sort=rating', {
                headers : {
                    'user-key' : "74b25737566cc5cfe2644bcdf3265f8e"
                }
            })
    
            dispatch({
                type : 'GET_DATA',
                payload : res.data.restaurants
            })
        } catch (err) {
            console.log(err)
            dispatch({ type : 'GET_DATA_ERROR'})
        }
    }
}

export const getDetail = () => {
    
}