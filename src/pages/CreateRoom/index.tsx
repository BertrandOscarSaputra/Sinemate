import {StyleSheet, Text, View, ScrollView, Alert} from 'react-native';
import React, {useState} from 'react';
import {TextInputCreate} from '../../components/molecules';
import {Gap, BackArrow, OrgButton} from '../../components/atoms';
import {useNavigation} from '@react-navigation/native';
import {getDatabase, ref, set} from 'firebase/database';
import {auth} from '../../config/Firebase';
import uuid from 'react-native-uuid';

const CreateRoom = () => {
  const navigation = useNavigation();
  const [roomCode, setRoomCode] = useState('');
  const [roomName, setRoomName] = useState('');
  const [videoSource, setVideoSource] = useState('');

  const handleCreate = async () => {
    if (!roomName || !videoSource) {
      Alert.alert('Room name and video source are required!');
      return;
    }

    const trimmedCode = roomCode.trim();
    const finalRoomCode =
      trimmedCode !== '' ? trimmedCode : uuid.v4().slice(0, 6);
    const isPrivate = trimmedCode !== '';

    const user = auth.currentUser;
    if (!user) {
      Alert.alert('Error', 'You must be logged in to create a room.');
      return;
    }

    const userId = user.uid;
    const userName = user.displayName; // Keep the original name if it exists
    const userPhoto = user.photoURL; // Keep the original photo URL if it exists

    try {
      const db = getDatabase();
      const roomRef = ref(db, `rooms/${finalRoomCode}`);

      // Set room data in the rooms node
      await set(roomRef, {
        name: roomName,
        videoSource: videoSource, // Directly store the embed URL
        host: userId,
        createdAt: Date.now(),
        isPrivate,
        users: {
          [userId]: true,
        },
      });

      // Only store user info if name and photoURL exist
      if (userName || userPhoto) {
        const userRef = ref(db, `users/${userId}`);
        await set(userRef, {
          name: userName,
          photo: userPhoto, // Only store if available
        });
      }

      navigation.navigate('LiveRoom', {roomCode: finalRoomCode});
    } catch (error) {
      console.error('Failed to create room:', error);
      Alert.alert('Error', 'Could not create room.');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <BackArrow title={'Create Room'} />
      </View>
      <Gap height={20} />

      <View style={styles.content}>
        <TextInputCreate
          label={'Room Code (Private Only)'}
          placeholder={'Enter room code (optional)...'}
          value={roomCode}
          onChangeText={setRoomCode}
        />
        <Gap height={20} />
        <TextInputCreate
          label={'Room Name'}
          placeholder={'Enter room name...'}
          value={roomName}
          onChangeText={setRoomName}
        />
        <Gap height={20} />
        <TextInputCreate
          label={'Video Source (Embed URL)'}
          placeholder={'Enter YouTube embed URL...'}
          value={videoSource}
          onChangeText={setVideoSource}
        />
        <Gap height={40} />
        <OrgButton label={'Create'} onPress={handleCreate} />
      </View>
    </ScrollView>
  );
};

export default CreateRoom;

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
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
});
