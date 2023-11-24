/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Navigation from './src/navigator/mainNavigator';

function App(): JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Navigation />
    </SafeAreaView>
  );
}

export default App;
