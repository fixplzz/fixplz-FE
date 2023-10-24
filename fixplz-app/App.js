import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {LogBox} from 'react-native';
LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();

// Enter ============================================================================================
import OnBoarding from './src/screen/enter/onboarding';
import PermissionPage from './src/screen/enter/permisson-page';
import Splash from './src/screen/enter/splash';

// Main =============================================================================================
import MainPage from './src/screen/main/main-page';

// ================================================================================================== //
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <GestureHandlerRootView style={{flex: 1}}>
        {/* -------------------------------- Enter Page --------------------------------- */}
        <Stack.Navigator initialRouteName="Splash">
          <Stack.Screen
            name="Splash"
            component={Splash}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="OnBoarding"
            component={OnBoarding}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="PermissionPage"
            component={PermissionPage}
            options={{headerShown: false}}
          />
          {/* ------------------------------- Main Page --------------------------------- */}
          <Stack.Screen
            name="MainPage"
            component={MainPage}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </GestureHandlerRootView>
    </NavigationContainer>
  );
}

export default App;
