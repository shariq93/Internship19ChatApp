import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Button, } from 'native-base';
import { Text } from 'react-native'
export default class FloatingLabelExample extends Component {
  render() {
    return (
      <Container>
        <Header
          style={{ marginTop: 30 }}
        />
        <Content>
          <Form>
            <Item fixedLabel>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item fixedLabel last>
              <Label>Password</Label>
              <Input />
            </Item>
            <Button
              style={{ marginTop: 20 }}
              block success>
              <Text
                style={{ color: '#fff' }}
              > Login </Text>
            </Button>

            <Button block warning

              onPress={()=>{
                this.props.navigation.navigate('Signup')
              }}

              style={{ marginTop: 10 }}
            >

              <Text
                style={{ color: '#fff' }}
              > Create Account </Text>
            </Button>

          </Form>
        </Content>
      </Container>
    );
  }
}