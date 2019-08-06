import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const Logo = require("../../imgs/logo_petdoo.png");
const btnSeta = require("../../imgs/btnSeta.png");
const lola = require("../../imgs/lola.png");
const Home = require("../../imgs/home.png");
const Patinhas = require("../../imgs/patinhas.png");
const telainicial2 = require("../../imgs/telainicial2.png");

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <LinearGradient colors={["#8ED2F8", "#F4A3C2"]} style={{ flex: 1 }} />
        <Image source={Patinhas} style={styles.patinhas} />
        <Image
          source={Logo}
          style={{ position: "absolute", left: "15%", top: "10%" }}
        />
          <Image source={telainicial2} style={{ position:'absolute', top:'47.5%', left:'8%'}} />
          <Image source={btnSeta} style={{ position:'absolute', top:'65%', right:'10%',}}/>
          <Image source={lola} style={{ position:'absolute', top:'75%', right:'10%' }}/>
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
  campo2:{
    flexDirection:'row',
    alignItems:"center"
  },
  campo3:{
    
  }

  // rest of the styles
});
