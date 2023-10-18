import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {LogBox} from 'react-native';
LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();

// Enter ============================================================================================
import onBoarding from './src/screen/Enter/onBoarding';
import {Permission} from 'react-native-permissions/dist/typescript/types';
import splash from './src/screen/ent/splash';

// Main =============================================================================================
import mainPage from './src/screen/Main/mainPage';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

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
            component={splash}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="OnBoarding"
            component={onBoarding}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Permission"
            component={Permission}
            options={{headerShown: false}}
          />
          {/* ------------------------------- Main Page --------------------------------- */}
          <Stack.Screen
            name="MainPage"
            component={mainPage}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </GestureHandlerRootView>
    </NavigationContainer>
  );
}

export default App;
