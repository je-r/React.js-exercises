import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';

type Props = {};
export default class MyApp extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.js
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2A2734',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'white'
  },
  instructions: {
    textAlign: 'center',
    color: '#B0B0B0',
    marginBottom: 5,
  },
});

// You must register the main component
// with the same name as the project
AppRegistry.registerComponent(
  'Native2', () => MyApp
);
