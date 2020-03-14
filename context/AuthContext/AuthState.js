import React,{useReducer} from 'react'
import AuthContext from './authContext'
import AuthReducer from './AuthReducer'
import axios from 'axios';
import {AsyncStorage} from 'react-native';
import {LOGIN_SUCCESS, REGISTER_SUCCESS, LOGIN_FAILURE, REGISTER_FAILURE, LOGOUT, GET_USER} from '../../types'
const AuthState = props => {

    const initialState = {
        user:null,
        loading:true,
        error:null,
        isAuthenticated:false
    }

    const [state, dispatch] = useReducer(AuthReducer, initialState);
  

    const register = async(email, password, fname, lname) =>{
     
      const obj = {
          username:email,
          password:password,
          firstName:fname,
          lastName:lname
      }

      const config = {
          'Content-Type' : 'application/json'
      }

      try {

      const userToken = await axios.post('http://192.168.0.14:5000/api/auth/signup', obj, config);

      dispatch({type:REGISTER_SUCCESS, payload:userToken.data});

      } catch (error) {
          
      }

    }

    const login = async(email, password) =>{
     
      const obj = {
          username:email,
          password:password,
      }

      const config = {
          'Content-Type' : 'application/json'
      }

      try {

      const userToken = await axios.post('http://192.168.0.14:5000/api/auth/signup', obj, config);

      dispatch({type:LOGIN_SUCCESS, payload:userToken.data});

      } catch (error) {
          
      }

    }

    const getUser = async() =>{

      let token = await setAuthorizatinToken();

       try {
        const res = await axios.get('http://192.168.0.14:5000/api/auth/', {
            headers:{
                'Content-Type':'application/json',
                'x-auth':token
            }
        });

       dispatch({type:GET_USER, payload:res.data});
           
       } catch (error) {
           
       }
    }

    const setAuthorizatinToken = async() =>{
        
        let token = await AsyncStorage.getItem('token');
       if(token){
           return token;
       } else {
          return 401;
       }
    }

    return (
        <AuthContext.Provider value={{
            user:state.user,
            loading:state.loading,
            error:state.error,
            register,
            getUser,
            isAuthenticated:state.isAuthenticated,
            setAuthorizatinToken
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthState
