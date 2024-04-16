import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from 'react-native';
const width = Dimensions.get('window').width;

const Card = ({imageUri, title, onPress}) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={{uri: imageUri}} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const capitalizeFirstLetter = string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const getImageUri = category => {
  let imageUrl;
  switch (category.toLowerCase()) {
    case 'electronics':
      imageUrl = 'https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg';
      break;
    case 'jewelery':
      imageUrl =
        'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg';
      break;
    case "men's clothing":
      imageUrl = 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg';
      break;
    case "women's clothing":
      imageUrl = 'https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg';
      break;
    default:
      imageUrl = 'https://picsum.photos/200/300';
      break;
  }
  return imageUrl;
};

const Categories = props => {
  const categories = props.categoriesData;

  const renderItem = ({item}) => (
    <Card
      imageUri={getImageUri(item)}
      title={capitalizeFirstLetter(item)}
      onPress={() =>
        props.navigation.navigate('Product List', {categories: item})
      }
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        contentContainerStyle={styles.contentContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginTop: 120,
  },
  contentContainer: {
    justifyContent: 'space-between',
  },
  card: {
    width: width * 0.5 - 30,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3,
    marginBottom: 20,
    marginHorizontal: 10,
  },
  image: {
    width: '100%',
    height: 150,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
  },
});

export default Categories;
