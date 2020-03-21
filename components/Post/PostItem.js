import React from 'react'
import {TouchableOpacity, View, StyleSheet, Text, Image} from 'react-native'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'

const PostItem = ({post, user}) => {
    return (
        <View style={styles.container}>
            <View>
                <Image  source={{uri:'https://htmlcolorcodes.com/assets/images/html-color-codes-color-tutorials-hero-00e10b1f.jpg'}} style={styles.img}/>
            </View>

            <View>
               <View>
                 <Text>
                   {post.base}
                 </Text>
               </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        width:'98%',
        borderWidth:0.2,
        marginTop:5,
        backgroundColor:'#F7F9F9',
        elevation:5,
        padding:10
    },
    img:{
        height:50,
        width:50,
        borderRadius:30
    }
})

export default PostItem
