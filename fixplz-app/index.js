import App from './App';
// import axios from 'axios';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);

// Enter -----------------------------------------------------
import splash from './src/screen/enter/splash';
import PermissionPage from './src/screen/enter/permisson-page';
import onBoarding from './src/screen/enter/onboarding';

// Main ------------------------------------------------------
import MainPage from './src/screen/main/main-page';

AppRegistry.registerComponent(appName, () => App);
