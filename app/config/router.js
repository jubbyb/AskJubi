import React from 'react';
import {TabNavigator,StackNavigator} from 'react-navigation';
import {Icon} from 'react-native-elements';

import Feed from '../screens/Feed';
import Me from '../screens/Me';
import UserDetail from '../screens/UserDetail';
import UserDetails from '../screens/UserDetails';
import Settings from '../screens/Settings';
import AddContact from '../screens/AddContact';


export const FeedStack = StackNavigator({
Feed:{
    screen: Feed,
    navigationOptions:{
        title:'Feed',
        
    }
},
UserDetail:{
    screen:UserDetail,
    navigationOptions:({ navigation }) => ({
        title: `${navigation.state.params.name.first.toUpperCase()} ${navigation.state.params.name.last.toUpperCase()}`,
    } ), 
},
UserDetails:{
    screen:UserDetails,
    navigationOptions:({ navigation }) => ({
        title: `${navigation.state.params.name.toUpperCase()} ${navigation.state.params.name.toUpperCase()}`,
    } ), 
},

});


export const Tabs = TabNavigator({
    Feed: {
        screen: FeedStack,
       
        navigationOptions: {
            tabBarLabel: 'Feed',
            tabBarOptions: {
                showIcon: true,
                
                },
            tabBarIcon: ({tintColor}) => {
                
              <Icon name='list' />
            },
              
        }  
    },
    Me:{
        screen: Me,
        navigationOptions: {
            tabBarLabel: 'Me',
            tabBarOptions: {
                showIcon: true,
                
                },
            tabBarIcon: ({tintColor}) => {
                
              <Icon name='account-circle' />
            },
              
        }
    },
    

    

});


export const AddContactStack = StackNavigator({
    AddContact: {
        screen: AddContact,
        navigationOptions: {
            title: 'Add',
        }
    },
});

export const SettingsStack = StackNavigator({
    Settings: {
        screen: Settings,
        navigationOptions: {
            title: 'Settings',
        }
    },
});

export const Root = StackNavigator({
    Tabs:{
        screen: Tabs,
    },
    Settings:{
        screen : SettingsStack,
    },
    AddContact:{
        screen : AddContactStack,
    },
},    {
        mode:'modal',
        headerMode:'none',
    }
);