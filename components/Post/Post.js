import React, {useEffect, useContext} from 'react'
import {View, Flatlist, StyleSheet, Text, SafeAreaView} from 'react-native'
import AuthContext from '../../context/AuthContext/authContext';
import UserContext from '../../context/UserContext/userContext';
import Progressbar from '../Progress/Progressbar';
import PostItem from './PostItem';
const Post = props => {
    
    const {user, navigation} = props
    const authContext = useContext(AuthContext);
    const userContext = useContext(UserContext);
    const {getPosts, posts, refresh} = userContext;

    if(refresh){
        getPosts();
    }

    if(user === null ){
        return <Progressbar/>
    }
 
    useEffect(()=>{
        getPosts();
    },[]);

    if(posts.length === undefined){
        return <Progressbar/>
    }

    return (
        <View style={styles.container}>
            {posts.map(el=> <PostItem navigation={navigation} key={el._id} post={el} user={user}/>)}
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width:'98%'
    }
})

export default Post
