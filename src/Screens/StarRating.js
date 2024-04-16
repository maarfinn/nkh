import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const StarRating = ({rating}) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <Icon
        key={i}
        name={i <= rating ? 'star' : 'star-o'}
        size={15}
        color={i <= rating ? '#FFD700' : '#ccc'}
        style={{marginRight: 1}}
      />,
    );
  }
  return <View style={{flexDirection: 'row'}}>{stars}</View>;
};

export default StarRating;
