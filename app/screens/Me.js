import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Tile, List, ListItem, Button } from 'react-native-elements';
import { me } from '../config/data';
//import {firebasedata} from '../config/firebasedata'
import  firebase from '../config/firebase';


class Me extends Component {
  handleSettingsPress = () => {
    console.log('button pressed');
     this.props.navigation.navigate('Settings');
  
  };
  count = 2;
  setUserMobile = () => {
    
    console.log('button post');
    this.itemsRef =  firebase.database().ref('users');
    this.itemsRef.push({firstname: `first${this.count}`,
  lastname:`last${this.count}`});
    this.count = this.count +1;
  };

  render() {
    return (
      <ScrollView>
        {/*<Tile
          imageSrc={{ uri: this.props.picture.large}}
          featured
          title={`${this.props.name.first.toUpperCase()} ${this.props.name.last.toUpperCase()}`}
          caption={this.props.email}
        />
        */}
          {/*onPress={this.handleSettingsPress}*/}

        <Button
          title="Settings"
          buttonStyle={{ marginTop: 20 }}
          onPress={this.handleSettingsPress}
        />
        <Button
          title="post"
          buttonStyle={{ marginTop: 20 }}
          onPress={this.setUserMobile}
        />
        <List>
          <ListItem
            title="Email"
            rightTitle={this.props.email}
            hideChevron
          />
          <ListItem
            title="Phone"
            rightTitle={this.props.phone}
            hideChevron
          />
        </List>

        <List>
          <ListItem
            title="Username"
            rightTitle={this.props.login.username}
            hideChevron
          />
        </List>

        <List>
          <ListItem
            title="Birthday"
            rightTitle={this.props.dob}
            hideChevron
          />
          <ListItem
            title="City"
            rightTitle={this.props.location.city}
            hideChevron
          />
        </List>
      </ScrollView>
    );
  }
}

Me.defaultProps = { ...me };

export default Me;