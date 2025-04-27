import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Button, Gap, BackArrow} from '../../components/atoms'; // your custom button
import {useNavigation} from '@react-navigation/native';
<<<<<<< HEAD
import {TextInput} from '../../components/molecules';
import { Image } from 'react-native';
=======
import {TextInputCreate} from '../../components/molecules';
>>>>>>> bertrand/change

const LogIn = () => {
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.reset({
      index: 0,
      routes: [{name: 'MainApp'}],
    });
  };

  return (
    <View style={styles.pageContainer}>
      <View>
<<<<<<< HEAD
        <Image source={require('../../assets/Arrow.png')}/>
        <Image source={require('../../assets/Logo.png')} style={{width: 100, height: 100}}/>
        <Gap height={38} />
        <TextInput label="Email" placeholder="Enter your email" />
        <Gap height={38} />
=======
        <BackArrow title="Log In" />
        <Gap height={20} />
>>>>>>> bertrand/change
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
