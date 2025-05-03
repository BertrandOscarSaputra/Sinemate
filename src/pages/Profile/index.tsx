import {StyleSheet, View, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {auth} from '../../config/Firebase';
import {AddPhoto} from '../../components/atoms';
import {TextInput} from 'react-native';
import {Gap} from '../../components/atoms';
import {OrgButton} from '../../components/atoms';
import {useNavigation} from '@react-navigation/native';
import {getDatabase, ref, child, get} from 'firebase/database';

const Profile = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');

  useEffect(() => {
    const db = getDatabase();
    const user = auth.currentUser;
    if (user) {
      const userId = user.uid;

      const userRef = ref(db, `users/${userId}`);

      get(userRef)
        .then(snapshot => {
          if (snapshot.exists()) {
            const data = snapshot.val();
            setUsername(data.username || 'No username');
            setEmail(data.email || 'No email');
          } else {
            console.log('No data available');
          }
        })
        .catch(error => {
          console.error(error);
        });
    }
  }, []);

  return (
    <View>
      <AddPhoto />

      <View style={styles.inputContainer}>
        <Image
          source={require('../../assets/Profile2.png')}
          style={styles.inputIcon}
        />
        <TextInput
          placeholder={username}
          placeholderTextColor="#aaa"
          editable={false}
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
          placeholder={email}
          placeholderTextColor="#aaa"
          editable={false}
          style={styles.textInput}
        />
      </View>
      <Gap height={20} />
      <View style={styles.divider} />
      <Gap height={15} />
      <OrgButton
        label="Save"
        onPress={() => navigation.replace('LogInSignUp')}
      />
      <Gap height={15} />
      <View style={styles.divider} />
      <Gap height={15} />
      <OrgButton
        label="Log Out"
        onPress={() => navigation.replace('LogInSignUp')}
      />
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
    color: '#fff',
  },
  divider: {
    height: 1,
    backgroundColor: '#fff',
    marginVertical: 10,
    width: '89%',
    alignSelf: 'center',
  },
});
