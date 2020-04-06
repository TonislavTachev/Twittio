import React, {useState, useContext} from 'react'
import {TouchableOpacity, View, StyleSheet, Text, Image} from 'react-native'
import {Container, Fab, Content, ActionSheet} from 'native-base';
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import Icon from 'react-native-vector-icons/MaterialIcons';
import Progressbar from '../Progress/Progressbar';
import UserContext from '../../context/UserContext/userContext';

const PostItem = ({post, user, navigation}) => {

    const BUTTONS = [
  { text: "Edit tweet", icon: "create", iconColor: "#ea943b" },
  { text: "Delete", icon: "ios-trash", iconColor: "#fa213b" },
  { text: "Cancel", icon: "close", iconColor: "#25de5b" },
  ]

  const [button, setbutton] = useState({});
  const userContext = useContext(UserContext);
  const {deletePost} = userContext;
  
  const openCommentDialog = () =>{
      navigation.navigate('Comment', {post_id:post._id, post:post, user:user});
  }

  const DESTRUCTIVE_INDEX = 3;
  const CANCEL_INDEX = 4;
    
     if(button.icon === 'create'){
     setbutton({});
     navigation.navigate('Update', {
         post_id:post._id,
         post:post
     });
     } else if(button.icon === 'cancel'){
     setbutton({});
    } else if(button.icon === 'ios-trash'){
      deletePost(post._id);
      setbutton({});
    }



    if(post === null){
        return <Progressbar/>
    }

    return (
        <View style={styles.container}>
            <View>
                <Image  source={{uri:'https://htmlcolorcodes.com/assets/images/html-color-codes-color-tutorials-hero-00e10b1f.jpg'}} style={styles.img}/>
            </View>

            <View style={styles.info}>
               <Text style={{fontWeight:'bold', marginBottom:3, fontSize:16}}>{user.firstName} {user.lastName}</Text>
               <Text>{post.base}</Text>
                <View style={{flexDirection:'row', justifyContent:'flex-start'}}>
                    <Icon name="favorite-border" size={30} color="#4b7bec" style={{marginTop:10}}/>
                    <Icon name="chat-bubble-outline" size={30} color="#4b7bec" style={{marginTop:10, marginLeft:15}}/>
                    <Icon name="repeat" size={30} color="#4b7bec" style={{marginTop:10, marginLeft:15}}/>
                    <Icon onPress={()=> ActionSheet.show({
                        options:BUTTONS,
                        cancelButtonIndex:CANCEL_INDEX,
                        destructiveButtonIndex:DESTRUCTIVE_INDEX,
                    },buttonIndex =>{
                        setbutton(BUTTONS[buttonIndex]);
                    })} name="more-vert" size={30} color="#4b7bec" style={{marginTop:10, marginLeft:2}}/>
                    <Icon name="create" size={30} color="#4b7bec"  style={{marginTop:10}} onPress={openCommentDialog}/>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        borderWidth:0.2,
        marginTop:5,
        backgroundColor:'#F7F9F9',
        justifyContent:'space-evenly',
        elevation:8,
        padding:15
    },
    img:{
        height:60,
        width:60,
        borderRadius:30,
        marginTop:3
    },
    info: {
    width: 0,
    flexGrow: 1,
    marginLeft:20
    }
})

export default PostItem
