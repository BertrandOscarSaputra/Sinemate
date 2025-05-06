import React, {useState} from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import {Button, Gap, BackArrow} from '../../components/atoms';
import {useNavigation} from '@react-navigation/native';
import {TextInput} from 'react-native';
import {auth} from '../../config/Firebase';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {showMessage} from 'react-native-flash-message';

const LogIn = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        const user = userCredential.user;
        navigation.reset({
          index: 0,
          routes: [
            {
              name: 'MainApp',
              params: {
                uid: user.uid,
                displayName: user.displayName,
                photoURL: user.photoURL,
              },
            },
          ],
        });
      })
      .catch(error => {
        let errorMessage = 'Something went wrong. Please try again.';

        if (error.code === 'auth/user-not-found') {
          errorMessage = 'No user found with this email.';
        } else if (error.code === 'auth/wrong-password') {
          errorMessage = 'Incorrect password.';
        } else if (error.code === 'auth/invalid-email') {
          errorMessage = 'Please enter a valid email address.';
        }

        showMessage({
          message: errorMessage,
          type: 'danger',
        });
      });
  };

  return (
    <View style={styles.pageContainer}>
      <View style={styles.backArrowContainer}>
        <BackArrow title={'Log In'} />
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
          placeholder="Enter your email"
          placeholderTextColor="#aaa"
          style={styles.textInput}
          value={email}
          onChangeText={value => setEmail(value)}
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
          style={styles.textInput}
          secureTextEntry={true}
          value={password}
          onChangeText={value => setPassword(value)}
        />
      </View>

      <Gap height={30} />

      <Button label="Log In" onPress={onSubmit} style={styles.login} />

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
