import {View, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getMethodApiCall} from '../Utils/_request';
import Categories from './Categories';
import Header from '../CustomComponent/Header';
import ProductCategories from './ProductCategoris';

const Products = ({route, navigation}) => {
  const selectedCategories = route?.params?.categories?.toLowerCase();
  console.log('ddd', selectedCategories);
  const [searchedText, setSearchedText] = useState('');
  const [filteredCategoriesData, setFilteredCategoriesData] = useState([]);
  const [allData, setAllData] = useState([]);

  const fetchData = async () => {
    const response = selectedCategories
      ? await getMethodApiCall(
          `https://fakestoreapi.com/products/category/${selectedCategories}`,
        )
      : await getMethodApiCall(`https://fakestoreapi.com/products`);

    console.log('response api', response.data);
    setAllData(response?.data);
  };

  useEffect(() => {
    fetchData();
  }, [selectedCategories]);

  useEffect(() => {
    const filteredData = allData?.filter(item =>
      item.title.toLowerCase().includes(searchedText.toLowerCase()),
    );
    setFilteredCategoriesData(filteredData);
  }, [searchedText, allData]);

  const onChangeText = text => {
    setSearchedText(text);
  };

  return (
    <View style={styles.container}>
      <Header
        placeholder={'Search Products..'}
        searchedText={searchedText}
        onChangeText={onChangeText}
      />
      <ProductCategories
        categoriesData={filteredCategoriesData}
        navigation={navigation}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Products;
