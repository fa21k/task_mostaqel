import React, { Component } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

class PlaceInput extends Component {
  state = {
    placeName: ""
  };

  placeNameChangedHandler = val => {
    this.setState({
      placeName: val
    });
  };

  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === "") {
      return;
    }

    this.props.onPlaceAdded(this.state.placeName);
  };

  render() {
    return (
      <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput  style={{width:300,fontSize:20,fontWeight:'bold'}}
          placeholder="ادخل النص هنا"
          value={this.state.placeName}
          onChangeText={this.placeNameChangedHandler}
          style={styles.placeInput}
        />
        <Button
          title="اضافه"
          style={styles.placeButton }
          onPress={this.placeSubmitHandler}
        />
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    //flex: 1,
    justifyContent: "flex-start",
    width: "100%",
    alignItems: "center"
  },
  
  inputContainer: {
    
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize:20
  },
  placeInput: {
    width: "70%"
    
  },
  placeButton: {
    width: "40%",
    justifyContent: "flex-start"
  }
});

export default PlaceInput;
