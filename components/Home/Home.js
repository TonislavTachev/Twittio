import React, {useContext} from 'react'
import {View, StyleSheet, Text} from 'react-native'
import AuthContext from '../../context/AuthContext/authContext';
const Home = () => {

  const authContext = useContext(AuthContext);
  const {user} = authContext;


    return (
        <View>
            
        </View>
    )
}

export default Home
