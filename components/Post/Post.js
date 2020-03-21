import React, {useEffect, useContext} from 'react'
import {View, Flatlist, StyleSheet, Text, SafeAreaView} from 'react-native'
import AuthContext from '../../context/AuthContext/authContext';
import Progressbar from '../Progress/Progressbar';
import PostItem from './PostItem';
const Post = props => {
    
    const {user} = props
    const authContext = useContext(AuthContext);

    if(user === null){
        return <Progressbar/>
    }

    return (
        <View>
            {user.posts.map(el => <PostItem key={el._id} post={el} user={user}/>)}
        </View>
    )
}

export default Post
