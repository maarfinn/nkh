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
import {Colors} from '../Utils/Colors';
import {useDispatch} from 'react-redux';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Button = ({onPress, title, style}) => (
  <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
    <Text style={{color: Colors.white, fontSize: 16, fontWeight: '600'}}>
      {title}
    </Text>
  </TouchableOpacity>
);

const Register = ({navigation}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleNext = () => {
    navigation.navigate('Email-Verify');
  };

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
              justifyContent: 'space-between',
              marginTop: windowHeight * 0.2,
            }}>
            <View style={{alignSelf: 'flex-start'}}>
              <Text
                style={{
                  color: Colors.white,
                  fontSize: 22,
                  fontWeight: '800',
                  marginBottom: 10,
                }}>
                Create Account
              </Text>
              <Text
                style={{color: Colors.input, fontSize: 18, marginBottom: 30}}>
                Join our community and Experience a seamless freelance hiring
                process.
              </Text>
            </View>
            <View style={styles.inputView}>
              <TextInput
                style={styles.inputText}
                placeholder="Enter your password"
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={!showPassword}
                onChangeText={setPassword}
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
            <Button title="Create" onPress={handleNext} />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              alignSelf: 'left',
              marginTop: 20,
              marginLeft: 20,
            }}>
            <Text
              style={{
                color: Colors.white,
                fontSize: 16,
                fontWeight: '600',
                marginRight: 4,
              }}>
              Have an Account?
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text
                style={{
                  color: Colors.greenColor,
                  fontSize: 16,
                  fontWeight: '600',
                }}>
                Login
              </Text>
            </TouchableOpacity>
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

export default Register;
