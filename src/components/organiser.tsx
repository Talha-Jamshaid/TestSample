//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {mvs} from '../config/metrices';
import Colors from '../config/colors';

// create a component
const Organiser = ({title}:any) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer} />
      <View style={styles.mainContainer}>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>Follow</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    marginHorizontal: mvs(16),
    padding: mvs(7),
    flexDirection: 'row',
    backgroundColor: '#212121',
    marginTop: mvs(13),
    borderRadius: mvs(16),
    marginBottom: mvs(20),
  },
  imageContainer: {
    height: mvs(92),
    width: mvs(92),
    backgroundColor: Colors.heading,
    borderRadius: mvs(10),
  },
  mainContainer: {
    marginLeft: mvs(11),
    justifyContent:"space-around"
  },
  title: {
    fontSize: mvs(18),
    fontFamily: 'PassengerSans-Regular',
    color: Colors.heading,
    width:mvs(150),
  },
  button: {
    justifyContent:"center",
    alignItems:"center",
    backgroundColor: Colors.primary,
    borderRadius: mvs(6),
    width:mvs(70),
    height:mvs(30)
  },
  text:{
    fontSize:mvs(14),
    fontFamily: 'PassengerSans-Regular',
    color: Colors.heading,
  }
});

//make this component available to the app
export default Organiser;