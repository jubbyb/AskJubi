import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView
} from 'react-native';
import { List, ListItem, Button,ListView,FlatList } from 'react-native-elements';
import { users } from '../config/data';
import { jubi } from '../config/data';

import  firebase from '../config/firebase';

class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
 
      data: [
],
    
    };
 
  }

  listenForProfiles(dataRef){
    dataRef.on('value', (snap) => {

      profiles = [];
      
      snap.forEach((child) => {
        
        profiles.push({
          name: child.val().name,
          _key: child.key
        });
      });
      console.log(profiles);
     // this.setState.data = profiles;
      this.setState({ data: profiles });
      var name ='';
      console.log('item' + name);
      this.state.data.map((m) => (name=m.name));
                  console.log('name: ' + name);
     // this.setState({
     //   datasource: this.state.dataSource.cloneWithRows(profiles)
      //});
    });
  }
  componentDidMount() {
    this.dataRef = firebase.database().ref('contacts');
    this.listenForProfiles(this.dataRef);
  }
    
  onLearnMore = (user) => {
    this.props.navigation.navigate('UserDetail', user);
  };

  handleAddContactPress = () => {
    console.log('add contact pressed');
     //  this.itemsRef =  firebase.database().ref('askjubi');
   // this.itemsRef.push({description: 'descript'});
    this.props.navigation.navigate('AddContact');
  
  };
  getContacts = () => {

    console.log('get pressed');
    
    this.itemsRef =  firebase.database().ref();
    //this.itemsRef.on('value', (snap) => {
      this.itemsRef.child('contacts').on('value', (snap) => {
    //console.log();
            // get children as an array
            var items = [];
            snap.forEach((child) => {
              items.push({
                title: child.val(),
                _key: child.key
              });
            });
var name ='';
console.log('item' + name);
            items.map((m) => (name=m.title.name));
            console.log('name: ' + name);
      console.log(items[0]);
      console.log(items[1]);
      console.log(items[2]);
            //this.setState({
             // dataSource: this.state.dataSource.cloneWithRows(items)
           // });
      
          });
    //this.itemsRef.push({description: 'descripter'});
  };
  //this.itemsRef =  firebase.database().ref('test');
//{ title: { name: 'fasdf', phone: 'dfasdf' }
  render() {
    return (
      <ScrollView>
          <View style={{flexDirection: 'row', flex: 1}}>
                 
            <Button
              title="Get"
              buttonStyle={{ marginTop: 20 }}
              onPress={this.getContacts}
            />
          
            
            <Button
              title="New"
              buttonStyle={{ marginTop: 20 }}
              onPress={this.handleAddContactPress}
            />
         
        </View>
        <List>
         
            {this.state.data.map((item) => (
              <ListItem
              key={item.name}
                roundAvatar
                title={`${item.name} ${item.name}`}
                subtitle={item.name}
               // avatar={{ uri: item.picture.thumbnail }}
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