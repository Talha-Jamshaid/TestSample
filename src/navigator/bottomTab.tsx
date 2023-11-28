import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  Fill,
  Group,
  Location,
  TicketExpired,
  UserProfile,
} from '../../assets/svgs';
import EventDetails from '../screens/eventDetails';
import {mvs} from '../config/metrices';
import {View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#000',
          height: mvs(70),
          borderTopWidth: 0,
        },
      }}
    >
      <Tab.Screen
        name="Location"
        component={EventDetails}
        options={{
          tabBarIcon: ({color, size}) => (
            <Location height={mvs(28)} width={mvs(28)} />
          ),
        }}
      />
      <Tab.Screen
        name="Group"
        component={EventDetails}
        options={{
          tabBarIcon: ({color, size}) => (
            <Group height={mvs(28)} width={mvs(32.667)} />
          ),
        }}
      />
      <Tab.Screen
        name="Fill"
        component={EventDetails}
        options={{
          tabBarIconStyle: {
            marginTop: 10,
          },
          tabBarIcon: ({color, size}) => (
            <Fill height={mvs(56)} width={mvs(78)} />
          ),
        }}
      />
      <Tab.Screen
        name="ExpiredTicket"
        component={EventDetails}
        options={{
          tabBarIcon: ({color, size}) => (
            <TicketExpired height={mvs(32)} width={mvs(32)} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={EventDetails}
        options={{
          tabBarIcon: ({color, size}) => (
            <UserProfile height={mvs(28)} width={mvs(28)} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
