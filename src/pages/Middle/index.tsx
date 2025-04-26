import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, Gap} from '../../components/atoms';
import {useNavigation} from '@react-navigation/native';

const Middle = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Button
        label="Create Room"
        onPress={() => navigation.navigate('CreateRoom')}
      />
      <Gap height={20} />
      <Button
        label="Join Room"
        onPress={() => navigation.navigate('JoinRoom')}
      />
    </View>
  );
};

export default Middle;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
  },
});
