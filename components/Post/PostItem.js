import React from 'react'
import {TouchableOpacity, View, StyleSheet, Text, Image} from 'react-native'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import Icon from 'react-native-vector-icons/MaterialIcons';
import Progressbar from '../Progress/Progressbar';

const PostItem = ({post, user}) => {

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
