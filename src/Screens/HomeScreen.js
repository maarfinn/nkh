import {View, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getMethodApiCall} from '../Utils/_request';
import Categories from './Categories';
import Header from '../CustomComponent/Header';

const HomeScreen = ({navigation}) => {
  const [categoriesData, setCategoriesData] = useState([]);
  const [searchedText, setSearchedText] = useState('');
  const [filteredCategoriesData, setFilteredCategoriesData] = useState([]);

  const fetchData = async () => {
    const response = await getMethodApiCall(
      'https://fakestoreapi.com/products/categories',
    );
    setCategoriesData(response?.data);
    setFilteredCategoriesData(response?.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const filteredData = categoriesData.filter(category =>
      category.toLowerCase().includes(searchedText.toLowerCase()),
    );
    setFilteredCategoriesData(filteredData);
  }, [searchedText, categoriesData]);

  const onChangeText = text => {
    setSearchedText(text);
  };

  return (
    <View style={styles.container}>
      <Header searchedText={searchedText} onChangeText={onChangeText} />
      <Categories
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

export default HomeScreen;
