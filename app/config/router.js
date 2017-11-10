import React from 'react';
import {TabNavigator,StackNavigator} from 'react-navigation';
import {Icon} from 'react-native-elements';

import Feed from '../screens/Feed';
import Me from '../screens/Me';
import UserDetail from '../screens/UserDetail';
import Settings from '../screens/Settings';


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
},    {
        mode:'modal',
        headerMode:'none',
    }
);