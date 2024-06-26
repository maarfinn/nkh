import {View, Image, Dimensions, StyleSheet, Platform} from 'react-native';
import React from 'react';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const SplashScreen = () => {
  return (
    <>
      <View>
        <Image
          style={styles.imageContainer}
          source={{
            uri: 'https://nkhhammers.com/wp-content/uploads/2022/05/50a623d1-003b-448d-b85c-ac03d5357a7c.jpg',
          }}
        />
        <Image
          style={styles.gradient}
          source={require('../Assets/shade1.png')}
        />
      </View>
      <Image
        style={styles.imageContainerChild}
        source={{
          uri: 'https://nkhhammers.com/wp-content/uploads/2021/07/nkhlogo.png',
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: windowWidth * 2,
    height: windowHeight,
    marginLeft: -20,
    marginTop: -30,
  },
  gradient: {
    height: windowHeight * 0.6,
    width: windowWidth,
    position: 'absolute',
    bottom: -windowHeight * 0.1,
    opacity: 1,
  },
  imageContainerChild: {
    width: 150,
    height: 100,
    alignSelf: 'center',
    resizeMode: 'contain',
    marginTop: Platform.OS == 'ios' ? -100 : -60,
  },
});

export default SplashScreen;
