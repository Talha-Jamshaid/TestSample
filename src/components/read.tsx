import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ReadMore from '@fawazahmed/react-native-read-more';
import {mvs} from '../config/metrices';
import Colors from '../config/colors';


const Read = ({description}: string | any) => {
  return (
    <View style={styles.root}>
      <ReadMore
        numberOfLines={2}
        seeMoreText="Read More"
        seeLessText='Read Less'
        seeMoreStyle={styles.readMore}
        seeLessStyle={styles.readMore}
        style={styles.textStyle}>
        {description}
      </ReadMore>
    </View>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
  root: {
    flex: 1,
    paddingHorizontal: mvs(16),
    marginTop: mvs(3),
  },
  textStyle: {
    fontSize: mvs(14),
    color: Colors.description,
    lineHeight: mvs(20),
    fontFamily: 'PassengerSans-Light'
  },
  readMore: {
    color: '#BC61F5',
    fontSize: mvs(14),
    lineHeight: mvs(20),
    fontFamily: 'PassengerSans-Medium'
  },
});

export default Read;
