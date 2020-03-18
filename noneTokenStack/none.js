import { createStackNavigator } from '@react-navigation/stack';
import React, {useContext, useEffect} from 'react'
import AuthContext from '../context/AuthContext/authContext';
import AuthState from '../context/AuthContext/AuthState';
import Register from '../components/Register/Register';
import Loading from '../components/Loading/Loading';
import Login from '../components/Login/Login'
import Home from '../components/Home/Home';
const None = createStackNavigator();
import {AsyncStorage} from 'react-native';

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
       <AuthState>
        <None.Navigator>
        {/* if not, return a screen which prompts him to input his credentials */}
        {isAuthenticated === false ? (
          <>
          <None.Screen name="Register" component={Register} options={{headerShown:false,}}/>
          <None.Screen name="Login" component={Login} options={{headerShown:false}}/>
          </>
        ) : (
        // if yes, return the home screen component
          <None.Screen name="Home" component={Home} options={{
            headerShown:false
          }}/>
        )}
        </None.Navigator>
        </AuthState>
    )
}

export default none
