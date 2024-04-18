import React, {useState} from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Colors, primaryColor} from '../Utils/Colors';
import {useDispatch} from 'react-redux';
import AppLogo from '../Utils/Logo';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Button = ({onPress, title, style}) => (
  <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
    <Text style={{color: Colors.black, fontSize: 16, fontWeight: '600'}}>
      {title}
    </Text>
  </TouchableOpacity>
);

const EmailVerify = ({navigation}) => {
  const handleNext = () => {};

  return (
    <View>
      <ImageBackground
        source={require('../Assets/shade.png')}
        resizeMode="cover"
        style={{
          height: windowHeight * 0.6,
          width: windowWidth,
        }}>
        <View>
          <View
            style={{
              padding: 20,
              marginTop: windowHeight * 0.25,
            }}>
            <View style={{alignSelf: 'center', marginBottom: 30}}>
              <View
                style={{
                  backgroundColor: Colors.greenColor,
                  borderRadius: 100,
                  height: 90,
                  width: 90,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Icon name="mail-outline" color={Colors.white} size={40} />
              </View>
            </View>
            <View>
              <Text
                style={{
                  color: Colors.white,
                  fontSize: 22,
                  fontWeight: '800',
                  marginBottom: 10,
                  textAlign: 'center',
                }}>
                Check Your Email
              </Text>
              <Text
                style={{
                  color: Colors.input,
                  fontSize: 18,
                  marginBottom: 30,
                  textAlign: 'center',
                  paddingHorizontal: 30,
                }}>
                Click the link we just send to John@doe@gmail.com if you dont
                see it, check spam.
              </Text>
            </View>
            <View style={{marginTop: windowHeight * 0.2}}>
              <Button
                title="Open Email"
                style={{
                  marginTop: 20,
                  backgroundColor: Colors.grey,
                }}
                onPress={handleNext}
              />
              <Text
                style={{
                  color: Colors.white,
                  fontSize: 16,
                  fontWeight: '800',
                  textAlign: 'center',
                  marginTop: 20,
                }}>
                Resend Link
              </Text>
            </View>
          </View>
        </View>
      </ImageBackground>
      <View
        style={{
          backgroundColor: Colors.black,
          height: windowHeight,
          width: windowWidth,
          zIndex: -1,
        }}
      />
    </View>
  );
};

const styles = {
  inputView: {
    height: 50,
    marginBottom: 10,
    justifyContent: 'center',
    paddingHorizontal: 15,
    borderWidth: 0.7,
    borderColor: '#000',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.input,
    marginTop: 15,
  },
  inputText: {
    flex: 1,
    height: 40,
    fontSize: 16,
  },
  button: {
    backgroundColor: Colors.greenColor,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    width: '100%',
    marginTop: 20,
  },
};

export default EmailVerify;
