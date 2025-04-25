import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Button, BackArrow} from '../../components/atoms'; // your custom button
import {useNavigation} from '@react-navigation/native';

const LogIn = () => {
  const navigation = useNavigation();

  const handleLogin = () => {
    // Here you'd normally check credentials or call an API
    // For now we simulate success and go to main app
    navigation.replace('MainApp'); // ✅ This replaces the screen with the bottom tabs
  };

  return (
    <View style={styles.container}>
      <BackArrow title="Log In" />
      <Button label="Log In" onPress={handleLogin} />
    </View>
  );
};

export default LogIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
  },
});
