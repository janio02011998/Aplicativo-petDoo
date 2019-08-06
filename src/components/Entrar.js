import React from "react";
import { Text, View, Image, StyleSheet, TextInput } from "react-native";

const Logo = require("../.../../imgs/logo_petdoo.png");
const PatinhasRosa = require("../../imgs/patinhas_rosa.png");
const backEntrar = require("../../imgs/backEntrar.png");
const btnFacebook = require("../../imgs/btnFacebook.png");
const btnGoogle = require("../../imgs/btnGoogle.png");
const recuperar_senha = require("../../imgs/recuperar_senha.png");
const btnEntrar = require("../../imgs/btnEntrar.png");
const email = require("../../imgs/email.png");
const key = require("../../imgs/key.png");

export default class Entrar extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={PatinhasRosa} style={styles.patinhasrosas} />
        <View style={styles.Campo1}>
          <Image source={backEntrar} />
          <Image source={Logo} style={styles.logo} />
        </View>

        <View style={styles.Campo2}>
          <View style={styles.Emailkey}>
            <Image source={email} />
            <TextInput style={styles.login} placeholder=" e-mail" placeholderTextColor='#1777AB'/>
          </View>

          <View style={styles.Emailkey}>
            <Image source={key} />
            <TextInput style={styles.login} placeholder=" ********" placeholderTextColor='#1777AB'/>
          </View>

          <Image source={recuperar_senha} style={styles.login2} />
          <Image source={btnEntrar} style={styles.login2} />
        </View>

        <View style={styles.Campo3}>
          <Image source={btnFacebook} style={styles.btnFaceGoogle} />
          <Image source={btnGoogle} style={styles.btnFaceGoogle} />
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
    flex: 2,
    flexDirection: "column",
    alignItems: "center",
    top: "15%"
  },
  Campo1: {
    flex: 2,
    flexDirection: "row",
    alignItems: "center"
  },
  Emailkey: {
    flexDirection: "row"
  },
  btnFaceGoogle: {
    width: "40%",
    height: "40%",
    resizeMode: "contain"
  },
  login: {
    margin: 5,
    width: 250,
    backgroundColor: "white",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#F7BCD3",
    fontSize: 20
  },
  login2: {
    margin: 10
  },
  logo: {
    position: "absolute",
    width: "50%",
    height: "50%",
    top: "70%",
    left: "29%",
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
