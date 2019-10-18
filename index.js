import React from "react";
import {
  AppRegistry,
  asset,
  Image,
  NativeModules,
  StyleSheet,
  Text,
  View,
  VrButton
} from "react-360";

class InfoPanel extends React.Component {
  state = {
    img: {
      name: "info.png",
      width: 100,
      height: 100
    }
  };

  render() {
    let { img } = this.state;

    return (
      <View style={styles.displayPanel}>
        <Image
          source={asset(`${img.name}`)}
          style={{ width: img.width, height: img.height }}
        ></Image>
      </View>
    );
  }
}

export default class TourismAppVR extends React.Component {
  render() {
    return <View></View>;
  }
}

const styles = StyleSheet.create({
  displayPanel: {
    width: 100,
    height: 100,
    flexDirection: "column"
  },
  attractionBox: {
    padding: 20,
    backgroundColor: "#F7F7F7",
    borderColor: "#C4002F",
    borderWidth: 2,
    width: 500
  },
  attractionText: {
    fontSize: 30,
    color: "#C4002F"
  }
});

AppRegistry.registerComponent("TourismAppVR", () => TourismAppVR);
AppRegistry.registerComponent("InfoPanel", () => InfoPanel);
