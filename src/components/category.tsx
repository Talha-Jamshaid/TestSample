//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {mvs} from '../config/metrices';
import Colors from '../config/colors';

// create a component
const Category = ({title}: string | any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: mvs(16),
    paddingVertical: mvs(12),
    borderRadius: mvs(24),
    flexDirection: 'row',
    gap: mvs(3),
    borderWidth: 1,
    borderColor: '#454545',
    marginLeft: mvs(16),
  },
  title: {
    fontSize: mvs(16),
    fontFamily: 'PassengerSans-Medium',
    color: Colors.heading,
  },
});

//make this component available to the app
export default Category;
