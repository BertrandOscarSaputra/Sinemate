import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {AddPhoto} from '../../components/molecules/index';
import {OrgButton, Gap} from '../../components/atoms/index';

const Profile = () => {
  return (
    <View style={styles.pageContainer}>
      <View style={styles.contentContainer}>
        <AddPhoto />
        <Gap height={16} />
        <OrgButton label="Continue" />
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
  },
  contentContainer: {
    backgroundColor: 'black',
    marginTop: 24,
    flex: 1,
    paddingHorizontal: 24,
  },
});