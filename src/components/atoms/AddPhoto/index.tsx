import React, {useState, useEffect} from 'react';
import {
  Image,
  TouchableOpacity,
  StyleSheet,
  PermissionsAndroid,
  Platform,
  Alert,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';

const AddPhoto = ({imageBase64, setImageBase64}) => {
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
        includeBase64: true,
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
          const asset = response.assets[0];
          setImageUri(asset.uri);
          setImageBase64(asset.base64); // pass base64 to parent
        }
      },
    );
  };

  const displayImageSource = () => {
    if (imageUri) {
      return {uri: imageUri};
    } else if (imageBase64) {
      return {uri: `data:image/jpeg;base64,${imageBase64}`};
    } else {
      return require('../../../assets/null-photo.png');
    }
  };

  return (
    <TouchableOpacity style={styles.wrapper} onPress={handlePickImage}>
      <Image source={displayImageSource()} style={styles.image} />
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
    marginTop: 150,
    marginBottom: 50,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default AddPhoto;
