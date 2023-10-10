// 권한 전체 허용을 위한 페이지
import React from 'react';
import {
  Button,
  PermissionsAndroid,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const requestCameraPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSONS.CAMERA,
      {
        title: '카메라 권한 허용',
        message: 'FIXPLZ는 사용자의 카메라 권한 허용 설정이 필요합니다.',
        buttonNeutral: '다음에 다시 묻기',
        buttonNegative: '허용하지 않음',
        buttonPositive: '허용',
      },
    );
    if (granted === PermissionsAndroid.RESULT.GRANTED) {
      console.log('카메라 사용 가능');
    } else {
      console.log('카메라 사용 권한 해제');
    }
  } catch (err) {
    console.warn(err);
  }
};

const App = () => (
  <View style={styles.container}>
    <Text style={styles.item}>Try permissions</Text>
    <Button title="request permissions" onPress={requestCameraPermission} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: StatusBar.currentHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  item: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
