import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Button, Gap, BackArrow} from '../../components/atoms'; // your custom button
import {useNavigation} from '@react-navigation/native';
import {TextInput} from '../../components/molecules';

const LogIn = () => {
  const navigation = useNavigation();

  const handleLogin = () => {
    // Here you'd normally check credentials or call an API
    // For now we simulate success and go to main app
    navigation.reset({
      index: 0,
      routes: [{name: 'MainApp'}],
    });
  };

  return (
    <View style={styles.pageContainer}>
      <View>
        <BackArrow title="Log In" />
        <Gap height={20} />
        <TextInput label="Email" placeholder="Enter your email" />
        <Gap height={20} />
        <Button label="Log In" onPress={handleLogin} />
      </View>
    </View>
  );
};

export default LogIn;

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
  },
});
