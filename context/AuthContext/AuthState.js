import React, {useReducer} from 'react'
import AuthContext from './authContext'
import AuthReducer from './AuthReducer'
import {AsyncStorage} from 'react-native'
import axios from 'axios';
import {GET_USER, LOGOUT, LOGIN_SUCCESS} from '../../types'

const AuthState = props => {

    const initialState = {
        user:null,
        isAuthenticated:false,
        loading:true
    }
  
  const [state, dispatch] = useReducer(AuthReducer, initialState);
    
    const getUser = async() =>{

       let token = await setDefaultHeaderToken();

       if(token){

           console.log(token);

        try{
            const res = await axios.get('http://192.168.0.14:5000/api/auth/', {
                headers:{
                    'Content-Type':'application/json',
                    'x-auth':token
                }
            });
            dispatch({type:GET_USER, payload:res.data});
        }catch(error){

        }

       }
    }


    const logout = async()=>{
        try {
            dispatch({type: LOGOUT})
        } catch (error) {
            
        }
    }

    const login = async(email, password) =>{


        const config = {
            'Content-Type' : 'application/json'
        }

        const obj ={
            username:email,
            password:password
        }
    
       try {
           const token = await axios.post('http://192.168.0.14:5000/api/auth/login', obj, config);
           dispatch({type:LOGIN_SUCCESS, payload:token.data});
       } catch (error) {
           
       }

    }


    const setDefaultHeaderToken = async()=>{
        let token = await AsyncStorage.getItem('token');

        if(token){
            return token;
        } else {
          return null;
        }

    }


    return (
        <AuthContext.Provider value={{
           user: state.user,
           isAuthenticated: state.isAuthenticated,
           loading:state.loading,
           getUser,
           logout,
           login
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthState
