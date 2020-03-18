import React, {useContext, useEffect} from 'react'
import {View, Text, StyleSheet, ProgressBarAndroid} from 'react-native'
import AuthContext from '../../context/AuthContext/authContext'
import Progressbar from '../Progress/Progressbar';
const Loading = ({navigation}) => {

  const authContext = useContext(AuthContext);
  const {user, getUser, isAuthenticated} = authContext;

     useEffect(()=>{
        getUser();
     },[])

    if(!isAuthenticated && user === null){
        return <Progressbar/>
    }

    return (
        <View style={myStyle.view}>
           <Text style={myStyle.text}>Twittio</Text>
           <Text>{user.email}</Text>
            <ProgressBarAndroid color="#fff"  style={myStyle.progress}/>
        </View>
    )
}

const myStyle = StyleSheet.create({
    view:{
        flex:1,
        backgroundColor:'#4b7bec',
        alignItems:'center',
        padding:10
    },
    text:{
        color:'#fff',
        marginTop:50,
        fontSize:30
    },
    progress:{
        marginTop:450
    }
})

export default Loading
