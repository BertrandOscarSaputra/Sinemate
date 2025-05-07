import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {AccountProfile} from '../../atoms';

const ChatBubble = ({
  message,
  username,
  profileImage,
  backgroundColor = '#000000',
  bubbleColor = '#3c3c3c',
  imageSize = 40,
  fontSize = 16,
}) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.innerWrapper}>
        <AccountProfile
          imageSize={imageSize}
          fontSize={fontSize}
          backgroundColor={backgroundColor}
          name={username}
          photo={profileImage}
        />
        <View style={styles.bubbleWrapper}>
          {/* Tail */}
          <View style={[styles.tail, {borderBottomColor: bubbleColor}]} />
          {/* Bubble */}
          <View style={[styles.bubble, {backgroundColor: bubbleColor}]}>
            <Text style={styles.messageText}>{message}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ChatBubble;

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    marginBottom: 16,
  },
  innerWrapper: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  bubbleWrapper: {
    position: 'relative',
    marginTop: 8,
    marginLeft: 8 + 40 + 8, // Account for profile image width and margin
  },
  bubble: {
    maxWidth: '85%',
    padding: 12,
    borderRadius: 12,
  },
  tail: {
    position: 'absolute',
    top: -10,
    left: 16,
    width: 0,
    height: 0,
    borderLeftWidth: 6,
    borderRightWidth: 6,
    borderBottomWidth: 10,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#3c3c3c',
    zIndex: 1,
  },
  messageText: {
    color: '#ffffff',
    fontSize: 16,
  },
});
