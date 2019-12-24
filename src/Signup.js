import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Button, } from 'native-base';
import { Text } from 'react-native'
import Parse from 'parse/react-native'
export default class FloatingLabelExample extends Component {

  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Form>
            <Item >

              <Input
                onChangeText={(text) => {
                  this.setState({
                    username: text
                  })

                }}
                placeholder='Username'
              />
            </Item>
            <Item >

              <Input
                onChangeText={(text) => {
                  this.setState({
                    fullname: text
                  })

                }}
                placeholder='Full name'
              />
            </Item>
            <Item >

              <Input
                keyboardType='email-address'
                onChangeText={(text) => {
                  this.setState({
                    email: text
                  })

                }}
                placeholder='Email'
              />
            </Item>
            <Item >

              <Input
                secureTextEntry={true}
                onChangeText={(text) => {
                  this.setState({
                    password: text
                  })

                }}
                placeholder='Password'
              />
            </Item>

            <Button
              onPress={this.signUp}
              block success>
              <Text> Register </Text>
            </Button>

          </Form>
        </Content>
      </Container>
    );
  }


  signUp = async() => {
    console.log('working...');
    
    let { username, email, fullname, password } = this.state


    var user = new Parse.User();
    user.set("username", username);
    user.set("password", password);
    user.set("email", email);
    user.set("fullname", fullname);
    try {
      let userdata = await user.signUp();
      alert(JSON.stringify(userdata))
      // Hooray! Let them use the app now.
    } catch (error) {
      // Show the error message somewhere and let the user try again.
      alert("Error: " + error.code + " " + error.message);
    }



  }
}