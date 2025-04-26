import {StyleSheet, Text, View} from 'react-native';
import {Button, Gap} from '../../components/atoms';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Logo, Logos} from '../../assets';

const LogInSignUp = () => {
  const navigation = useNavigation();

  return (

    <View style={styles.container}>
<<<<<<< HEAD
      <Logos style={styles.Logo}/>
      <Button label="Log In" onPress={() => navigation.navigate('LogIn')} />jakarta04
=======
      <Button label="Log In" onPress={() => navigation.navigate('LogIn')} />
      <Gap height={20} />
>>>>>>> 0ea02a846466d055ddaeafe8aa3c7a8811c5ce61
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
