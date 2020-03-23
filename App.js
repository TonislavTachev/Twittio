
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import React, {useEffect, useContext} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import AuthState from './context/AuthContext/AuthState'
import UserState from './context/UserContext/UserState'
import Home from './components/Home/Home'
import Loading from './components/Loading/Loading'
import Register from './components/Register/Register.js'
import Login from './components/Login/Login'
//screen which is going to handle whether the user has been logged in
import NoneStack from './noneTokenStack/none'
const Stack = createStackNavigator();
const RootStack = createStackNavigator();


function RootStackScreen(){
    return (
   <RootStack.Navigator>
      <RootStack.Screen name='Loading' component={Loading} options={{
     headerShown:false
   }} />
    <RootStack.Screen  name='Home' component={Home}  options={{
      headerLeft:null,
      title:'Dashboad'
    }} />
    </RootStack.Navigator>
  )
}


const App: () => React$Node = () => {

  return (   
      <NavigationContainer>
      <AuthState>
      <UserState>
          <Stack.Navigator>
             <Stack.Screen name="None" component={NoneStack} options={{headerShown:false}}/>
          </Stack.Navigator>
      </UserState>
      </AuthState>
      </NavigationContainer>
  ); 
};

export default App;
