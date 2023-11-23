import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
import {mvs} from '../config/metrices';
import Colors from '../config/colors';

const AttendeesCounter = ({images}: any) => {
  const displayImages = images?.slice(0, 3);
  return (
    <View style={styles.container}>
      {displayImages?.map((source: any, index: any) => (
        <View
          key={index}
          style={[styles.avatar, index > 0 && {marginLeft: mvs(-15)}]}
        >
          <Image source={{uri: source?.image}} style={styles.image} />
        </View>
      ))}
      {images?.length > 3 && (
        <View
          style={[
            styles.avatar,
            {marginLeft: mvs(-15), backgroundColor: Colors.primary},
          ]}
        >
          <Text style={styles.text}>{`${images?.length - 3}+`}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: mvs(20),
    marginLeft: mvs(16),
  },
  avatar: {
    height: mvs(40),
    width: mvs(40),
    borderRadius: 50,
    borderWidth: 1,
    borderColor: Colors.heading,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  text: {
    color: Colors.heading,
    fontSize: mvs(14),
    textAlign: 'center',
    alignSelf: 'center',
  },
});

export default AttendeesCounter;
