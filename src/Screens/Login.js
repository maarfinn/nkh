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
 
const InputField = ({placeholder, value, onChangeText, secureTextEntry}) => (
  <View style={styles.inputView}>
    <TextInput
      style={styles.inputText}
      placeholder={placeholder}
      autoCapitalize="none"
      autoCorrect={false}
      onChangeText={onChangeText}
      placeholderTextColor={Colors.btnColor}
      color={Colors.white}
      secureTextEntry={secureTextEntry}
      value={value}
    />
  </View>
);

const Button = ({onPress, title, style}) => (
  <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
    <Text style={{color: Colors.white, fontSize: 16, fontWeight: '600'}}>
      {title}
    </Text>
  </TouchableOpacity>
);

const UserLogin = ({navigation}) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleNext = () => {
    console.log('handleNext');
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
                Login
              </Text>
              <Text
                style={{color: Colors.input, fontSize: 18, marginBottom: 30}}>
                Join our community and Experience a seamless freelance hiring
                process.
              </Text>
            </View>
            <InputField
              placeholder="Enter your e-mail"
              value={email}
              onChangeText={setEmail}
            />
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
            <Button title="Login" onPress={handleNext} />
            <TouchableOpacity activeOpacity={0.7}>
              <Text
                style={{
                  color: Colors.white,
                  fontSize: 16,
                  fontWeight: '600',
                  marginTop: 30,
                }}>
                Forgot Password?
              </Text>
            </TouchableOpacity>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: 20,
              }}>
              <View
                style={{
                  height: 2,
                  width: windowWidth * 0.4,
                  backgroundColor: Colors.input,
                }}
              />
              <View>
                <Text
                  style={{
                    color: Colors.input,
                    fontSize: 12,
                    fontWeight: '600',
                  }}>
                  OR
                </Text>
              </View>
              <View
                style={{
                  height: 2,
                  width: windowWidth * 0.4,
                  backgroundColor: Colors.input,
                }}
              />
            </View>
            <Button
              title="Sign In With Google"
              onPress={handleNext}
              style={{
                marginTop: 20,
                borderColor: Colors.white,
                borderWidth: 1,
                backgroundColor: Colors.black,
              }}
            />
            <Button
              title="Sign In With Apple"
              onPress={handleNext}
              style={{
                marginTop: 20,
                borderColor: Colors.white,
                borderWidth: 1,
                backgroundColor: Colors.black,
              }}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              alignSelf: 'center',
              marginTop: 50,
            }}>
            <Text
              style={{
                color: Colors.white,
                fontSize: 16,
                fontWeight: '600',
                marginRight: 4,
              }}>
              Haven't registered yet?
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <Text
                style={{
                  color: Colors.greenColor,
                  fontSize: 16,
                  fontWeight: '600',
                }}>
                Register Now
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
    backgroundColor: Colors.btnColor,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    width: '100%',
    marginTop: 20,
  },
};

export default UserLogin;
