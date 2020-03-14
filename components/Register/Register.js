import React, {useState, useContext} from 'react'
import {View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView} from 'react-native'
import AuthContext from '../../context/AuthContext/authContext';
const Register = ({navigation}) => {
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

    const getFName = (fname)=>{
      setfirstName(fname)
    }
    const getLName = (lname)=>{
      setLastName(lname);
    }
    
    const switchToLogin = () =>{
        navigation.navigate('Login');
    }

    const createUser = () =>{
     //get user input and dispatch to reducer, authenticate and set the token in async storage
        register(email, password, firstName, LastName);
        setEmail('');
        setpassword('');
        setfirstName('');
        setLastName('');
    }

    return (
        <ScrollView style={myStyle.view} contentContainerStyle={{alignItems:'center'}}>
          <View style={myStyle.field}>
            <View>
            <View style={myStyle.horizontal}>
                <Text style={{textAlign:'center', fontSize:25, color:'#fff',paddingBottom:15}}>Register</Text>
            </View>
                <Text style={{color:'#fff', fontSize:20, marginTop:20}}>Create an account</Text>
                <TextInput placeholder='E-mail' style={myStyle.input} onChangeText={getEmail} value={email}/>
            </View>
            <View>
                <TextInput placeholder='Password' secureTextEntry={true} style={myStyle.input} onChangeText={getPassword} value={password}/>
            </View>
            <View>
            <View style={myStyle.horizontal2}>
               
            </View>
                <Text style={{color:'#fff', fontSize:20, marginTop:20}}>Personal information</Text>
                <TextInput placeholder='First name' style={myStyle.input} onChangeText={getFName} value={firstName}/>
                <TextInput placeholder='Last name' style={myStyle.input} onChangeText={getLName} value={LastName}/>
                <TouchableOpacity style={myStyle.btn}><Text onPress={createUser} style={{textAlign:'center', fontSize:18, color:'#fff'}}>Submit</Text></TouchableOpacity>
                 <TouchableOpacity style={myStyle.loginbtn}><Text onPress={switchToLogin} style={{textAlign:'center', fontSize:18, color:'#fff'}}>Login</Text></TouchableOpacity>
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
    },
    loginbtn:{
         backgroundColor:'#f9ca24',
        marginTop:20,
        padding:10,
        elevation:10,
        borderRadius:5
    }
})

export default Register
