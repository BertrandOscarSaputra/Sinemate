import React from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import {Button, Gap, BackArrow} from '../../components/atoms';
import {useNavigation} from '@react-navigation/native';
import {TextInput} from 'react-native';
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
      <View style={styles.backArrowContainer}>
        <BackArrow title={'Log in'} />
      </View>

      <View style={styles.topSection}>
        <Image source={require('../../assets/Logo.png')} style={styles.logo} />
        <Image
          source={require('../../assets/Login.png')}
          style={styles.loginText}
        />
      </View>

      <Gap height={30} />

      <View style={styles.inputContainer}>
        <Image
          source={require('../../assets/Profilegold.png')}
          style={styles.inputIcon}
        />
        <TextInput
          placeholder="Enter your username"
          placeholderTextColor="#aaa"
          secureTextEntry
          style={styles.textInput}
        />
      </View>

      <Gap height={20} />

      <View style={styles.inputContainer}>
        <Image
          source={require('../../assets/Lock.png')}
          style={styles.inputIcon}
        />
        <TextInput
          placeholder="Enter your password"
          placeholderTextColor="#aaa"
          secureTextEntry
          style={styles.textInput}
        />
      </View>

      <Gap height={30} />

      <Button label="Log In" onPress={handleLogin} style={styles.login}/>

      <Gap height={20} />

      <View style={styles.bottomText}>
        <Text style={styles.accountText}>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.replace('SignUp')}>
          <Text style={styles.signUpText}> Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LogIn;

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: '#000000',
    paddingHorizontal: 24,
    justifyContent: 'center',
  },
  backArrowContainer: {
    position: 'absolute',
    top: 40,
    left: 24,
    zIndex: 1,
  },
  topSection: {
    alignItems: 'center',
  },
  logo: {
    width: 220,
    height: 180,
    marginBottom: 10,
  },
  loginText: {
    width: 100,
    height: 40,
    resizeMode: 'contain',
    marginBottom: 30,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1a1a1a',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 8,
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  inputIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  textInput: {
    flex: 1,
    color: '#fff',
  },
  bottomText: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  accountText: {
    color: '#fff',
  },
  signUpText: {
    color: '#C1A35F',
  },
  login: {
    backgroundColor: '#C1A35F',
  },
});
