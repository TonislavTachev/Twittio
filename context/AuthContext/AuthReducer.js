import {LOGIN_SUCCESS, REGISTER_SUCCESS, LOGIN_FAILRURE,
REGISTER_FAILURE, LOGOUT, GET_USER} from '../../types'


export default(state,action) =>{
    switch (action.type) {
        case REGISTER_SUCCESS:
            return{
                ...state,
                user:action.payload,
                loading:false
            }
            break;
    
        default:
            break;
    }
}