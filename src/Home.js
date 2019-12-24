import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Button, Fab, Icon, ListItem, Body, Left, Right, } from 'native-base';
import { Text, View } from 'react-native'
import { Dialog } from 'react-native-simple-dialogs';
import Parse from 'parse/react-native'
import moment from 'moment';
export default class FloatingLabelExample extends Component {
  constructor() {
    super()
    this.state = {
      groupName: '',
      isDialogVisible: false,
      result: []
    }
  }

  componentDidMount = async () => {
    let user = await Parse.User.currentAsync()
    this.setState({ user })
    this.getGroups()
  }
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Dialog
            visible={this.state.isDialogVisible}

            onTouchOutside={() => this.setState({ isDialogVisible: false })} >
            <View>
              <Text>Create Chat Group</Text>
              <Item fixedLabel>

                <Input
                  onChangeText={(text) => {
                    this.setState({ groupName: text })
                  }}
                  placeholder='Enter Group name'
                />
              </Item>
              <Button
                onPress={() => {
                  this.setState({ isDialogVisible: false })
                  this.createGroup()

                }}
                block>
                <Text>Create Group</Text>
              </Button>
            </View>
          </Dialog>

          {
            this.state.result.map((item) => {

              return <ListItem
                
              avatar>
                <Left>

                </Left>
                <Body>
                  <Text>{item.get('groupName')}</Text>
                  <Text note>Created By: {item.get('CreatedByName')}</Text>
                </Body>
                <Right>
                  <Text note>{moment(item.get('createdAt')).format('hh:mm a')}</Text>
                </Right>
              </ListItem>
            })
          }


        </Content>
        <Fab

          direction="up"
          containerStyle={{}}
          style={{ backgroundColor: '#5067FF' }}
          position="bottomRight"
          onPress={() => {
            this.setState({ isDialogVisible: true })
          }}>
          <Icon name="add" />

        </Fab>
      </Container>
    );
  }


  createGroup = async () => {

    let { groupName, user } = this.state
    const Group = Parse.Object.extend("Group");
    const group = new Group();

    group.set("groupName", groupName);
    group.set("createdById", user.id);
    group.set("CreatedByName", user.get('username'));

    await group.save()
    this.getGroups()
    alert('Group Created Successfully');
  }


  getGroups() {
    var Group = Parse.Object.extend("Group");
    var query = new Parse.Query(Group);

    query.find().then((result) => {
      this.setState({ result })
    })
  }
}