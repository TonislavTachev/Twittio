
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import React from 'react';
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

const Stack = createStackNavigator();
const App: () => React$Node = () => {
  return (   
      <NavigationContainer>
        
            <Stack.Screen name="Home" component={Home}/>
          
      </NavigationContainer>
  ); 
};

export default App;
