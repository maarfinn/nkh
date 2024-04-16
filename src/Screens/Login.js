/** @format */

import React, {useState} from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Platform,
  Image,
  ImageBackground,
  Dimensions,
} from 'react-native';
import AppLogo from '../Utils/Logo';
import Icon from 'react-native-vector-icons/Ionicons';
import {Colors, primaryColor} from '../Utils/Colors';
import {useDispatch} from 'react-redux';
import {loginSuccess} from '../Utils/loginReducer';
import Toast from 'react-native-toast-message';
import LinearGradient from 'react-native-linear-gradient';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Userlogin = ({navigation}) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleNext = () => {
    console.log('fghjk');
    if (!email.trim()) {
      Toast.show({
        type: 'error',
        text1: 'Please enter your email',
      });
      return;
    }
    if (!password.trim()) {
      Toast.show({
        type: 'error',
        text1: 'Please enter your password',
      });
      return;
    }
    const payload = {
      primary_email: email,
      os_platform: 'ios',
      os_platform_version: '0.1.2',
      user_agent: 'user_agent223',
      device_name: 'device_name22',
      type: 'desktop',
      password: password,
      device_id: '123',
    };
    dispatch(loginSuccess(payload));
  };

  return (
    <View>
      <ImageBackground
        source={require('../Assets/shade.png')}
        resizeMode="cover"
        style={{
          height: windowHeight * 0.5,
          width: windowWidth,
        }}>
        <View
          style={{
            padding: 20,
            height: windowHeight,
            alignItems: 'center',
            justifyContent: 'center',
            // backgroundColor: Colors.black,
          }}>
          <View style={{alignSelf: 'flex-start', marginBottom: 60}}>
            <Text
              style={{
                color: Colors.white,
                fontSize: 22,
                fontWeight: '800',
                marginBottom: 10,
              }}>
              Login
            </Text>
            <Text style={{color: Colors.white, fontSize: 18}}>
              Join our community and Experience a seamless freelance hiring
              process.
            </Text>
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              placeholder="Enter your e-mail"
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={text => setEmail(text)}
              placeholderTextColor={Colors.btnColor}
              color={Colors.white}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              placeholder="Enter your password"
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry={!showPassword}
              onChangeText={text => setPassword(text)}
              placeholderTextColor={Colors.btnColor}
              color={Colors.white}
            />
            <Icon
              name={showPassword ? 'eye-off-outline' : 'eye-outline'}
              size={20}
              color={Colors.white}
              style={{width: 20, height: 20}}
              onPress={togglePasswordVisibility}
            />
          </View>
          <TouchableOpacity style={styles.button} onPress={() => handleNext()}>
            <Text style={{color: '#000000', fontSize: 16}}>Next</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7}>
            <Text
              style={{
                color: Colors.white,
                fontSize: 18,
                fontWeight: '600',
                marginTop: 30,
              }}>
              Forgot Password?
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <View
        style={{
          backgroundColor: Colors.black,
          height: windowHeight,
          width: windowWidth,
          zIndex: -1,
        }}></View>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    padding: 30,
    justifyContent: 'center',
    backgroundColor: Colors.black,
  },
  inputView: {
    height: 50,
    marginBottom: 10,
    justifyContent: 'center',
    paddingHorizontal: 15,
    borderWidth: 0.7,
    borderColor: '#000',
    borderRadius: 3,
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
    backgroundColor: Colors.btnColor,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    width: '100%',
    marginTop: 20,
  },
};

export default Userlogin;
