import React from "react";
import { Picker, View, Image, StyleSheet, TextInput } from "react-native";

const Logo = require("../../imgs/logo_petdoo.png");
const PatinhasRosa = require("../../imgs/patinhas_rosa.png");
const btnProximo = require("../../imgs/proximo.png");
const btnFacebook = require("../../imgs/btnFaceAzul.png");
const btnGoogle = require("../../imgs/btnGoogleAzul.png");
const backEntrar = require("../../imgs/backEntrarAchatado.png");
const email = require("../../imgs/email.png");
const key = require("../../imgs/key.png");
const key2 = require("../../imgs/key2.png");
const cpf = require("../../imgs/cpf.png");
const nome = require("../../imgs/nome.png");
const cidade = require("../../imgs/cidade.png");
const estado = require("../../imgs/estado.png");
const foto = require("../../imgs/foto.png");

export default class Cadastrar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      estado: "",
      cidade: ""
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={PatinhasRosa} style={styles.patinhasrosas} />
        <View style={styles.Campo1}>
          <Image source={backEntrar}  />
          <Image source={Logo} style={styles.logo} />
          <Image source={foto} style={styles.foto} />
        </View>

        <View style={styles.Campo2}>
          <View style={styles.Formulario}>
            <Image source={email} />
            <TextInput
              style={styles.login}
              placeholder=" e-mail"
              placeholderTextColor="#1777AB"
            />
          </View>

          <View style={styles.Formulario}>
            <Image source={nome} />
            <TextInput
              style={styles.login}
              placeholder=" nome/razão social"
              placeholderTextColor="#1777AB"
            />
          </View>

          <View style={styles.Formulario}>
            <Image source={key} />
            <TextInput
              style={styles.login}
              placeholder=" senha"
              placeholderTextColor="#1777AB"
            />
          </View>

          <View style={styles.Formulario}>
            <Image source={key2} />
            <TextInput
              style={styles.login}
              placeholder=" confirmar senha"
              placeholderTextColor="#1777AB"
            />
          </View>

          <View style={styles.Formulario}>
            <Image source={cpf} />
            <TextInput
              style={styles.login}
              placeholder=" CPF/CNPJ"
              placeholderTextColor="#1777AB"
            />
          </View>

          <View style={{flexDirection:'column'}}>
            <View style={{flexDirection:'row', right:'65.5%'}}>
              <Image source={estado} />
              <Picker
                placeholder="Estado"
                placeholderTextColor="#1777AB"
                selectedValue={this.state.estado}
                style={{ height: 50, width: 110 }}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({ estado: itemValue })
                }
              >
                <Picker.Item label="Bahia" value="BA" />
                <Picker.Item label="Recife" value="RE" />
              </Picker>
            </View>
            <View style={{flexDirection:'row', right:'65.5%'}}>
              <Image source={cidade} />
              <Picker
                placeholder="Estado"
                placeholderTextColor="#1777AB"
                selectedValue={this.state.cidade}
                style={{ height: 50, width: 120 }}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({ cidade: itemValue })
                }
              >
                <Picker.Item label="Ilhéus" value="Ih" />
                <Picker.Item label="Itabuna" value="Itb" />
              </Picker>
            </View>
          </View>

          <Image source={btnProximo} style={styles.login2} />
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
    flex: 3,
    flexDirection: "column",
    alignItems: "center",
    top: "15%",
  },
  Campo1: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  },
  Formulario: {
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
  foto:{
    position:'absolute',
    width: "85%",
    height: "85%",
    resizeMode: "contain", 
    top:'80%',
    left:'12.5%'
  },
  logo: {
    position: "absolute",
    width: "50%",
    height: "50%",
    top: "16%",
    right: "-10%",
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
