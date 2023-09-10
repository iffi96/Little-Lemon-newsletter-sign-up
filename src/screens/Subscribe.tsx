import React, {useState} from 'react';
import {
  Alert,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import assets from '../assets';
import {emailRegex} from '../utlis';

const Subscribe = () => {
  const [email, setEmail] = useState('');
  const isValidEmail = emailRegex.test(email);
  const handleSubscribe = () => {
    Alert.alert('Thanks for subscribing,\nstay tuned!');
  };

  return (
    <View style={styles.mainContainer}>
      <Image
        source={assets.logo_gray}
        style={styles.imageStyle}
        resizeMode="contain"
      />
      <Text style={styles.textStyle}>
        Subscribe to our newsletter for our{'\n'}latest dilicious recipes!
      </Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        style={styles.email}
        placeholder="Type your email"
        keyboardType="email-address"
      />
      <Pressable
        style={[
          styles.btnContainer,
          isValidEmail ? {} : styles.disableBtnContainer,
        ]}
        disabled={!isValidEmail}
        onPress={handleSubscribe}>
        <Text style={styles.btnTitle}>Subscribe</Text>
      </Pressable>
    </View>
  );
};

export default Subscribe;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    padding: 24,
  },
  subContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyle: {
    height: 140,
    width: 140,
  },
  textStyle: {
    fontWeight: '500',
    fontSize: 18,
    paddingVertical: 40,
    textAlign: 'center',
  },
  btnContainer: {
    padding: 12,
    margin: 20,
    borderRadius: 8,
    width: '100%',
    backgroundColor: '#40514C',
  },
  disableBtnContainer: {
    backgroundColor: '#B7B7B7',
  },
  btnTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
    alignSelf: 'center',
  },
  email: {
    width: '100%',
    padding: 12,
    borderWidth: 2,
    borderRadius: 8,
    color: 'black',
  },
});
