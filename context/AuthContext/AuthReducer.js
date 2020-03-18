import {LOGIN_SUCCESS, REGISTER_SUCCESS, LOGIN_FAILRURE,
REGISTER_FAILURE, LOGOUT, GET_USER} from '../../types'
import {AsyncStorage} from 'react-native';


export default(state,action) =>{

    switch(action.type) {
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
        AsyncStorage.setItem('token', action.payload);
        return{
            ...state,
            isAuthenticated:true,
            loading:false,
            user:action.payload
        }

        
        case GET_USER:
         return {
             ...state,
             user:action.payload,
             isAuthenticated:true
         }
         break;

        case LOGOUT:
        AsyncStorage.removeItem('token');
         return{
             ...state,
             isAuthenticated:false
         }
         break;



        default:
            break;
    }
}