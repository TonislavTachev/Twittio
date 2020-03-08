import { createStackNavigator } from '@react-navigation/stack';
import React, {useContext, useEffect} from 'react'
import AuthContext from '../context/AuthContext/authContext';
import Register from '../components/Register/Register';
import Loading from '../components/Loading/Loading';
import Home from '../components/Home/Home';
const None = createStackNavigator();

//stack navigator for tackling user authentication
const none = () => {

  const authContext = useContext(AuthContext);

  //check if the user has been loaded from asyncstorage
  const {user, loading} = authContext;

  useEffect(() => {
     //get the token if there is any and check it
     //if it's authorized, switch to home screen,
     //else, switch to login screen again
     
  }, [])
  
    return (
        <None.Navigator>
        {/* if not, return a screen which prompts him to input his credentials */}
        {user == null ? (
          <None.Screen name="Register" component={Register} options={{headerShown:false}}/>
        ) : (
        // if yes, return the home screen component
          <None.Screen name="Home" component={HomeScreen} />
        )}
        </None.Navigator>
    )
}

export default none
