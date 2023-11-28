//import liraries
import React, {Component, useState} from 'react';
import {Alert, Linking} from 'react-native';
import EventDetailsDesign from './design';
import ReactNativeCalendarEvents from 'react-native-calendar-events';
import {eventData} from '../../../services/api';
import moment from 'moment';

// create a component
const EventDetails = () => {
  const [eventId, setEventId] = useState<string | null>(null);
  const [startDate, setStartDate] = useState<string | any>(
    moment(eventData?.eventStartDate)
  );
  const [endDate, setEndDate] = useState<string | any>(
    moment(eventData?.eventEndDate)
  );

  const [displayedDate, setDisplayedDate] = useState(moment());
  const minDate = moment(new Date());
  const maxDate = moment(new Date()).add(5, 'years');

  const setDates = (dates: any) => {
    if (dates.startDate != undefined) {
      setEndDate(null);
      setStartDate(dates.startDate);
    }
    if (dates.displayedDate != undefined) {
      setDisplayedDate(dates.displayedDate);
    }
    if (dates.endDate != undefined) {
      setEndDate(dates.endDate);

      setTimeout(() => {
        saveEvent(dates.endDate);
      }, 5000);
    }
  };

  const openLocation = () => {
    const {address} = eventData;
    const label = 'Custom Label';
    const url = `https://www.google.com/maps/search/?api=1&query=${address?.latitude},${address?.longitude}&query_place_id=${label}`;
    Linking.openURL(url)
      .then((result) => {})
      .catch((error) => {
        console.error('Error opening Google Maps: ', error);
      });
  };

  const saveEvent = (endDate: any) => {
    ReactNativeCalendarEvents.findCalendars().then(
      (calendars: Array<Object> | any) => {
        const calanderId = calendars?.filter(
          (el: string | any) => el?.isPrimary
        )[0]?.id
        if (eventId) {
          ReactNativeCalendarEvents.removeEvent(eventId, {});
        }
        ReactNativeCalendarEvents.saveEvent('TestSample', {
          calendarId: calanderId,
          startDate: `${moment(startDate).format(
            'YYYY-MM-DDTHH:mm:ss.SSS[Z]'
          )}`,
          endDate: `${moment(endDate).format('YYYY-MM-DDTHH:mm:ss.SSS[Z]')}`,
          location: 'Los Angeles, CA',
          notes: 'Bring sunglasses',
        }).then((id) => {
          setEventId(id);
          Alert.alert('Event has been added to your Calander');
        });
      }
    );
  };
  return (
    <EventDetailsDesign
      saveEvent={saveEvent}
      eventData={eventData}
      openLocation={openLocation}
      minDate={minDate}
      maxDate={maxDate}
      setDates={setDates}
      // dateRange={dateRange}
      startDate={startDate}
      endDate={endDate}
      displayedDate={displayedDate}
    />
  );
};

//make this component available to the app
export default EventDetails;
