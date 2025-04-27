import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {TextInputCreate} from '../../components/molecules';
import {Gap, BackArrow, OrgButton} from '../../components/atoms';
import {useNavigation} from '@react-navigation/native';

const LiveRoom = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      {/* Back Arrow at top */}
      <View style={styles.header}>
        <BackArrow title={'Code:'} />
      </View>
    </ScrollView>
  );
};

export default LiveRoom;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  header: {
    paddingTop: 40, // Status bar height + some margin
    paddingHorizontal: 20,
  },
  content: {
    flex: 1,
    justifyContent: 'center', // Center vertically
    paddingHorizontal: 20,
  },
});
