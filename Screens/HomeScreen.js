import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import * as Font from "expo-font";

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
          fontsLoaded: false,
          isEnabled: false,
          light_theme: true,
          profile_image: "",
          name: ""
        };
}

render (){
    return(
        <View style={styles.appTitleTextContainer}>
        <Text >
            BookWorm
        </Text>
        </View>

    )
}
}

const styles = StyleSheet.create ({
    appTitleTextContainer: {
        flex: 0.07,
        flexDirection: "row"
      }
})