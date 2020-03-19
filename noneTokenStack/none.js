import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import React, {useContext, useEffect} from 'react'
import AuthContext from '../context/AuthContext/authContext';
import AuthState from '../context/AuthContext/AuthState';
import Register from '../components/Register/Register';
import Loading from '../components/Loading/Loading';
import Login from '../components/Login/Login'
import Home from '../components/Home/Home';
import Profile from '../components/Profile/Profile';
import Settings from '../components/Settings/Settings';
import Create from '../components/CreatePost/CreatePost';
const None = createStackNavigator();
const Tab = createMaterialTopTabNavigator();
import {AsyncStorage} from 'react-native';


function MyTabs() {
  return (
    <Tab.Navigator tabBarOptions={{
    labelStyle:{color:'#fff', fontSize:13},
    style: { backgroundColor: '#4b7bec' },
  }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}

//stack navigator for tackling user authentication
const none = () => {

  const authContext = useContext(AuthContext);

  //check if the user has been loaded from asyncstorage
  const {user, loading, getUser, isAuthenticated} = authContext;

  useEffect(() => {
     //get the token if there is any and check it
     //if it's authorized, switch to home screen,
     //else, switch to login screen again
        getUser();
  }, [])
  
    return (
       
        <None.Navigator>
        {/* if not, return a screen which prompts him to input his credentials */}
        {isAuthenticated === false ? (
          <>
          <None.Screen name="Register" component={Register} options={{headerShown:false,}}/>
          <None.Screen name="Login" component={Login} options={{headerShown:false}}/>
          </>
        ) : (
        // if yes, return the home screen component
        <>
          <None.Screen name="Tabs" component={MyTabs} options={{
            headerShown:false
          }}/>
          <None.Screen name="Create" component={Create}/>
          </>
        )}
        </None.Navigator>
        
    )
}

export default none
