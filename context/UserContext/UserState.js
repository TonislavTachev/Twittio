import React, {useReducer} from 'react'
import UserContext from './userContext';
import UserReducer from './UserReducer';
import {AsyncStorage} from 'react-native';
import axios from 'axios';
import {GET_POSTS, CREATE_POST} from '../../types';

const UserState = props => {

    const initialState = {
        posts:[],
        selected:null,
        loading:false,
        error:null
    }

    const [state, dispatch] = useReducer(UserReducer, initialState);

    const getPosts = async() =>{

        const token = await AsyncStorage.getItem('token');
        try {

            const res = await axios.get('http://192.168.0.14:5000/api/posts/', {
                headers:{
                    'Content-Type':'application/json',
                    'x-auth':token
                }
            });

            dispatch({type:GET_POSTS, payload:res.data});

        } catch (error) {
            
        }
    }

    const addPost = async(text) =>{

       const token = await AsyncStorage.getItem('token');
       const obj = {
           img:'',
           headline:'',
           base:text
       }
       try {
           const res = await axios.post('http://192.168.0.14:5000/api/posts/create',obj, {
                headers:{
                    'Content-Type':'application/json',
                    'x-auth':token
                }
            });
            dispatch({type:CREATE_POST, payload:res.data});
       } catch (error) {
           
       }
    }

    return (
        <UserContext.Provider value={{
            posts:state.posts,
            selected:state.selected,
            loading:state.loading,
            error:state.error,
            getPosts,
            addPost
        }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserState
