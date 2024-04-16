/** @format */

import React, {useState} from 'react';
import {Text, View, TextInput, TouchableOpacity, Platform} from 'react-native';
import AppLogo from '../Utils/Logo';
import Icon from 'react-native-vector-icons/Ionicons';
import {Colors, primaryColor} from '../Utils/Colors';
import {useDispatch} from 'react-redux';
import {loginSuccess} from '../Utils/loginReducer';
import Toast from 'react-native-toast-message';
import LinearGradient from 'react-native-linear-gradient';

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
    <>
      <LinearGradient
        colors={[
          'rgba(128,128,128,1)',
          'rgba(0,0,0,0.9)',
          'rgba(0,0,0,1)',
          'rgba(0,0,0,1)',
          'rgba(0,0,0,1)',
          'rgba(0,0,0,1)',
          'rgba(0,0,0,1)',
        ]}
        style={styles.container}>
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
          <Icon
            name={'person-outline'}
            size={20}
            color="#000"
            style={{width: 20, height: 20, marginRight: 10}}
          />
          <TextInput
            style={styles.inputText}
            placeholder="Enter your e-mail"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={text => setEmail(text)}
          />
        </View>
        <View style={styles.inputView}>
          <Icon
            name={'lock-open-outline'}
            size={20}
            color="#000"
            style={{width: 20, height: 20, marginRight: 10}}
          />
          <TextInput
            style={styles.inputText}
            placeholder="Enter your password"
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={!showPassword}
            onChangeText={text => setPassword(text)}
          />
          <Icon
            name={showPassword ? 'eye-off-outline' : 'eye-outline'}
            size={20}
            color="#000"
            style={{width: 20, height: 20}}
            onPress={togglePasswordVisibility}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={() => handleNext()}>
          <Text style={{color: '#000000', fontSize: 16}}>Next</Text>
        </TouchableOpacity>
      </LinearGradient>
    </>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    padding: 30,
    justifyContent: 'center',
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
    backgroundColor: '#e5e5e5',
    marginTop: 15,
  },
  inputText: {
    flex: 1,
    height: 40,
    fontSize: 16,
  },
  button: {
    backgroundColor: primaryColor,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 20,
    position: 'absolute',
    width: '100%',
    bottom: Platform.OS == 'ios' ? 50 : 20,
  },
};

export default Userlogin;
