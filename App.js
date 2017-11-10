
import React, { Component } from 'react';
import {Root} from './app/config/router';
import Feed from './app/screens/Feed';
import Me from './app/screens/Me';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';


export default class App extends Component<{}> {
  render() {
    return (
    <Root />
    );
    
  }
}

