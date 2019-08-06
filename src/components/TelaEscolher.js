import React from "react";
import { Picker, View, Image, StyleSheet, TextInput } from "react-native";

const Logo = require("../../imgs/logo_petdoo.png");
const PatinhasRosa = require("../../imgs/patinhas_rosa.png");
const backEntrar = require("../../imgs/backEntrarAchatado.png");
const foto = require("../../imgs/logoGato.png");
const ong = require("../../imgs/ong.png");
const queroApadrinhar = require("../../imgs/queroApadrinhar.png");
const como_podemos_ajudar = require("../../imgs/como_podemos_ajudar.png");


export default class TelaEscolher extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={PatinhasRosa} style={styles.patinhasrosas} />
        <View style={styles.Campo1}>
          <Image source={backEntrar} />
          <Image source={como_podemos_ajudar} style={{ position:'absolute', left: "30%", width:'50%', height:'40%', resizeMode:'contain'}}/>
          <Image source={Logo} style={styles.logo} />
          <Image source={foto} style={styles.foto} />
        </View>

        <View style={styles.Campo2}>
          <Image source={ong} />
          <Image source={queroApadrinhar} />
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  Campo3: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around"
  },
  Campo2: {
    flex: 3,
    flexDirection: "column",
    alignItems: "center",
    top: "15%"
  },
  Campo1: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  },
  foto: {
    position: "absolute",
    width: "85%",
    height: "80%",
    resizeMode: "contain",
    top: "65  %",
    left: "12.5%"
  },
  logo: {
    position: "absolute",
    width: "40%",
    height: "40%",
    top: "16%",
    right: "-5%",
    resizeMode: "contain"
  },
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between"
  },
  patinhasrosas: {
    position: "absolute",
    flex: 1,
    resizeMode: "cover",
    width: "100%",
    height: "100%"
  }

  // rest of the styles
});
