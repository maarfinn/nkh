import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {Colors} from '../Utils/Colors';
import StarRating from './StarRating';
import {addItemToCart} from '../Utils/cartReducer';
import {useSelector, useDispatch} from 'react-redux';

const width = Dimensions.get('window').width;

const ProductCategories = props => {
  const categories = props.categoriesData;
  const cartData = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const addToCart = item => {
    console.log('items', item);
    dispatch(addItemToCart(item));
  };

  const goToCart = () => {
    props?.navigation.navigate('Cart');
  };

  const renderItem = ({item, index}) => {
    const isAddedToCart = cartData?.find(cartItem => cartItem.id === item.id);

    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          props.navigation.navigate('Product Detail', {detail: item});
        }}>
        <View
          style={[
            styles.itemContainer,
            {marginBottom: index == categories?.length - 1 ? 20 : 10},
          ]}>
          <View style={styles.card}>
            <Image source={{uri: item.image}} style={styles.image} />
            <View style={styles.cardContent}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.price}>MRP: {item.price}</Text>
              {/* <Text style={styles.description}>{item.description}</Text> */}
              {/* <Text style={styles.category}>Category: {item.category}</Text> */}
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 5,
                  }}>
                  <StarRating rating={item.rating.rate} />
                  <Text style={styles.rating}>
                    ({item.rating.count} reviews)
                  </Text>
                </View>
                <View>
                  <TouchableOpacity
                    style={styles.addToCartButton}
                    onPress={() =>
                      !isAddedToCart ? addToCart(item) : goToCart()
                    }>
                    <Text style={styles.addToCartText}>
                      {isAddedToCart ? 'Go to Cart' : 'Add to Cart'}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {categories.length > 0 && (
        <FlatList
          data={categories}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    paddingHorizontal: 20,
  },
  itemContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  card: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    elevation: 3,
    shadowColor: Colors.black,
    shadowOpacity: 0.3,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 2,
    width: width - 40,
  },
  cardContent: {
    padding: 20,
  },
  image: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.black,
  },
  price: {
    fontSize: 16,
    marginBottom: 5,
  },
  category: {
    fontSize: 14,
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    marginBottom: 5,
  },
  rating: {
    fontSize: 14,
    marginLeft: 5,
    // color: Colors.grey,
  },
  addToCartButton: {
    backgroundColor: Colors.mainColor,
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: 'center',
    marginTop: 10,
    height: 40,
    width: 100,
  },
  addToCartText: {
    fontSize: 16,
    color: Colors.white,
  },
});

export default ProductCategories;
