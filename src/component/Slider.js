import React, {useRef, useState} from 'react';
import {
  Animated,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  StatusBar,
} from 'react-native';
import Slides from '../data';
import SlideItem from './SlideItem';
import Pagination from './Pagination';

const Slider = () => {
  const [index, setIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const flatListRef = useRef(null);

  const handleOnScroll = event => {
    Animated.event(
      [
        {
          nativeEvent: {
            contentOffset: {
              x: scrollX,
            },
          },
        },
      ],
      {
        useNativeDriver: false,
      },
    )(event);
  };

  const handleOnViewableItemsChanged = useRef(({viewableItems}) => {
    setIndex(viewableItems[0].index);
  }).current;

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current;

  const goToNextSlide = () => {
    if (index < Slides.length - 1) {
      flatListRef.current.scrollToIndex({index: index + 1});
    }
  };

  return (
    <>
      <View style={{height: windowHeight - 60, backgroundColor: 'white'}}>
        <FlatList
          ref={flatListRef}
          data={Slides}
          renderItem={({item}) => <SlideItem item={item} />}
          horizontal
          pagingEnabled
          snapToAlignment="center"
          showsHorizontalScrollIndicator={false}
          onScroll={handleOnScroll}
          onViewableItemsChanged={handleOnViewableItemsChanged}
          viewabilityConfig={viewabilityConfig}
        />
        <Pagination data={Slides} scrollX={scrollX} index={index} />
        <TouchableOpacity
          onPress={goToNextSlide}
          style={{
            width: windowWidth - 30,
            height: 40,
            backgroundColor: 'blue',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            bottom: -30,
            left: 15,
          }}>
          <View>
            <Text style={{color: 'white'}}>Next</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Slider;

const styles = StyleSheet.create({});
