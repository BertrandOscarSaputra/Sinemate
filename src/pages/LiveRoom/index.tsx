import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import {Chat} from '../../components/molecules';
import {Gap, BackArrow, AccountProfile} from '../../components/atoms';
import {useNavigation} from '@react-navigation/native';
import {WebView} from 'react-native-webview';

const LiveRoom = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <BackArrow title={'Code:'} />
      </View>

      {/* Video Container (Fixed) */}
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

      {/* Scrollable Content (Chat and Messages) */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Add more text or dynamic content here */}
        <AccountProfile imageSize={36} fontSize={18} />
      </ScrollView>

      {/* Fixed Chat input */}
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
    paddingTop: 20, // Adjust for status bar or margin
    paddingBottom: 80, // Add bottom padding so last message isn't hidden behind input
  },
  header: {
    marginBottom: 20,
  },
  inputContainer: {
    padding: 10,
    backgroundColor: '#000000', // match background
    borderTopWidth: 1,
    borderTopColor: '#333333',
  },
  videoContainer: {
    height: 280, // Adjust video height
    width: '100%',
    marginBottom: 20,
    overflow: 'hidden',
    borderRadius: 10,
  },
  webview: {
    flex: 1,
  },
});
