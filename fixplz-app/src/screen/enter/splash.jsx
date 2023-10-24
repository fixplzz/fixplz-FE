import React, {useEffect} from 'react';
// import {Shadow} from 'react-native-shadow-2';
import {enableScreens} from 'react-native-screens';
import {View, Text, StyleSheet, Image} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

enableScreens();

const Stack = createStackNavigator();

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('OnBoarding');
    }, 1000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.mainlogo01}>도로 위</Text>
        <Text style={styles.mainlogo02}>성동구</Text>
      </View>
      <Image
        source={require('../../../android/app/src/main/assets/image/innershadow.png')}
        style={styles.maincircle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#018C0D',
  },
  logoContainer: {
    marginTop: 60,
    marginLeft: 120,
  },
  mainlogo01: {
    fontSize: 70,
    marginLeft: 33,
    marginBottom: -65,
    fontFamily: 'HS여름물빛체',
    color: 'white',
    letterSpacing: -1,
    textShadowColor: '#005207',
    textShadowOffset: {width: 2.5, height: 3},
    textShadowRadius: 10,
  },
  mainlogo02: {
    fontSize: 100,
    fontFamily: 'HS여름물빛체',
    color: 'white',
    letterSpacing: -5,
    textShadowColor: '#005207',
    textShadowOffset: {width: 2.5, height: 3},
    textShadowRadius: 10,
  },
  maincircle: {
    width: 300,
    height: 300,
    marginRight: 170,
  },
});

export default Splash;
