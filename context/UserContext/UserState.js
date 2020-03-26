import React, {useReducer} from 'react'
import UserContext from './userContext';
import UserReducer from './UserReducer';
import {AsyncStorage} from 'react-native';
import axios from 'axios';
import {GET_POSTS, CREATE_POST, UPDATE_POST, GET_POST} from '../../types';

const UserState = props => {

    const initialState = {
        posts:[],
        selected:null,
        loading:false,
        error:null
    }

    const [state, dispatch] = useReducer(UserReducer, initialState);
    
    const getPost = async(post_id) =>{

          const token = await AsyncStorage.getItem('token');
        try {

            const res = await axios.get(`http://192.168.0.14:5000/api/posts/${post_id}`, {
                headers:{
                    'Content-Type':'application/json',
                    'x-auth':token
                }
            });
            dispatch({GET_POST, payload:res.data});
        } catch (error) {
            
        }
    }

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

    const updatePost = async(post_id, updateQuery)=>{
         
         const token = await AsyncStorage.getItem('token');
    
         const obj = {
            base:updateQuery
         }

         try {
            const res = await axios.put(`http://192.168.0.14:5000/api/posts/update/${post_id}`,obj, {
                headers:{
                    'Content-Type':'application/json',
                    'x-auth':token
                }
            });

            console.log(res.data);
            dispatch({type:UPDATE_POST, payload:res.data});   
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
            addPost,
            updatePost,
            getPost
        }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserState
