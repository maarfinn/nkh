import React from 'react';
import {View, Image} from 'react-native';
import {primaryColor} from './Colors';

const AppLogo = ({width = 100}) => {
  return (
    <View
      style={{
        backgroundColor: primaryColor,
        borderRadius: 100,
        height: width,
        width: width,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Image
        source={require('../Assets/Logo.png')}
        style={{
          width: width,
          height: width,
          borderRadius: 100,
        }}
      />
    </View>
  );
};

export default AppLogo;
