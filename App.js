
import React, { Component } from 'react';
import {Root} from './app/config/router';
//import Feed from './app/screens/Feed';
import Me from './app/screens/Me';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

//import React from 'react'
//import { render } from 'react-dom'
//import { createStore } from 'redux';
//import { Provider } from 'react-redux';
//import reducer from './app/reducers';

//const store = createStore(reducer)




export default class App extends Component<{}> {
  render() {
    return (
      //setup redux provider 
     // <Provider store={store}>
    <Root />
   // </Provider>
    );
    
  }
}

