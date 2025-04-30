import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {AccountProfile} from '../../atoms';
import {useNavigation} from '@react-navigation/native'; // Import useNavigation

const RoomCard = ({
  imageSource,
  quote = 'Smile can win',
  name = 'Rackel James',
  onPress = () => {}, // Default onPress can still be overridden
}) => {
  const navigation = useNavigation(); // Initialize navigation

  // Default onPress functionality that includes navigation
  const handlePress = () => {
    onPress(); // Call any additional onPress functionality passed from parent
    navigation.navigate('LiveRoom'); // Replace 'SomeScreen' with the name of the screen you want to navigate to
  };

  return (
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={handlePress} // Use handlePress for navigation
      activeOpacity={0.8}>
      <ImageBackground
        source={imageSource}
        style={styles.image}
        imageStyle={styles.imageStyle}>
        <View style={styles.quoteWrapper}>
          <Text style={styles.quote}>{quote}</Text>
        </View>
      </ImageBackground>

      <View style={styles.profileWrapper}>
        <AccountProfile
          imageSize={32}
          fontSize={18}
          backgroundColor="#000000"
          name={name}
        />
      </View>
    </TouchableOpacity>
  );
};

export default RoomCard;

const styles = StyleSheet.create({
  cardContainer: {
    width: 300,
    borderRadius: 12,
    overflow: 'hidden',
    borderColor: '#D6C189',
    borderWidth: 1,
    backgroundColor: '#000',
    marginBottom: 25,
  },
  image: {
    height: 180,
    justifyContent: 'flex-end',
  },
  imageStyle: {
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  quoteWrapper: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: 10,
  },
  quote: {
    color: '#ffffff',
    fontSize: 16,
  },
  profileWrapper: {
    padding: 6,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#000',
  },
});
