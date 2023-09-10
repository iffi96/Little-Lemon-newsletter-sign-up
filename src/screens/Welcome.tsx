import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import assets from '../assets';

const Welcome = () => {
  const {navigate} = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const handleNewsletter = () => navigate('Subscribe');

  return (
    <View style={styles.mainContainer}>
      <View style={styles.subContainer}>
        <Image
          source={assets.logo}
          style={styles.imageStyle}
          resizeMode="contain"
        />
        <Text style={styles.textStyle}>
          Little Lemon, your local {'\n'} Mediterranean Bistro
        </Text>
      </View>
      <Pressable style={styles.btnContainer} onPress={handleNewsletter}>
        <Text style={styles.btnTitle}>Newsletter</Text>
      </Pressable>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
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
    fontWeight: 'bold',
    fontSize: 16,
    paddingVertical: 40,
  },
  btnContainer: {
    backgroundColor: '#40514C',
    padding: 12,
    margin: 20,
    borderRadius: 8,
  },
  btnTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
    alignSelf: 'center',
  },
});
