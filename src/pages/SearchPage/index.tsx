import {
  StyleSheet,
  View,
  ScrollView,
} from 'react-native';
import React from 'react';
import {Gap, BackArrowSearch} from '../../components/atoms';
import {useNavigation} from '@react-navigation/native';

const SearchPage = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      <Gap height={40} />
      <View>
        <BackArrowSearch />
      </View>
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
    paddingTop: 40, 
    paddingHorizontal: 20,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
});
