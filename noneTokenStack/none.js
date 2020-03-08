import { createStackNavigator } from '@react-navigation/stack';
import React, {useContext} from 'react'
import AuthContext from '../context/AuthContext/authContext';
import Register from '../components/Register/Register';
import Home from '../components/Home/Home';
const None = createStackNavigator();

//stack navigator for tackling user authentication
const none = () => {

  const authContext = useContext(AuthContext);

  //check if the user has been loaded from asyncstorage
  const {user} = authContext;

    return (
        <None.Navigator>
        {/* if not, return a screen which prompts him to input his credentials */}
        {user == null ? (
          <None.Screen name="Register" component={Register} />
        ) : (
        // if yes, return the home screen component
          <None.Screen name="Home" component={HomeScreen} />
        )}
        </None.Navigator>
    )
}

export default none
