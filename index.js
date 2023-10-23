import App from './App';
// import axios from 'axios';
import {SvgUri} from 'react-native-svg';
import {AppRegistry} from 'react-native';
import {name as fixplzz} from './app.json';

// Component  -----------------------------------------------
import Footer from './src/component/footer';
import Header from './src/component/header';

// Enter -----------------------------------------------------
import Splash from './src/screen/Enter/splash';
import Middle from './src/screen/Enter/middle';

// Main ------------------------------------------------------
import MainPage from './src/screen/Main/main-page';

AppRegistry.registerComponent(fixplzz, () => App);
