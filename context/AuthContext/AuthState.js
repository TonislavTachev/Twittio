import React,{useReducer} from 'react'
import AuthContext from './authContext'
import AuthReducer from './AuthReducer'

const AuthState = props => {

    const initialState = {
        user:null,
        loading:true,
        error:null
    }

    const [state, dispatch] = useReducer(AuthReducer, initialState);

    return (
        <AuthContext.Provider value={{
            user:state.user,
            loading:state.loading,
            error:state.error
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthState
