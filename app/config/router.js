import React from 'react';
import {TabNavigator,StackNavigator} from 'react-navigation';
import {Icon} from 'react-native-elements';


import Contacts from '../screens/Contacts';
import Me from '../screens/Me';
import UserDetail from '../screens/UserDetail';
import UserDetails from '../screens/UserDetails';
import Settings from '../screens/Settings';
import AddContact from '../screens/AddContact';


export const FeedStack = StackNavigator({
    Contacts:{
    screen: Contacts,
    navigationOptions:{
        title:'Contacts',
        
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

    AddContact: {
        screen: AddContact,
             navigationOptions:({ navigation }) => ({
                title: 'Create Contact',
               
            } ),
        
    },


});


export const Tabs = TabNavigator({
    Contacts: {
        screen: FeedStack,
       
        navigationOptions: {
            tabBarLabel: 'Contacts',
            
            tabBarIcon: ({tintColor}) => {
                
              return <Icon name='list' type='MaterialIcons' size={26} color={tintColor}/>
              
            },
              
        } ,
     
         
    },
    Me:{
        screen: Me,
        navigationOptions: {
            tabBarLabel: 'Me',
            tabBarOptions: {
                showIcon: true,
                
                },
                
            tabBarIcon: ({tintColor}) => {
               
                
                
              return <Icon name='account-circle'  type='MaterialIcons' size={26} color={tintColor}/>
            },
              
        }
    },
},
{   
    tabBarOptions: {
        showIcon: true,
        showLabel: false,
        style: {
            //backgroundColor: '#fff', // Makes Android tab bar white instead of standard blue
           // height: 70 // I didn't use this in my app, so the numbers may be off. 
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