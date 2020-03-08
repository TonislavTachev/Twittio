import React, {useContext} from 'react'
import {View, Text, StyleSheet, ProgressBarAndroid} from 'react-native'
import AuthContext from '../../context/AuthContext/authContext'
const Loading = ({navigation}) => {

  const authContext = useContext(AuthContext);
  const {user} = authContext;


    return (
        <View style={myStyle.view}>
           <Text style={myStyle.text}>Twittio</Text>
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
