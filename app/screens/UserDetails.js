import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Tile, List, ListItem } from 'react-native-elements';

class UserDetails extends Component {
  render() {
    const { name, email, phone, instagram } = this.props.navigation.state.params;
console.log (`'params ' ${this.props.navigation.state.params.instagram}`);
    return (
      <ScrollView>
        {/*
        <Tile
          imageSrc={{ uri: picture.large}}
          featured
          title={`${name.first.toUpperCase()} ${name.last.toUpperCase()}`}
          caption={email}
        />
        */}

        <List>
          <ListItem
            title="Email"
            rightTitle={email}
            hideChevron
          />
          <ListItem
            title="Phone"
            rightTitle={phone}
            hideChevron
          />
        </List>

    

        <List>
          <ListItem
            title="instagram"
            rightTitle={instagram}
            hideChevron
          />
        
        </List>
      </ScrollView>
    );
  }
}

export default UserDetails;