import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Dimensions,
  Platform,
} from 'react-native';
import Header from '../../component/header';

const deviceWidth = Dimensions.get('window').width;

const MainPage = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <View style={styles.gridContainer}>
        <View style={[styles.box, styles.box1]}>
          <Text style={styles.report}>신고</Text>
        </View>
        <View style={[styles.box, styles.box2]}>
          <Text style={styles.check}>내 민원 확인</Text>
        </View>
        <View style={[styles.box, styles.box3]}>
          <Text style={styles.faq}>자주 묻는 질문</Text>
        </View>
        <View style={[styles.box, styles.box4]}>
          <Text style={styles.suggest}>제안</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },

  gridContainer: {
    flex: 1.5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    position: 'relative',
  },

  box: {
    borderRadius: 15,
    marginVertical: '0.5%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  box1: {
    width: '45%',
    height: '40%',
    backgroundColor: '#FDD2D2',
  },

  box2: {
    width: '45%',
    height: '20%',
    backgroundColor: '#FFEA9F',
    position: 'absolute',
    top: '43%',
  },

  box3: {
    width: '45%',
    height: '20%',
    right: '0.5%',
    backgroundColor: '#BCE7FF',
  },

  box4: {
    width: '45%',
    height: '40%',
    borderRadius: 15,
    backgroundColor: '#BDF2D9',
    position: 'absolute',
    top: '23%',
    right: '3%',
  },
  report: {
    color: '#000',
    fontSize: 30,
    fontWeight: '800',
    letterSpacing: -2,
    marginBottom: 150,
    marginRight: 90,
    fontFamily: 'Pretendard-Bold',
  },
  check: {
    color: '#000',
    fontSize: 20,
    fontWeight: '800',
    letterSpacing: -2,
  },
  faq: {
    color: '#000',
    fontSize: 20,
    fontWeight: '800',
    letterSpacing: -2,
  },
  suggest: {
    color: '#000',
    fontSize: 30,
    fontWeight: '800',
    letterSpacing: -2,
    marginTop: 140,
    marginLeft: 80,
  },
});

export default MainPage;
