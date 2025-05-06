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
import {getDatabase, ref, get, set} from 'firebase/database';

const LiveRoom = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {roomCode} = route.params;

  const [roomData, setRoomData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [messages, setMessages] = useState([]); // State to store chat messages

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

  const handleSendMessage = message => {
    // Add the new message to the messages state
    setMessages(prevMessages => [
      ...prevMessages,
      {id: prevMessages.length + 1, text: message},
    ]);

    // Optionally, send the message to Firebase if needed
    // const db = getDatabase();
    // const messagesRef = ref(db, `rooms/${roomCode}/messages`);
    // set(messagesRef, { messages });
  };

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

  // Function to extract the YouTube embed URL from the iframe string
  const extractYouTubeEmbedUrl = iframe => {
    const regex =
      /src="(https:\/\/www\.youtube\.com\/embed\/[\w-]{11}[\?a-zA-Z0-9=&]*)"/;
    const match = iframe.match(regex);
    return match ? match[1] : null;
  };

  // Get the YouTube video URL from the roomData (iframe embed code)
  const videoUrl = extractYouTubeEmbedUrl(roomData.videoSource);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <BackArrowLive title={`Code: ${roomCode}`} />
      </View>

      <View style={styles.videoContainer}>
        {videoUrl ? (
          <WebView
            style={styles.webview}
            source={{uri: videoUrl}} // Use the extracted video URL
            allowsFullscreenVideo
            mediaPlaybackRequiresUserAction={false}
          />
        ) : (
          <Text style={styles.text}>Invalid video source</Text>
        )}
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {messages.map(message => (
          <ChatBubble
            key={message.id}
            message={message.text}
            backgroundColor={'#000000'}
            bubbleColor={'#3c3c3c'}
            imageSize={40}
            fontSize={20}
          />
        ))}
      </ScrollView>

      <View style={styles.inputContainer}>
        <Chat
          placeholder={'Say something...'}
          onSendMessage={handleSendMessage}
        />
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
