import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import React from 'react';
import {TextInputCreate} from '../../components/molecules';
import {Gap, BackArrow, OrgButton} from '../../components/atoms';
import {useNavigation} from '@react-navigation/native';

const JoinRoom = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      {/* Back Arrow at top */}
      <View style={styles.header}>
        <BackArrow title={'Join Room'} />
      </View>
      <Gap height={20} />

      {/* Centered Inputs */}
      <View style={styles.content}>
        <Image
          source={require('../../assets/Illust.png')}
          style={styles.image}
        />
        <TextInputCreate
          label={'Room Code'}
          placeholder={'Enter room code...'}
        />
        <Gap height={30} />
        <OrgButton label={'Join'} />
      </View>
    </ScrollView>
  );
};

export default JoinRoom;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  image: {
    marginLeft: 20,
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
