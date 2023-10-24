import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function permissonPage() {
  return (
    <View style={styles.container}>
      <Text style={styles.mainwrite00}>시작하기 전에</Text>
      <Text
        style={
          styles.mainwrite01
        }>{`더 나은 서비스 이용을 위해 \n 동의가 필요한 내용을 확인해주세요`}</Text>

      <Text style={styles.pointText}>필수 접근 권한</Text>
      <View style={styles.minicon}>
        {/* <Image style={styles.icon}></Image> */}
        <Text>카메라 / 사진첩</Text>
        <Text>민원 처리 시, 사진</Text>
      </View>
      <View style={styles.minicon}>
        {/* <Image style={styles.icon}></Image> */}
        <Text>사용자 위치</Text>
        <Text>민원 처리 시, 사진</Text>
      </View>
      <View style={styles.minicon}>
        {/* <Image style={styles.icon}></Image> */}
        <Text>전화</Text>
        <Text>민원 처리 시, 사진</Text>
      </View>

      <Text style={styles.pointText}>선택적 접근 권한</Text>
      <View style={styles.minicon}>
        {/* <Image style={styles.icon}></Image> */}
        <Text>푸시 알림</Text>
        <Text>민원 처리 시, 사진</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainwrite00: {
    fontFamily: 'Pretendard-Bold',
  },
});
