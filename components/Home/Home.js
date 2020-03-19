import React, {useContext, useEffect, useState} from 'react'
import {View, StyleSheet, Text, Button, ScrollView, RefreshControl, SafeAreaView} from 'react-native'
import AuthContext from '../../context/AuthContext/authContext';
import Progressbar from '../Progress/Progressbar';
const Home = ({natigation}) => {

    const authContext = useContext(AuthContext);
    const {loading, user, logout, getUser, isAuthenticated} = authContext;
    const [refreshing, setRefresh] = useState(false);

     useEffect(()=>{
        getUser();
     },[])

    const onLogOut = () =>{
       logout();
    }

    if(user === null){
      return <Progressbar/>
    }


    const onRefresh = () =>{
  
       setRefresh(true);

       setTimeout(() => {
         setRefresh(false);
       }, 2000);
    }

    //check if refreshing has been enabled, if so then fetch the necessary data
    if(refreshing === true){
      getUser();
    }

    return (
        <SafeAreaView style={{flex:1}}>
        <ScrollView contentContainerStyle={styles.ScrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>
        }>
        
        <Text>{user.username}</Text>
         </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    marginTop:20
  },
  scrollView: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export default Home
