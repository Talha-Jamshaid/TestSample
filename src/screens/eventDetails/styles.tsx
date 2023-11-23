import { StyleSheet } from "react-native";
import Colors from "../../config/colors";
import { mvs } from "../../config/metrices";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.background,
    },
    imageContainer: {
      height: mvs(400),
      width: '100%',
      overflow: 'hidden',
      borderBottomLeftRadius: mvs(20),
      borderBottomRightRadius: mvs(20),
    },
    banner: {
      height: '100%',
      width: '100%',
    },
    mainContainer: {
      flex: 1,
    },
    tag: {
      position: 'absolute',
      bottom: mvs(14),
    },
    price: {
      height: mvs(26),
      width: mvs(110),
      paddingHorizontal: 0,
      paddingVertical: 0,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: mvs(24),
      fontFamily: 'PassengerSans-Medium',
      color: Colors.heading,
      lineHeight: mvs(35),
      marginHorizontal: mvs(16),
      marginTop: mvs(3),
    },
    date: {
      fontSize: mvs(20),
      lineHeight: mvs(24),
      fontFamily: 'PassengerSans-Medium',
      color: Colors.heading,
      marginHorizontal: mvs(16),
      marginTop: mvs(7),
    },
    location: {
      marginHorizontal: mvs(16),
      color: Colors.heading,
      fontSize: mvs(14),
      lineHeight: mvs(21),
      fontFamily: 'PassengerSans-Light',
      marginTop: mvs(13),
    },
    directionContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: mvs(6),
      marginHorizontal: mvs(16),
      marginTop: mvs(5),
    },
    direction: {
      fontSize: mvs(14),
      lineHeight: mvs(18),
      color: Colors.primary,
      fontFamily: 'PassengerSans-Medium',
    },
    back: {
      position: 'absolute',
      left: mvs(16),
      top: mvs(30),
      zIndex: 2,
    },
    linearGrandient: {
      height: mvs(152),
      width: '100%',
      position: 'absolute',
      zIndex: 1,
    },
    iconsContainer: {
      position: 'absolute',
      right: mvs(16),
      top: mvs(30),
      flexDirection: 'row',
      zIndex: 2,
      gap: mvs(8),
    },
    categories: {
      marginTop: mvs(10),
      //marginLeft: mvs(16),
    },
    buttonsContainer: {
      flexDirection: 'row',
      marginHorizontal: mvs(16),
      gap: mvs(9),
      marginTop: mvs(22),
    },
    calanderButton: {
      justifyContent: 'center',
      alignItems: 'center',
      height: mvs(50),
      width: mvs(54),
      borderRadius: mvs(11),
      borderWidth: 1,
      borderColor: Colors.primary,
    },
    button: {
      flex: 1,
      borderRadius: mvs(10),
      backgroundColor: Colors.primary,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonText: {
      fontSize: mvs(18),
      fontFamily: 'PassengerSans-Regular',
      color: Colors.heading,
    },
  });