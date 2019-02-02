/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, ScrollView,Button ,FlatList,SectionList} from "react-native";
import contacts from "./contact";
import ContactList from './component/ContactList';
import AddContact from './component/AddContact'


const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

export default class App extends Component {
  state = {
    toggleContact: false,
    showForm:false,
    contacts:contacts
  };
  toggleContact=()=>{
    this.setState(prevState=>({
      toggleContact:!prevState.toggleContact
    }))
  }
  toggleForm=()=>{
  
    this.setState( prevState =>({
      showForm:!prevState.showForm
    }))
    console.log( this.state,'state')
  }

  addContact=newContact=>{
    console.log(newContact,"newConact");
    this.setState(prevState=>({
      contacts:[...prevState.contacts,newContact],
      showForm:false
    }))
  }


  render() {
    if( this.state.showForm ){
      return <AddContact onSubmit={this.addContact} />
    }else{
      return (
        <View style={{ flex: 1 }}>
        <Button title="toggle list" onPress={this.toggleContact}/>
        <Button title="Add Contact" onPress={this.toggleForm}/>
   
          {/* <ScrollView style={{ flex: 1, marginTop: 30 }}>
  
            { this.state.toggleContact && (contacts.map(contact => (
              <Row {...contact} />
            )))}
          </ScrollView> */}
          {/* {this.state.toggleContact &&(
             <FlatList 
             data={contacts}
             renderItem={this.renderItem} 
           />)
          } */}
           {this.state.toggleContact &&(
           <ContactList contacts={this.state.contacts}/>
           )
          }
         
        </View>
      );
    }
  
  }
}

const styles = StyleSheet.create({
 
});
