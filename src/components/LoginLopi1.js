import React from "react";
import { StyleSheet, View, Image, TouchableOpacity, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { createAppContainer, createStackNavigator } from "react-navigation"; // Version can be specified in package.json

const loginGoogle = require("../../imgs/loginGoogle.png");

export default class LoginLopi extends React.Component {
  static navigationOptions = {
    headerTransparent: true,
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Image source={loginGoogle} style={styles.login1} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  login1: {
    position: "absolute",
    flex: 1,
    resizeMode: "cover",
    width: "100%",
    height: "100%"
  }

  // rest of the styles
});
