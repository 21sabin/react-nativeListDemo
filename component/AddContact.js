import React, { Component } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";

//note
 // we can call a function when state is updated
    //e.g this.setState({name},this.validateForm)

class AddContact extends Component {
  state = {
    name: "",
    phone: "",
    isFormValidate: false
  };

  componentDidUpdate( prevProps , prevState ){
      console.log("update")
      if( this.state.name != prevState.name || this.state.phone != prevState.phone){
        this.validateForm()
      }
  }

  handleInputText = (key, value) => {
    this.setState(prevState => ({
      [key]: value
    }));
    console.log(this.state,"123")

  };

  validateForm = () => {
      console.log("validateform called")
    if (
      this.state.name.length > 3 &&
      +this.state.phone &&
      this.state.phone.length == 10
    ) {
      this.setState({ isFormValidate: true });
    } else {
      this.setState({ isFormValidate: false });
    }
  };

  handleOnPress = () => {
    console.log(this.state, "form state");
    this.props.onSubmit(this.state);
  };
  render() {
    return (

      <View style={{ marginTop: 100, flex: 1 }}>
      <Text>{this.state.isFormValidate}</Text>
        <TextInput
          style={styles.input}
          placeholder="name"
          onChangeText={value => this.handleInputText("name", value)}
        />
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="number"
          onChangeText={value => this.handleInputText("phone", value)}
        />
        <Button
          title="submit"
          onPress={this.handleOnPress}
          style={{ width: "30%" }}
          disabled={!this.state.isFormValidate}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "black"
  }
});

export default AddContact;
