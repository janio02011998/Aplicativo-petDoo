import React from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const Logo = require("../../imgs/logo_petdoo.png");
const btnSeta = require("../../imgs/btnSeta.png");
const lola = require("../../imgs/lola.png");
const Home = require("../../imgs/home.png");
const Patinhas = require("../../imgs/patinhas.png");
const telainicial1 = require("../../imgs/telainicial1.png");

export default class App extends React.Component {
  static navigationOptions = {
    headerTransparent: true,
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
          <Image source={telainicial1} style={{ position:'absolute', top:'47.5%', left:'8%'}} />
          <TouchableOpacity
            activeOpacity={1.0}
            accessible={true}
            style={{ position:'absolute', top:'65%', right:'10%'}}
            accessibilityLabel="Olá, bem vindo ao Petdoo! Meu nome é lola, sou expert em dormir e em comer sachês"
            onPress={() => this.props.navigation.navigate("Lola2")}
          >
          <Image source={btnSeta}/>
          </TouchableOpacity>
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

