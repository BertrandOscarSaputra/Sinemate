import {
  StyleSheet,
  View,
  Image,
  TextInput,
  Alert,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {auth} from '../../config/Firebase';
import {AddPhoto, Gap, OrgButton} from '../../components/atoms';
import {useNavigation} from '@react-navigation/native';
import {getDatabase, ref, get, set} from 'firebase/database';

const Profile = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [imageBase64, setImageBase64] = useState(null);
  const [loading, setLoading] = useState(false);

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
            if (data.profileImage) {
              setImageBase64(data.profileImage);
            }
          } else {
            console.log('No data available');
          }
        })
        .catch(error => {
          console.error(error);
        });
    }
  }, []);

  const handleSave = async () => {
    const db = getDatabase();
    const user = auth.currentUser;

    if (user) {
      const userRef = ref(db, `users/${user.uid}`);
      setLoading(true);
      try {
        await set(userRef, {
          username,
          email,
          profileImage: imageBase64 || '',
        });
        Alert.alert('Success', 'Profile updated successfully');
      } catch (error) {
        console.error('Failed to save profile:', error);
        Alert.alert('Error', 'Failed to save profile');
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <View>
      <AddPhoto imageBase64={imageBase64} setImageBase64={setImageBase64} />

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
        label={loading ? <ActivityIndicator color="#fff" /> : 'Save'}
        onPress={handleSave}
        disabled={loading}
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
