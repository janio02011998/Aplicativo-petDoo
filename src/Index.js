import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const Logo = require("../imgs/logo_petdoo.png");
const Login = require("../imgs/login.png");
const Cadastrar = require("../imgs/cadastrar.png");
const Home = require("../imgs/home.png");
const Patinhas = require("../imgs/patinhas.png");

export default class Index extends React.Component {
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
          source={Home}
          style={{ position: "absolute", left: "15%", top: "55%" }}
        />

        <Image
          source={Login}
          style={{ position: "absolute", left: "37.5%", top: "65%" }}
        />
        <Image
          source={Cadastrar}
          style={{ position: "absolute", left: "30%", top: "75%" }}
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
  }

  // rest of the styles
});
