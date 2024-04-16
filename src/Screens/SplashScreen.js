import {View, Image, Dimensions, StyleSheet, Platform} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

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
        <LinearGradient
          colors={['rgba(255,255,255,0)', 'rgba(0,0,0,1)', 'rgba(0,0,0,1)']}
          style={styles.gradient}></LinearGradient>
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
    height: windowHeight * 0.4,
    width: windowWidth,
    position: 'absolute',
    bottom: -windowHeight * 0.15,
    opacity: 1,
  },
  imageContainerChild: {
    width: 150,
    height: 100,
    alignSelf: 'center',
    resizeMode: 'contain',
    marginTop: Platform.OS == 'ios' ? -100 : -30,
  },
});

export default SplashScreen;
