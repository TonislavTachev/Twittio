import React, {useContext, useEffect} from 'react'
import {View, StyleSheet, Text} from 'react-native'
import AuthContext from '../../context/AuthContext/authContext';
import Progressbar from '../Progress/Progressbar';
const Home = ({route, navigation}) => {

  const authContext = useContext(AuthContext);
  const {user, getUser, isAuthenticated} = authContext;

    return (
        <View>
        </View>
    )
}

export default Home
