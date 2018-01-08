import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import LoginScreen from "./login/index";
import SignupView from "./signup/index";

export default class screens extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SignupView />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});