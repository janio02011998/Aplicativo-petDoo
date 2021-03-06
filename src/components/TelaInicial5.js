import React from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const Logo = require("../../imgs/logo_petdoo.png");
const btnSetaAzul = require("../../imgs/btnSetaAzul.png");
const lopi = require("../../imgs/lopi.png");
const Patinhas = require("../../imgs/patinhas.png");
const telainicial5 = require("../../imgs/telainicial5.png");

export default class Telainicial5 extends React.Component {
  static navigationOptions = {
    headerTransparent: true
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <LinearGradient colors={["#8ED2F8", "#F4A3C2"]} style={{ flex: 1 }} />
        <Image source={Patinhas} style={styles.patinhas} />
        <Image
          source={Logo}
          style={{ position: "absolute", left: "15%", top: "10%" }}
        />
        <Image
          source={telainicial5}
          style={{ position: "absolute", top: "46%", left: "12.5%" }}
        />
        <TouchableOpacity
          activeOpacity={1.0}
          accessible={true}
          style={{ position: "absolute", top: "75%", right: "45%" }}
          accessibilityLabel="Os criadores do Petdoo me contrataram para ficar por aqui conversando e ajudando você."
          onPress={() => this.props.navigation.navigate("Lopi3")}
        >
          <Image
            source={btnSetaAzul}
          />
        </TouchableOpacity>
        <Image
          source={lopi}
          style={{ position: "absolute", top: "75%", left: "10%" }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  patinhas: {
    position: "absolute",
    flex: 1,
    resizeMode: "cover",
    width: "100%",
    height: "100%"
  },
  campo2: {
    flexDirection: "row",
    alignItems: "center"
  },
  campo3: {}

  // rest of the styles
});
