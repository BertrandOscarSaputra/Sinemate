import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {Image} from'react-native';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => navigation.replace('LogInSignUp'), 2500);
  }, []);
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/Logo.png')}/>
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
