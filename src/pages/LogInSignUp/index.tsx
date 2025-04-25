import {StyleSheet, Text, View} from 'react-native';
import {Button} from '../../components/atoms'; // ✅ make sure your custom Button works with label + onPress
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const LogInSignUp = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Button label="LogIn" onPress={() => navigation.navigate('LogIn')} />
      <Button label="SignUp" onPress={() => navigation.navigate('SignUp')} />
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
});
