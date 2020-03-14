import {LOGIN_SUCCESS, REGISTER_SUCCESS, LOGIN_FAILRURE,
REGISTER_FAILURE, LOGOUT, GET_USER} from '../../types'
import {AsyncStorage} from 'react-native';


export default async(state,action) =>{
    switch(action.type) {
        case REGISTER_SUCCESS:
        try {
            await AsyncStorage.setItem('token', action.payload);
            return {
                ...state,
                loading:false,
                isAuthenticated:true
            }
            break;
        } catch (error) {
            
        }
        break;
        case GET_USER:
        return{
            ...state,
            loading:false,
            isAuthenticated:true
        }
    
        default:
            break;
    }
}