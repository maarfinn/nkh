import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Header from '../CustomComponent/Header';
import {Colors} from '../Utils/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useDispatch, useSelector} from 'react-redux';
import {addItemToCart} from '../Utils/cartReducer';

const ProductDetail = ({navigation, route}) => {
  const {detail} = route.params;
  const cartData = useSelector(state => state.cart.items);
  const isAddedToCart = cartData?.find(cartItem => cartItem.id === detail.id);
  const dispatch = useDispatch();
  const [showFullDescription, setShowFullDescription] = useState(false);
  const headerTitle =
    detail?.title.length > 25
      ? `${detail.title.substring(0, 23)}...`
      : detail.title;

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const handleAddToCart = () => {
    dispatch(addItemToCart(detail));
  };

  const handleGoToCart = () => {
    navigation.navigate('Cart');
  };

  return (
    <>
      <Header isDetail={true} headerTitle={headerTitle} />
      <ScrollView>
        <View style={styles.container}>
          <Image source={{uri: detail.image}} style={styles.image} />
          <View style={styles.ratingContainer}>
            <Text style={styles.ratingText}>{detail.rating.rate}</Text>
            <Icon name="star" size={20} color="gold" />
          </View>
          <View style={{paddingHorizontal: 15}}>
            <Text style={styles.title}>{detail.title}</Text>
            <Text style={styles.price}>MRP {detail.price}</Text>
            {showFullDescription ? (
              <Text style={styles.description}>{detail.description}</Text>
            ) : (
              <Text style={styles.description}>
                {detail.description.length > 120
                  ? detail.description.substring(0, 120) + '...'
                  : detail.description}{' '}
                <TouchableOpacity onPress={toggleDescription}>
                  <Text style={styles.viewMore}>View More</Text>
                </TouchableOpacity>
              </Text>
            )}
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity
        style={styles.addToCartButton}
        onPress={isAddedToCart ? handleGoToCart : handleAddToCart}>
        <Text style={styles.addToCartButtonText}>
          {isAddedToCart ? 'Go to Cart' : 'Add to Cart'}
        </Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60,
  },
  image: {
    width: '100%',
    height: 400,
    resizeMode: 'cover',
    marginBottom: 10,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: Colors.black,
  },
  price: {
    fontSize: 16,
    marginBottom: 10,
    color: Colors.black,
  },
  description: {
    fontSize: 16,
  },
  viewMore: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    backgroundColor: 'white',
    top: 10,
    right: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  ratingText: {
    marginRight: 5,
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.black,
  },
  addToCartButton: {
    backgroundColor: Colors.mainColor,
    paddingVertical: 15,
    alignItems: 'center',
  },
  addToCartButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ProductDetail;
