import {StyleSheet, View} from 'react-native';
import {Button} from '../../components/atoms';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Image} from 'react-native';

const LogInSignUp = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/Logo.png')} style={styles.Logo} />
      <Button label="Log In" onPress={() => navigation.navigate('LogIn')} />
      jakarta04
      <Button label="Sign Up" onPress={() => navigation.navigate('SignUp')} />
    </View>
  );
};

export default LogInSignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
  },
  Logo: {
    width: 100,
    height: 100,
    marginBottom: 50,
  },
});
