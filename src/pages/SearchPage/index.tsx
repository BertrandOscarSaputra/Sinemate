import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {TextInputCreate} from '../../components/molecules';
import {Gap, BackArrowSearch, OrgButton} from '../../components/atoms';
import {useNavigation} from '@react-navigation/native';

const SearchPage = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      <Gap height={40} />
      <View>
        <BackArrowSearch />
      </View>

      {/* Centered Inputs */}
      <View style={styles.content}></View>
    </ScrollView>
  );
};

export default SearchPage;

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
