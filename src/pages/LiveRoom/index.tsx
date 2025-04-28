import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {Chat} from '../../components/molecules';
import {Gap, BackArrow} from '../../components/atoms';
import {useNavigation} from '@react-navigation/native';

const LiveRoom = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* Header and scrollable chat messages */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <BackArrow title={'Code:'} />
        </View>
        {/* here you can render messages later */}
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
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 40, // Status bar height + some margin
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
});
