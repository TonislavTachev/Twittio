import React, {useState, useContext} from 'react'
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native'
import AuthContext from '../../context/AuthContext/authContext';
const Register = ({navigation}) => {
    const authContext = useContext(AuthContext);
    const {register} = authContext;

    const createUser = () =>{
     //get user input and dispatch to reducer, authenticate and set the token in async storage
        register();
    }

    return (
        <View style={myStyle.view}>
          <View style={myStyle.field}>
            <View>
            <View style={myStyle.horizontal}>
                <Text style={{textAlign:'center', fontSize:25, color:'#fff',paddingBottom:15}}>Register</Text>
            </View>
                <Text style={{color:'#fff', fontSize:20, marginTop:20}}>Create an account</Text>
                <TextInput placeholder='E-mail' style={myStyle.input}/>
            </View>
            <View>
                <TextInput placeholder='Password' secureTextEntry={true} style={myStyle.input}/>
            </View>
            <View>
            <View style={myStyle.horizontal2}>
               
            </View>
                <Text style={{color:'#fff', fontSize:20, marginTop:20}}>Personal information</Text>
                <TextInput placeholder='First name' style={myStyle.input}/>
                <TextInput placeholder='Last name' style={myStyle.input}/>
                <TouchableOpacity style={myStyle.btn}><Text onPress={createUser} style={{textAlign:'center', fontSize:18, color:'#fff'}}>Submit</Text></TouchableOpacity>
            </View> 
          </View>
        </View>
    )
}

const myStyle = StyleSheet.create({
    view:{
        flex:1,
        alignItems:'center',
        backgroundColor:'#3742fa'
    },
    input:{
        padding:10,
        borderWidth:0.5,
        borderColor:'#fff',
        elevation:10,
        backgroundColor:'white',
        marginTop:20,
        fontSize:18
    },
    field:{
      width:'95%',
      marginTop:50
    },
    horizontal:{
        borderBottomColor:'#fff',
        borderLeftColor:'#3742fa',
        borderRightColor:'#3742fa',
        borderTopColor:'#3742fa',
        borderWidth:1,
        width:'90%',
        alignSelf:'center',
        marginBottom:10
    },
    horizontal2:{
        borderBottomColor:'#fff',
        borderLeftColor:'#3742fa',
        borderRightColor:'#3742fa',
        borderTopColor:'#3742fa',
        borderWidth:1,
        width:'90%',
        alignSelf:'center',
        marginTop:30
    },
    btn:{
        backgroundColor:'#2ed573',
        marginTop:20,
        padding:10,
        elevation:10,
        borderRadius:5
    }
})

export default Register
