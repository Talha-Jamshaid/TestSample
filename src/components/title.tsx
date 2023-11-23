//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {mvs} from '../config/metrices';
import Colors from '../config/colors';

// create a component
const Title = ({mt, title = 'Title'}: string | any) => {
  return (
    <View style={{...styles.container, marginTop: mt}}>
      <View style={styles.block} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: mvs(11),
  },
  block: {
    height: mvs(18),
    width: mvs(5.5),
    backgroundColor: Colors.primary,
  },
  title: {
    fontSize: mvs(17),
    fontFamily: 'PassengerSans-Regular',
    color: Colors.heading,
  },
});

//make this component available to the app
export default Title;
