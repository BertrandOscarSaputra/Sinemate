import React, {useState} from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import {Button, Gap, BackArrow} from '../../components/atoms';
import {useNavigation} from '@react-navigation/native';
import {TextInput} from 'react-native';
import {NullPhoto} from '../../assets';
import {showMessage} from 'react-native-flash-message';
import {auth} from '../../config/Firebase';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {getDatabase, ref, set} from 'firebase/database';

const SignUp = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        const user = userCredential.user;
        const db = getDatabase();

        const data = {
          username: username,
          email: email,
        };

        set(ref(db, 'users/' + user.uid), data)
          .then(() => {
            showMessage({
              message: 'Registration success',
              type: 'success',
            });
            navigation.navigate('LogIn');
          })
          .catch(error => {
            showMessage({
              message: 'Failed to save user data',
              description: error.message,
              type: 'danger',
            });
          });
      })
      .catch(error => {
        showMessage({
          message: 'Registration failed',
          description: error.message,
          type: 'danger',
        });
      });
  };

  return (
    <View style={styles.pageContainer}>
      <View style={styles.backArrowContainer}>
        <BackArrow title={'Sign Up'} />
      </View>

      <View style={styles.topSection}>
        <Image source={require('../../assets/Logo.png')} style={styles.logo} />
        <Image
          source={require('../../assets/Signup.png')}
          style={styles.SignText}
        />
      </View>

      <Gap height={30} />

      <View style={styles.inputContainer}>
        <Image
          source={require('../../assets/Message.png')}
          style={styles.inputIcon}
        />
        <TextInput
          placeholder="Enter your e-mail"
          placeholderTextColor="#aaa"
          style={styles.textInput}
          onChangeText={e => setEmail(e)}
        />
      </View>
      <Gap height={20} />
      <View style={styles.inputContainer}>
        <Image
          source={require('../../assets/Profilegold.png')}
          style={styles.inputIcon}
        />

        <TextInput
          placeholder="Enter your username"
          placeholderTextColor="#aaa"
          style={styles.textInput}
          onChangeText={e => setUsername(e)}
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
          onChangeText={e => setPassword(e)}
          style={styles.textInput}
        />
        <Image
          source={require('../../assets/Hide.png')}
          style={styles.inputIconn}
        />
      </View>

      <Gap height={30} />

      <Button label="Sign Up" onPress={onSubmit} style={styles.SignUp} />

      <Gap height={20} />

      <View style={styles.bottomText}>
        <Text style={styles.accountText}>Already have an account?</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.replace('LogIn');
          }}>
          <Text style={styles.signUpText}> Log In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUp;

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
  SignText: {
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
  inputIconn: {
    width: 24,
    height: 24,
    marginLeft: 10,
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
  SignUp: {
    backgroundColor: '#C1A35F',
  },
});
