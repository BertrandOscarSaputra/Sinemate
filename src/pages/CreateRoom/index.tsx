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

const CreateRoom = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      {/* Back Arrow at top */}
      <View style={styles.header}>
        <BackArrow title={'Create Room'} />
      </View>
      <Gap height={20} />

      {/* Centered Inputs */}
      <View style={styles.content}>
        <TextInputCreate
          label={'Room Code'}
          placeholder={'Enter room code...'}
        />
        <Gap height={20} />
        <TextInputCreate
          label={'Room Name'}
          placeholder={'Enter room name...'}
        />
        <Gap height={20} />
        <TextInputCreate
          label={'Video Source'}
          placeholder={'Enter youtube link...'}
        />
        <Gap height={40} />
        <OrgButton
          label={'Create'}
          onPress={() => navigation.navigate('Room')}
        />
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
    paddingTop: 40, // Status bar height + some margin
    paddingHorizontal: 20,
  },
  content: {
    flex: 1,
    justifyContent: 'center', // Center vertically
    paddingHorizontal: 20,
  },
});
