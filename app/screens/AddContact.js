import React, { Component } from 'react';
import { ScrollView, Button } from 'react-native';
import { Tile, List, ListItem, FormInput, FormLabel } from 'react-native-elements';
import { me } from '../config/data';
import  firebase from '../config/firebase';


class AddContact extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: '',
            phone:'' ,
            email:'', 
            instagram:''
          //  login, 
           // location
           };
      }
 

      addNewContact = () =>  {
       console.log('add contact ');
       console.log(this.state.name + this.state.phone);
       this.itemsRef =  firebase.database().ref('contacts');
       this.itemsRef.push({
           name: this.state.name,
           phone:this.state.phone,
           email:this.state.email,
           instagram:this.state.instagram});
       
       //console.log(this.textInput);
       // this.textInput.clearText();

      };
  
      render() {

   // const { picture, name, email, phone, login, dob, location } = this.props;
 

    return (
      <ScrollView>

        
            
      
       
        <Button 
            title='save'
            
            onPress={this.addNewContact}
        />
        <FormLabel>Name</FormLabel>
        <FormInput 
            
            ref={ref => this.textInput = ref} 
            name="name"
            value={this.state.name}
            onChangeText={(name) => this.setState({name})}
        ></FormInput>
       
   
        <FormLabel>Phone</FormLabel>
        <FormInput
            ref={ref => this.textInput = ref} 
            name="phone"
            value={this.state.phone}
            onChangeText={(phone) => this.setState({phone})}
        ></FormInput>
        <FormLabel>Email</FormLabel>
        <FormInput
            ref={ref => this.textInput = ref} 
            name="email"
            value={this.state.email}
            onChangeText={(email) => this.setState({email})}
        ></FormInput>
        <FormLabel>Instagram</FormLabel>
        <FormInput
             ref={ref => this.textInput = ref} 
             name="instagram"
             value={this.state.instagram}
             onChangeText={(instagram) => this.setState({instagram})}
            ></FormInput>
        <FormLabel>Twitter</FormLabel>
        <FormInput></FormInput>
        <FormLabel>Company</FormLabel>
        <FormInput></FormInput>
        <FormLabel>Title</FormLabel>
        <FormInput></FormInput>
        <FormLabel>Website</FormLabel>
        <FormInput></FormInput>
        <FormLabel>Tags:</FormLabel>
        <FormInput></FormInput>
        {/*
        <Tile
          imageSrc={{ uri: picture.large}}
          featured
          title={`${name.first.toUpperCase()} ${name.last.toUpperCase()}`}
          caption={email}
        />
        */}

       
      </ScrollView>
    );
  }
}
AddContact.defaultProps = { ...me };
export default AddContact;