import React,{useReducer} from 'react'
import AuthContext from './authContext'
import AuthReducer from './AuthReducer'
import {LOGIN_SUCCESS, REGISTER_SUCCESS, LOGIN_FAILURE, REGISTER_FAILURE, LOGOUT, GET_USER} from '../../types'
const AuthState = props => {

    const initialState = {
        user:null,
        loading:true,
        error:null
    }

    const [state, dispatch] = useReducer(AuthReducer, initialState);
  

    const register = () =>{
       
    }

    return (
        <AuthContext.Provider value={{
            user:state.user,
            loading:state.loading,
            error:state.error,
            register
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthState
