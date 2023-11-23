//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {mvs} from '../config/metrices';
import Colors from '../config/colors';

// create a component
const Tag = ({title = 'title', color, mt, style}: string | any) => {
  return (
    <View
      style={{...styles.tag, backgroundColor: color, marginTop: mt, ...style}}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  tag: {
    paddingHorizontal: mvs(10),
    paddingVertical: mvs(6),
    borderRadius: mvs(6),
    marginLeft: mvs(16)
  },
  title: {
    fontSize: mvs(14),
    fontFamily: 'PassengerSans-Regular',
    color: Colors.heading,
  },
});

//make this component available to the app
export default Tag;
