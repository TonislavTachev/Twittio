import React, {useState,useEffect, useContext} from 'react'
import {ScrollView, View ,Text, StyleSheet, Image, ImageBackground, TouchableOpacity, Button} from 'react-native'
import AuthContext from '../../context/AuthContext/authContext';
import Progressbar from '../Progress/Progressbar';
import Posts from '../Post/Post';
import Icon from 'react-native-vector-icons/Ionicons';
const Profile = ({navigation}) => {

    const authContext = useContext(AuthContext);
    const [isPressed, setPressed] = useState(false);
    const {getUser, user} = authContext;


    const ChangePic = () =>{
      navigation.navigate('Create');
      setPressed(true);
    }

    useEffect(() => {
        getUser();
    }, [])

    if(user === null){
        return <Progressbar/>
    }

    return (
        <ScrollView contentContainerStyle={{flexGrow:1}}>
            <View style={myStyles.container}>
                <View style={myStyles.avatar}>
                   <ImageBackground source={{uri:'https://htmlcolorcodes.com/assets/images/html-color-codes-color-tutorials-hero-00e10b1f.jpg'}} style={myStyles.background}>
                      <TouchableOpacity onPress={ChangePic}><Image source={{uri:"https://media.istockphoto.com/photos/texture-dark-concrete-floor-picture-id621925576?k=6&m=621925576&s=612x612&w=0&h=H4rph08J2vSJz_crupTLvHf5OKW0olvoRJzaAK37Yhg="}} style={myStyles.avatarImg}/></TouchableOpacity>
                       <Text style={{color:"#fff", fontSize:16, marginTop:5}}>{user.username}</Text>
                   </ImageBackground>
                <View style={myStyles.info}>
                   <View>
                       <Text style={{fontSize:16}}>Posts</Text>
                       <Text style={myStyles.numbers}>3</Text>
                   </View>
                   <View>
                       <Text style={{fontSize:16}}>Following</Text>
                       <Text style={myStyles.numbers}>50</Text>
                   </View>
                   <View>
                       <Text style={{fontSize:16}} >Followers</Text>
                       <Text style={myStyles.numbers}>150</Text>
                   </View>
                </View>
            </View>

               <View style={myStyles.btn}>
               <TouchableOpacity onPress={ChangePic}>
                 <Icon name="ios-add-circle" size={46} color="#4b7bec" style={{
                    shadowOpacity: 2,
        textShadowRadius: 2,
        textShadowOffset: { width: 0.1, height: 1 }
                  }}/>
                  </TouchableOpacity>
               </View>
             <Posts user={user}/>
            </View>
        </ScrollView>
    )
}

const myStyles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        backgroundColor:'#EEEEEE',
    },
    avatar:{
        width:'98%',
        borderWidth:0.2,
        marginTop:5,
        backgroundColor:'#F7F9F9',
        elevation:5
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
    },
    info:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-around',
        padding:10
    },
    numbers:{
        textAlign:'center'
    },
    btn:{
    position: 'absolute',
    bottom:36,
    right:10,
    },
    buttonPressed:{
        backgroundColor:'#fff'
    }
})

export default Profile
