import React from 'react';
import {SvgUri} from 'react-native-svg';
import {TouchableOpacity, View, StyleSheet} from 'react-native';

import menubar from '../../android/app/src/main/assets/image/menubar.svg';
import logo from '../../android/app/src/main/assets/image/logo.svg';
import bell from '../../android/app/src/main/assets/image/bell.svg';
import users from '../../android/app/src/main/assets/image/users.svg';

const Header = ({navigation}) => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity
        onPress={() => navigation.openDrawer()}
        style={styles.icon}>
        <SvgUri uri={menubar} width={30} height={30} />
      </TouchableOpacity>

      <SvgUri uri={logo} width={60} height={60} />

      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Notifications')}
          style={styles.icon}>
          <SvgUri uri={bell} width={30} height={30} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('MyPage')}
          style={[styles.icon, styles.lastIcon]}>
          <SvgUri uri={users} width={30} height={30} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flex: 0.3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
    paddingVertical: 10,
    paddingHorizontal: 15,
    // backgroundColor: '#000',
  },

  icon: {
    marginHorizontal: 10,
  },

  lastIcon: {
    marginRight: 0,
  },
});

export default Header;