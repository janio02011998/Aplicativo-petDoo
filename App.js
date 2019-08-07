import React from "react";
import { StyleSheet, View, Image, TouchableOpacity, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { createAppContainer, createStackNavigator } from "react-navigation"; // Version can be specified in package.json
import EntrarScreen from "./src/components/EntrarScreen";
import CadastrarScreen from "./src/components/CadastrarScreen";

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
