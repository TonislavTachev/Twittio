import React, {useState,useEffect, useContext} from 'react'
import {ScrollView, View ,Text, StyleSheet, Image, ImageBackground, TouchableOpacity} from 'react-native'
import AuthContext from '../../context/AuthContext/authContext';
import Progressbar from '../Progress/Progressbar';
const Profile = ({navigation}) => {

    const authContext = useContext(AuthContext);
    const {getUser, user} = authContext;


    const ChangePic = () =>{
      navigation.navigate('Create');
    }

    useEffect(() => {
        getUser();
    }, [])

    if(user === null){
        return <Progressbar/>
    }

    return (
        <ScrollView>
            <View style={myStyles.container}>
                <View style={myStyles.avatar}>
                   <ImageBackground source={{uri:'https://htmlcolorcodes.com/assets/images/html-color-codes-color-tutorials-hero-00e10b1f.jpg'}} style={myStyles.background}>
                      <TouchableOpacity onPress={ChangePic}><Image source={{uri:"https://media.istockphoto.com/photos/texture-dark-concrete-floor-picture-id621925576?k=6&m=621925576&s=612x612&w=0&h=H4rph08J2vSJz_crupTLvHf5OKW0olvoRJzaAK37Yhg="}} style={myStyles.avatarImg}/></TouchableOpacity>
                       <Text style={{color:"#fff", fontSize:16, marginTop:5}}>{user.username}</Text>
                   </ImageBackground>
                </View>


            </View>
        </ScrollView>
    )
}

const myStyles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
         backgroundColor:'#EEEEEE'  
    },
    avatar:{
        width:'98%',
        borderWidth:0.1,
        marginTop:5,
        backgroundColor:'#F7F9F9',
        elevation:10
    },
    background:{
      alignItems:'center',
      width:'100%',
      height:150
    },
    avatarImg:{
      marginTop:15,
      width:100,
      height:100,
    }
})

export default Profile
