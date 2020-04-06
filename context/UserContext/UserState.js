import React, {useReducer} from 'react'
import UserContext from './userContext';
import UserReducer from './UserReducer';
import {AsyncStorage} from 'react-native';
import axios from 'axios';
import {GET_POSTS, CREATE_POST, UPDATE_POST, GET_POST, DELETE_POST} from '../../types';

const UserState = props => {

    const initialState = {
        posts:[],
        comments:[],
        comment:{},
        selected:null,
        loading:false,
        error:null,
        refresh:false
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
            
            const res = await axios.post('http://192.168.0.14:5000/api/posts/create', obj, {
               headers:{
                   'Content-Type':'application/json',
                   'x-auth':token
               }  
            })

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

    const deletePost = async(post_id)=>{

        console.log(post_id);
          const token = await AsyncStorage.getItem('token');


         try {
              dispatch({type:DELETE_POST, payload:post_id});   
            const res = await axios.delete(`http://192.168.0.14:5000/api/posts/delete/${post_id}`, {
                headers:{
                    'Content-Type':'application/json',
                    'x-auth':token
                }
            });
         } catch (error) {
             
         }
    }

    return (
        <UserContext.Provider value={{
            posts:state.posts,
            comments:state.comments,
            comment:state.comment,
            selected:state.selected,
            loading:state.loading,
            error:state.error,
            refresh:state.refresh,
            getPosts,
            addPost,
            updatePost,
            getPost,
            deletePost
        }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserState
