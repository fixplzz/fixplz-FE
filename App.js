import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import {LogBox} from 'react-native';
LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();

// Component ========================================================================================
// import Footer from './src/component/footer';
// import Header from './src/component/header';

// Enter ============================================================================================
import Splash from './src/screen/Enter/splash';
import Middle from './src/screen/Enter/middle';

// Main =============================================================================================
import MainPage from './src/screen/Main/main-page';

// ==================================================================================================
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
            name="Middle"
            component={Middle}
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
