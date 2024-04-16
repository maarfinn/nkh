import React from 'react';
import {View, Text, FlatList, StyleSheet, Image} from 'react-native';
import {useSelector} from 'react-redux';
import Header from '../CustomComponent/Header';

const Cart = () => {
  const cartItems = useSelector(state => state.cart.items);

  return (
    <View style={styles.container}>
      <Header isCart={true} />
      <View style={styles.cartItemsContainer}>
        <Text style={styles.title}>Cart Items</Text>
        {cartItems.length > 0 ? (
          <FlatList
            data={cartItems}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => (
              <View style={styles.cartItem}>
                <Text>{item.name}</Text>
                <Text>MRP {item.price}</Text>
                <Image source={{uri: item.image}} style={styles.itemImage} />
              </View>
            )}
          />
        ) : (
          <Text style={styles.emptyCartText}>Your cart is empty</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cartItemsContainer: {
    flex: 1,
    padding: 16,
    marginTop: 60,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 8,
  },
  emptyCartText: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
  },
  itemImage: {
    width: 50,
    height: 50,
    resizeMode: 'cover',
  },
});

export default Cart;
