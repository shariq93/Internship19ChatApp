import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from './src/Login'
import Signup from './src/Signup'
import Home from './src/Home'

import ChatRoom from './src/ChatRoom'
import Router from './src/Router'




const AppNavigator = createStackNavigator({
  Router: {
    screen: Router,
    navigationOptions:{
      header:null
    }
  },
  Login: {
    screen: Login,
    navigationOptions:{
      header:null
    }
  },
  Signup: {
    screen: Signup,
    navigationOptions:{
      header:null
    }
  },
  Home: {
    screen: Home,
    navigationOptions:{
      header:null
    }
  },
  ChatRoom: {
    screen: ChatRoom,
    navigationOptions:{
      header:null
    }
  },
});

export default createAppContainer(AppNavigator);