import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const Logo = require("../../imgs/logo_petdoo.png");
const btnOk = require("../../imgs/btnOk.png");
const btnNaoAzul = require("../../imgs/btnNaoAzul.png");
const lopi = require("../../imgs/lopi.png");
const Patinhas = require("../../imgs/patinhas.png");
const telainicial6 = require("../../imgs/telainicial6.png");

export default class TelaInicial6 extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <LinearGradient colors={["#8ED2F8", "#F4A3C2"]} style={{ flex: 1 }} />
        <Image source={Patinhas} style={styles.patinhas} />
        <Image
          source={Logo}
          style={{ position: "absolute", left: "15%", top: "10%" }}
        />
          <Image source={telainicial6} style={{ position:'absolute', top:'46%', left:'12.5%'}} />
          <Image source={btnOk} style={{ position:'absolute', top:'75%', left:'35%',}}/>
          <Image source={btnNaoAzul} style={{ position:'absolute', top:'87.5%', left:'55%',}}/>
          <Image source={lopi} style={{ position:'absolute', top:'75%', left:'10%' }}/>
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
