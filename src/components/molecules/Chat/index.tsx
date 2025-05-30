import {
  StyleSheet,
  Text,
  View,
  TextInput as Input,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {Send} from '../../../assets';

const Chat = ({placeholder, onSendMessage}) => {
  const [message, setMessage] = useState(''); // State to track the message input

  const handleSend = () => {
    if (message.trim()) {
      onSendMessage(message); // Send the message to parent component
      setMessage(''); // Clear input after sending
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Input
          value={message}
          onChangeText={setMessage} // Update message state as user types
          placeholder={placeholder}
          style={[styles.input, {fontSize: 16}]}
          placeholderTextColor="#8e8e93"
        />
        <TouchableOpacity onPress={handleSend} style={styles.sendButton}>
          <Send />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  label: {
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
    paddingLeft: 14,
    paddingBottom: 10,
    marginBottom: 6,
    color: '#FFFFFF',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1F1F1F',
    borderRadius: 10,
    borderColor: '#020202',
    borderWidth: 1,
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    height: 50,
    color: '#FFFFFF',
  },
  sendButton: {
    padding: 10,
    backgroundColor: '#0084FF',
    borderRadius: 18,
    marginLeft: 10,
  },
  sendButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});
