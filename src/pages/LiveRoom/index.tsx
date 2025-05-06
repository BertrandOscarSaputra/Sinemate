import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Chat} from '../../components/molecules';
import {BackArrowLive, ChatBubble} from '../../components/atoms';
import {useNavigation, useRoute} from '@react-navigation/native';
import {WebView} from 'react-native-webview';
import {getDatabase, ref, get} from 'firebase/database';

const LiveRoom = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {roomCode} = route.params;

  const [roomData, setRoomData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRoomData = async () => {
      try {
        const db = getDatabase();
        const roomRef = ref(db, `rooms/${roomCode}`);
        const snapshot = await get(roomRef);

        if (snapshot.exists()) {
          setRoomData(snapshot.val());
        } else {
          console.warn('Room not found.');
        }
      } catch (error) {
        console.error('Error fetching room data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRoomData();
  }, [roomCode]);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#fff" />
      </View>
    );
  }

  if (!roomData) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.text}>Room not found.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <BackArrowLive title={`Code: ${roomCode}`} />
      </View>

      <View style={styles.videoContainer}>
        <WebView
          style={styles.webview}
          source={{uri: roomData.videoSource}}
          allowsFullscreenVideo
          mediaPlaybackRequiresUserAction={false}
        />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <ChatBubble
          message={'Hello, welcome to the live room!'}
          backgroundColor={'#000000'}
          bubbleColor={'#3c3c3c'}
          imageSize={40}
          fontSize={20}
        />
      </ScrollView>

      <View style={styles.inputContainer}>
        <Chat placeholder={'Say something...'} />
      </View>
    </View>
  );
};

export default LiveRoom;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  header: {
    marginBottom: 20,
  },
  videoContainer: {
    height: 280,
    width: '100%',
    marginBottom: 20,
    overflow: 'hidden',
    borderRadius: 10,
  },
  webview: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 80,
  },
  inputContainer: {
    padding: 10,
    backgroundColor: '#000000',
    borderTopWidth: 1,
    borderTopColor: '#333333',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  text: {
    color: '#fff',
    fontSize: 16,
  },
});
