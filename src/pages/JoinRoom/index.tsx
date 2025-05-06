import {StyleSheet, Text, View, ScrollView, Image, Alert} from 'react-native';
import React, {useState} from 'react';
import {TextInputCreate} from '../../components/molecules';
import {Gap, BackArrow, OrgButton} from '../../components/atoms';
import {useNavigation} from '@react-navigation/native';
import {getDatabase, ref, get} from 'firebase/database'; // 🔹 Add this
import {auth} from '../../config/Firebase'; // optional, if you want to store the joining user later

const JoinRoom = () => {
  const navigation = useNavigation();
  const [roomCode, setRoomCode] = useState('');

  const handleJoin = async () => {
    if (roomCode.trim() === '') {
      Alert.alert('Please enter a valid room code');
      return;
    }

    try {
      const db = getDatabase();
      const roomRef = ref(db, `rooms/${roomCode}`);
      const snapshot = await get(roomRef);

      if (snapshot.exists()) {
        // Optionally, you can add the user to the room's "users" list here
        navigation.navigate('LiveRoom', {roomCode});
      } else {
        Alert.alert(
          'Room not found',
          'The room code you entered does not exist.',
        );
      }
    } catch (error) {
      console.error('Join room error:', error);
      Alert.alert('Error', 'Failed to join room. Please try again.');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <BackArrow title={'Join Room'} />
      </View>
      <Gap height={20} />
      <View style={styles.content}>
        <Image
          source={require('../../assets/Illust.png')}
          style={styles.image}
        />
        <TextInputCreate
          label={'Room Code'}
          placeholder={'Enter room code...'}
          value={roomCode}
          onChangeText={setRoomCode}
        />
        <Gap height={30} />
        <OrgButton label={'Join'} onPress={handleJoin} />
      </View>
    </ScrollView>
  );
};

export default JoinRoom;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  header: {
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 30,
  },
});
