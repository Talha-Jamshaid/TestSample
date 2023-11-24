//import liraries
import React, { Component, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  ScrollView,
  TouchableOpacity,
  Linking,
} from 'react-native';
import { mvs } from '../../config/metrices';
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
import { styles } from './styles';
import AttendeesCounter from '../../components/attendees';
//@ts-ignore
import DateRangePicker from 'react-native-daterange-picker';
import moment from 'moment';

// create a component
const EventDetailsDesign = ({
  saveEvent,
  eventData,
  openLocation,
  setDates,
  minDate,
  maxDate,
  //dateRange,
  displayedDate,
  startDate,
  endDate,
}: string | any) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <View style={styles.imageContainer}>
        <LinearGradient
          colors={['#131313', '#13131300']}
          style={styles.linearGrandient}
        ></LinearGradient>
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
        <Tag title={eventData?.tag} color={Colors.tag} style={styles.tag} />
      </View>
      <View style={styles.mainContainer}>
        <Tag
          mt={mvs(20)}
          title={`FROM ${eventData?.price}`}
          color={Colors.primary}
          style={styles.price}
        />
        <Text style={styles.title}>{eventData?.title}</Text>
        <Read description={eventData?.description} />
        <Title mt={mvs(20)} title={'Who’s going'} />
        <AttendeesCounter images={eventData?.attendees} />
        <Title mt={mvs(20)} title={'Categories'} />
        <ScrollView
          style={styles.categories}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {eventData?.categories.map((item: any, index: any) => (
            <Category title={`${item.name}`} key={index} />
          ))}
        </ScrollView>
        <View style={styles.buttonsContainer}>
          <Pressable onPress={saveEvent} style={styles.calanderButton}>
            <Calendar />
          </Pressable>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>{'Get tickets'}</Text>
          </TouchableOpacity>
        </View>
        <Title mt={mvs(20)} title={'Date & Time'} />
        <DateRangePicker
          onChange={setDates}
          startDate={moment(startDate)}
          endDate={moment(endDate)}
          minDate={minDate}
          maxDate={maxDate}
          range
          displayedDate={displayedDate}
        >
          <Text style={styles.date}>
            {`${moment(startDate).format('ddd, MMM DD')} - ${moment(
              endDate
            ).format('MMM DD')}  •  ${eventData?.eventStartTime} - ${
              eventData?.eventEndTime
            }`}
          </Text>
        </DateRangePicker>
        <Title mt={mvs(31)} title={'Location'} />
        <Text style={styles.location}>{eventData?.address?.address}</Text>
        <Pressable style={styles.directionContainer}>
          <Direction />
          <Text style={styles.direction} onPress={openLocation}>
            {'Get directions'}
          </Text>
        </Pressable>
        <Title mt={mvs(20)} title={'Organised by'} />
        <Organiser title={eventData?.organiser} />
      </View>
    </ScrollView>
  );
};

//make this component available to the app
export default EventDetailsDesign;
