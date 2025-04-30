import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import {Chat} from '../../components/molecules';
import {
  BackArrowLive,
  AccountProfile,
  ChatBubble,
} from '../../components/atoms';
import {useNavigation} from '@react-navigation/native';
import {WebView} from 'react-native-webview';

const LiveRoom = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <BackArrowLive title={'Code: 1234'} />
      </View>

      <View style={styles.videoContainer}>
        <WebView
          style={styles.webview}
          source={{
            uri: 'https://www.youtube.com/embed/jv_yYeOOjUw?si=5C0zx1cqn-D0echJ',
          }}
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
  text: {
    color: '#fff',
    fontSize: 16,
  },
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 80,
  },
  header: {
    marginBottom: 20,
  },
  inputContainer: {
    padding: 10,
    backgroundColor: '#000000',
    borderTopWidth: 1,
    borderTopColor: '#333333',
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
});
