import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Button, View, } from 'native-base';
import { Text, AsyncStorage } from 'react-native'
import Parse from 'parse/react-native'
export default class FloatingLabelExample extends Component {

  async componentDidMount() {
    Parse.serverURL = 'https://pg-app-t474o18r3po6gx4rqz4ryg832twequ.scalabl.cloud/1/';
    Parse.initialize("Ba9R9bYtD5PBubSw4VngfJO1jUiDQmfeWelTFGBS", "61ntJUcGMYogYDWRhyqR1ZFIFUCJBhDTeglNQmSq");

    Parse.setAsyncStorage(AsyncStorage)
    try {
      let currentUser = await Parse.User.currentAsync()
      if (currentUser != null) {
        this.props.navigation.replace('Home', { isLogedIn: true })
        

      } else {
        this.props.navigation.replace('Login')
  
      }

    } catch (error) {
      alert(error)
      this.props.navigation.replace('Login')
      UtilStore.userData = null
      UtilStore.isLogin = false
    }

  }

  render() {
    return (
      <View></View>
    );
  }
}