import App from './App';
// import axios from 'axios';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);

// Enter -----------------------------------------------------
import splash from './src/screen/Enter/splash';
import PermissionPage from './src/screen/Enter/permisson-page';
import onBoarding from './src/screen/Enter/onboarding';

// Main ------------------------------------------------------
import MainPage from './src/screen/Main/main-page';

AppRegistry.registerComponent(appName, () => App);
