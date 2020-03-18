import React, {useContext, useEffect} from 'react'
import {View, StyleSheet, Text, Button} from 'react-native'
import AuthContext from '../../context/AuthContext/authContext';
import Progressbar from '../Progress/Progressbar';
const Home = ({natigation}) => {

    const authContext = useContext(AuthContext);
    const {loading, user, logout, getUser, isAuthenticated} = authContext;

     useEffect(()=>{
        getUser();
     },[])

    const onLogOut = () =>{
       logout();
    }

    if(user === null){
      return <Progressbar/>
    }

    return (
        <View style={{flex:1}}>
        <Text>{user.username}</Text>
         
        </View>
    )
}

export default Home
