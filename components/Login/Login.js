import React, {useContext, useState} from 'react'
import {View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity} from 'react-native'
import AuthContext from '../../context/AuthContext/authContext';
const Login = ({navigation}) => {

    const authContext = useContext(AuthContext);
    const {register} = authContext;

    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');
    const [firstName, setfirstName] = useState('');
    const [LastName, setLastName] = useState('');


    const getEmail = (email) =>{
        setEmail(email);
    }

    const getPassword = (password)=>{
        setpassword(password);
    }

    const login = ()=>{

    }

    return (
        <ScrollView style={myStyle.view} contentContainerStyle={{alignItems:'center'}}>
          <View style={myStyle.field}>
            <View>
            <View style={myStyle.horizontal}>
                <Text style={{textAlign:'center', fontSize:25, color:'#fff',paddingBottom:15}}>Login</Text>
            </View>
                <Text style={{color:'#fff', fontSize:20, marginTop:20}}>Your credentials</Text>
                <TextInput placeholder='E-mail' style={myStyle.input} onChangeText={getEmail} value={email}/>
            </View>
            <View>
                <TextInput placeholder='Password' secureTextEntry={true} style={myStyle.input} onChangeText={getPassword} value={password}/>
            </View>
            <View>
            <View style={myStyle.horizontal2}>
               
            </View>
                <TouchableOpacity style={myStyle.btn}><Text onPress={login} style={{textAlign:'center', fontSize:18, color:'#fff'}}>Submit</Text></TouchableOpacity>
            </View> 
          </View>
        </ScrollView>
    )
}

const myStyle = StyleSheet.create({
    view:{
        flex:1,
        // alignItems:'center',
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
      marginTop:100
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
    },
    loginbtn:{
         backgroundColor:'#f9ca24',
        marginTop:20,
        padding:10,
        elevation:10,
        borderRadius:5
    }
})

export default Login
