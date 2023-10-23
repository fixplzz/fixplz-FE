import React, {useEffect} from 'react';
import {Shadow} from 'react-native-shadow-2';
import {enableScreens} from 'react-native-screens';
import {View, Text, StyleSheet, Image} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

enableScreens();

const Stack = createStackNavigator();

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('MainPage');
    }, 2000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Shadow startColor="#000000" distance={30} radius={10} offset={[0, 10]}>
          <Text style={styles.mainlogo01}>도로 위</Text>
          <Text style={styles.mainlogo02}>성동구</Text>
        </Shadow>
      </View>
      <Image
        source={require('../../../android/app/assets/image/whitecircle.png')}
        style={styles.mainCircle}
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
    marginTop: 100,
    marginLeft: 120,
  },
  mainlogo01: {
    fontSize: 60,
    marginLeft: 33,
    marginBottom: -60,
    fontFamily: 'HS여름물빛체',
    color: 'white',
  },
  mainlogo02: {
    fontSize: 90,
    fontFamily: 'HS여름물빛체',
    color: 'white',
  },
  mainCircle: {
    width: 350,
    height: 350,
    marginRight: 170,
  },
});

export default Splash;
