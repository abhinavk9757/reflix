/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import 'react-native-gesture-handler';
import Master from './src/Master';
import { StyleSheet } from 'react-native';

const App = () => {
  return (
    <Master />
  );
};

export default App;

const styles = StyleSheet.create({
  appNav: {
    backgroundColor: 'black'
  }
})