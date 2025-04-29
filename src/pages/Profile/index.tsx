import {StyleSheet, View, Image} from 'react-native';
import React from 'react';
import {AddPhoto } from '../../components/atoms';
import {TextInput} from 'react-native';
import {Gap} from '../../components/atoms';
import {OrgButton} from '../../components/atoms';
import {useNavigation} from '@react-navigation/native';
const Profile = () => {
  const navigation = useNavigation();
  
    const LogInSignUp = () => {
      navigation.reset({
        index: 0,
        routes: [{name: 'LogInSignUp'}],
      });
    }
  return (
    <View>
      <AddPhoto/>

      <View style={styles.inputContainer}>
        <Image
          source={require('../../assets/Profile2.png')}
          style={styles.inputIcon}
        />
        <TextInput
          placeholder="Username"
          placeholderTextColor="#aaa"
          secureTextEntry
          style={styles.textInput}
          />
      </View>
      <Gap height={20} />
      <View style={styles.inputContainer}>
        <Image
          source={require('../../assets/At.png')}
          style={styles.inputIcon}
        />
        <TextInput
          placeholder="Email@gmail.com"
          placeholderTextColor="#aaa"
          secureTextEntry
          style={styles.textInput}
        />
      </View>
    <Gap height={20} />
    <View style={styles.divider} />
    <Gap height={15} />
    <OrgButton
        label="Save"onPress={() => navigation.replace('LogInSignUp')}/>
    <Gap height={15} />
    <View style={styles.divider} />
    <Gap height={15} />
    <OrgButton
        label="Log Out" onPress={() => navigation.replace('LogInSignUp')}/>
    </View>
  );
};



export default Profile;

const styles = StyleSheet.create({

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
    color: '#fff'
  },
  divider: {
    height: 1,
    backgroundColor: '#fff',
    marginVertical: 10,
    width: '89%',
    alignSelf: 'center',
  },
});