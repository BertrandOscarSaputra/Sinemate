import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {Logo, Logos} from '../../assets';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => navigation.replace('LogInSignUp'), 2500);
  }, []);
  return (
    <View style={styles.container}>
      <Logos/>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Poppins-Medium',
    fontSize: 32,
  },
});
