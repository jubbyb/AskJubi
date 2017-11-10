import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView
} from 'react-native';
import { List, ListItem, Button,ListView } from 'react-native-elements';
import { users } from '../config/data';
import { jubi } from '../config/data';

import  firebase from '../config/firebase';

class Feed extends Component {
  
  onLearnMore = (user) => {
    this.props.navigation.navigate('UserDetail', user);
  };

  
  getUsers = () => {

    console.log('button post');
    
    this.itemsRef =  firebase.database().ref();
    //this.itemsRef.on('value', (snap) => {
      this.itemsRef.child('users').on('value', (snap) => {
    console.log();
            // get children as an array
            var items = [];
            snap.forEach((child) => {
              items.push({
                title: child.val(),
                _key: child.key
              });
            });
            console.log('item');
      console.log('items',items[0]);
            //this.setState({
             // dataSource: this.state.dataSource.cloneWithRows(items)
           // });
      
          });
    //this.itemsRef.push({description: 'descripter'});
  };
  //this.itemsRef =  firebase.database().ref('test');

  render() {
    return (
      <ScrollView>
         <Button
          title="Get"
          buttonStyle={{ marginTop: 20 }}
          onPress={this.getUsers}
        />
    

        <List>
        {users.map((m) => (
            <ListItem
              key={m.login.username}
              roundAvatar
              avatar={{ uri: m.picture.thumbnail }}
              title={`${m.name.first.toUpperCase()} ${m.name.last.toUpperCase()}`}
              subtitle={m.email}
              onPress={() => this.onLearnMore(m)}
            />
          ))}
        </List>
        <List>
          {users.map((user) => (
            <ListItem
              key={user.login.username}
              roundAvatar
              avatar={{ uri: user.picture.thumbnail }}
              title={`${user.name.first.toUpperCase()} ${user.name.last.toUpperCase()}`}
              subtitle={user.email}
              onPress={() => this.onLearnMore(user)}
            />
          ))}
        </List>
        
      </ScrollView>
    );
  }
}

export default Feed;