import App from './App';
import axios from 'axios';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);

// Enter -----------------------------------------------------
import splash from './src/screen/enter/splash';
import {Permission} from 'react-native-permissions';
import onBoarding from './src/screen/Enter/onBoarding';

// Main ------------------------------------------------------
import MainPage from './src/screen/Main/mainPage';

AppRegistry.registerComponent(appName, () => App);
