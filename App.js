
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
import Home from './components/Home/Home'
import Loading from './components/Loading/Loading'
import AuthContext from './context/AuthContext/authContext'
//screen which is going to handle whether the user has been logged in
import NoneStack from './noneTokenStack/none'
const Stack = createStackNavigator();
const RootStack = createStackNavigator();
const App: () => React$Node = () => {

  return (   
      <NavigationContainer>
        <AuthState>
          <Stack.Navigator>
             <Stack.Screen name="NoToken" component={NoneStack} options={{headerShown:false}}/>            
          </Stack.Navigator>
         </AuthState>
      </NavigationContainer>
  ); 
};

export default App;
