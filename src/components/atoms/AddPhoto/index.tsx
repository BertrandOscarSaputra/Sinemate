import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  PermissionsAndroid,
  Platform,
  Alert,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';

const AddPhoto = () => {
  const [imageUri, setImageUri] = useState(null);

  const requestGalleryPermission = async () => {
    try {
      if (Platform.OS === 'android') {
        if (Platform.Version >= 33) {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES,
            {
              title: 'Photo Access Permission',
              message:
                'App needs access to your photos to choose a profile picture.',
              buttonPositive: 'OK',
            },
          );
          return granted === PermissionsAndroid.RESULTS.GRANTED;
        } else {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
            {
              title: 'Storage Permission',
              message:
                'App needs access to your storage to choose a profile picture.',
              buttonPositive: 'OK',
            },
          );
          return granted === PermissionsAndroid.RESULTS.GRANTED;
        }
      } else {
        return true; // iOS doesn't need this for gallery
      }
    } catch (err) {
      console.warn(err);
      return false;
    }
  };

  const handlePickImage = async () => {
    const hasPermission = await requestGalleryPermission();
    if (!hasPermission) {
      Alert.alert(
        'Permission Denied',
        'Cannot open gallery without permission.',
      );
      return;
    }

    launchImageLibrary(
      {
        mediaType: 'photo',
        quality: 1,
        maxWidth: 512,
        maxHeight: 512,
        selectionLimit: 1,
      },
      response => {
        if (response.didCancel) return;
        if (response.errorCode) {
          console.warn('ImagePicker Error:', response.errorMessage);
          Alert.alert('Error', response.errorMessage || 'Something went wrong');
          return;
        }

        if (response.assets && response.assets.length > 0) {
          setImageUri(response.assets[0].uri);
        }
      },
    );
  };

  return (
    <TouchableOpacity style={styles.wrapper} onPress={handlePickImage}>
      {imageUri ? (
        <Image source={{uri: imageUri}} style={styles.image} />
      ) : (
        <View style={styles.placeholder}>
          <Text style={styles.placeholderText}>Add Photo</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    alignSelf: 'center',
    width: 100,
    height: 100,
    borderRadius: 50,
    borderStyle: 'dashed',
    borderWidth: 2,
    borderColor: '#BDBDBD',
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 24,
  },
  placeholder: {
    width: '100%',
    height: '100%',
    backgroundColor: '#F2F2F2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    color: '#BDBDBD',
    fontSize: 14,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default AddPhoto;
