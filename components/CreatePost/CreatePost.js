import React, {useState, useEffect} from 'react'
import {View, TextInput, TouchableOpacity, StyleSheet, Text} from 'react-native'

const CreatePost = () => {
    return (
        <View style={styles.container}>

            <View style={styles.input}>
                 <Text style={{fontSize:20, textAlign:'center', marginTop:26}}>What's on your mind ?</Text>
                  <TextInput style={styles.text} multiline placeholder="Tell the world..." numberOfLines={3}/>
                  <View>
                   <TouchableOpacity style={styles.btn}><Text  style={{textAlign:'center', fontSize:18, color:'#fff'}}>Submit</Text></TouchableOpacity>
                  </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
   container:{
       flex:1,
       alignItems:'center',
       backgroundColor:'#EEEEEE',
   },
   input:{
        width:'98%',
        borderWidth:0.2,
        marginTop:5,
        backgroundColor:'#F7F9F9',
        elevation:5,
        padding:10,
        height:280
   },
   text:{
        padding:5,
        borderWidth:0.5,
        borderColor:'#fff',
        elevation:10,
        backgroundColor:'white',
        marginTop:20,
        fontSize:18
    },
    btn:{
         backgroundColor:'#2ed573',
        marginTop:20,
        padding:10,
        elevation:10,
        borderRadius:5
    },
})


export default CreatePost
