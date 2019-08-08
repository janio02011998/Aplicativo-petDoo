import React from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { createAppContainer, createStackNavigator } from "react-navigation"; // Version can be specified in package.json
import EntrarScreen from "./src/components/EntrarScreen";
import CadastrarScreen from "./src/components/CadastrarScreen";
import TelaEscolherScreen from './src/components/TelaEscolher';
import TelaOng from './src/components/TelaInicial4';
import TelaApadrinhar from './src/components/TelaInicial1';
import TelaInicial2 from './src/components/TelaInicial2';
import TelaInicial3 from './src/components/TelaInicial3';
import TelaInicial5 from './src/components/TelaInicial5';
import TelaInicial6 from './src/components/TelaInicial6';
import LoginLola1 from './src/components/LoginLola1';
import LoginLopi1 from './src/components/LoginLopi1';

const Logo = require("./imgs/logo_petdoo.png");
const Login = require("./imgs/login.png");
const CadastrarIMG = require("./imgs/cadastrar.png");
const HomePNG = require("./imgs/home.png");
const Patinhas = require("./imgs/patinhas.png");

class HomeScreen extends React.Component {
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
        <Image
          source={HomePNG}
          style={{ position: "absolute", left: "15%", top: "55%" }}
        />

        <TouchableOpacity
          activeOpacity={1.0}
          accessible={true}
          accessibilityLabel="Botao Entrar"
          style={{ left: "37.5%", top: "65%", position: "absolute" }}
          onPress={() => this.props.navigation.navigate("Entrar")}
        >
          <Image source={Login} />
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={1.0}
          accessible={true}
          accessibilityLabel="Botao Cadastrar"
          style={{ position: "absolute", left: "30%", top: "75%" }}
          onPress={() => this.props.navigation.navigate("Cadastrar")}
        >
          <Image source={CadastrarIMG} />
        </TouchableOpacity>
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

const RootStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Entrar: {
      screen: EntrarScreen
    },
    Cadastrar: {
      screen: CadastrarScreen
    }, 
    TelaEscolher:{
      screen: TelaEscolherScreen
    },
    ONG:{
      screen: TelaOng
    },
    QueroApadrinhar:{
      screen: TelaApadrinhar
    },
    Lola2:{ 
      screen: TelaInicial2
    },
    Lola3:{
      screen: TelaInicial3
    },
    Lopi2:{
      screen: TelaInicial5
    },
    Lopi3:{
      screen: TelaInicial6
    },
    LoginLola: {
      screen: LoginLola1
    },
    LoginLopi:{
      screen: LoginLopi1
    }
  },
  {
    initialRouteName: "Home"
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
