/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Navigation from './src/navigator/mainNavigator';
import ReactNativeCalendarEvents from 'react-native-calendar-events';

function App(): JSX.Element {

  useEffect(() => {
    ReactNativeCalendarEvents.requestPermissions();
  }, [])

  return (
    <SafeAreaView style={{flex: 1}}>
      <Navigation />
    </SafeAreaView>
  );
}

export default App;
