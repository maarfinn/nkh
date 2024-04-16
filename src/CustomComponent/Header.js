import React from 'react';
import {View, StyleSheet, TextInput, Dimensions, Text} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch, useSelector} from 'react-redux';
import {logout} from '../Utils/loginReducer';
import {Colors} from '../Utils/Colors';

const width = Dimensions.get('window').width;

const Header = ({
  searchedText,
  onChangeText,
  placeholder,
  isCart,
  isDetail,
  headerTitle,
}) => {
  const dispatch = useDispatch();
  const cartItemsLength = useSelector(state => state?.cart.items)?.length;

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <View style={[styles.header, {height: isDetail || isCart ? 60 : 100}]}>
      {isCart ? (
        <Text style={{fontWeight: 'bold', color: Colors.white, fontSize: 20}}>
          {`Cart (${cartItemsLength})`}
        </Text>
      ) : isDetail ? (
        <Text style={{fontWeight: 'bold', color: Colors.white, fontSize: 20}}>
          {headerTitle}
        </Text>
      ) : (
        <View style={styles.headerContent}>
          <TextInput
            style={styles.input}
            placeholder={placeholder || 'Search Categories..'}
            placeholderTextColor={Colors.black}
            value={searchedText}
            onChangeText={onChangeText} // Use onChangeText directly
          />
          <MaterialCommunityIcons
            name="logout"
            color={Colors.white}
            size={30}
            style={styles.cartIcon}
            onPress={handleLogout}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.mainColor,
    position: 'absolute',
    height: 100,
    width: width,
    top: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  input: {
    width: width - 80,
    borderRadius: 5,
    height: 50,
    backgroundColor: 'white',
    padding: 10,
  },
  cartIcon: {
    marginLeft: 10,
    marginRight: -10,
  },
});

export default Header;
