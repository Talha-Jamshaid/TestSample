//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {mvs} from '../../config/metrices';
import Colors from '../../config/colors';
import Title from '../../components/title';
import Tag from '../../components/tag';
import {
  BackIcon,
  Calendar,
  Direction,
  Export,
  Flag,
  Heart,
} from '../../../assets/svgs';
import Read from '../../components/read';
import LinearGradient from 'react-native-linear-gradient';
import Category from '../../components/category';
import Organiser from '../../components/organiser';
import {styles} from './styles';
import AttendeesCounter from '../../components/attendees';

// create a component
const EventDetailsDesign = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <View style={styles.imageContainer}>
        <LinearGradient
          colors={['#131313', '#13131300']}
          style={styles.linearGrandient}></LinearGradient>
        <Pressable style={styles.back}>
          <BackIcon />
        </Pressable>
        <View style={styles.iconsContainer}>
          <Flag />
          <Heart />
          <Export />
        </View>
        <Image
          source={require('../../../assets/images/banner1.png')}
          style={styles.banner}
        />
        <Tag title={'LIVE EVENT'} color={Colors.tag} style={styles.tag} />
      </View>
      <View style={styles.mainContainer}>
        <Tag
          mt={mvs(20)}
          title={'FROM £ 25.00'}
          color={Colors.primary}
          style={styles.price}
        />
        <Text style={styles.title}>{'Dinner with Fairgrove Partners'}</Text>
        <Read
          description={`Join us for an unforgettable evening of fine dining and networking unforgettable evening of fine dining and networking`}
        />
        <Title mt={mvs(20)} title={'Who’s going'} />
        <AttendeesCounter images={[
          {image: 'https://medicosfamilyclinic.com/wp-content/uploads/2020/06/medical-clinic-672x372.jpg'},
          {image: 'https://medicosfamilyclinic.com/wp-content/uploads/2020/06/medical-clinic-672x372.jpg'},
          {image: 'https://medicosfamilyclinic.com/wp-content/uploads/2020/06/medical-clinic-672x372.jpg'},
          {image: 'https://medicosfamilyclinic.com/wp-content/uploads/2020/06/medical-clinic-672x372.jpg'}

        ]}/>
        <Title mt={mvs(20)} title={'Categories'} />
        <ScrollView
          style={styles.categories}
          horizontal
          showsHorizontalScrollIndicator={false}>
          <Category title={`🎻  Art & Music`} />
          <Category title={`⚽️  Sport`} />
          <Category title={`🎬  Movie`} />
        </ScrollView>
        <View style={styles.buttonsContainer}>
          <Pressable style={styles.calanderButton}>
            <Calendar />
          </Pressable>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>{'Get tickets'}</Text>
          </TouchableOpacity>
        </View>
        <Title mt={mvs(20)} title={'Date & Time'} />
        <Text style={styles.date}>
          {'Wed, Mar 29 - Mar 30  •  19:00 - 20:00'}
        </Text>
        <Title mt={mvs(31)} title={'Location'} />
        <Text
          style={
            styles.location
          }>{`Museum of Natural History University Of Oxford,  Pitt Rivers Museum OX1 3PP`}</Text>
        <Pressable style={styles.directionContainer}>
          <Direction />
          <Text style={styles.direction}>{'Get directions'}</Text>
        </Pressable>
        <Title mt={mvs(20)} title={'Organised by'} />
        <Organiser />
      </View>
    </ScrollView>
  );
};

//make this component available to the app
export default EventDetailsDesign;
