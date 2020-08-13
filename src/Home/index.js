import React, {useState} from 'react';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {Text, View, Image} from 'react-native';
import {Dimensions} from 'react-native';
import Header from './Header';
import GetStarted from './GetStarted';

const Home = (props) => {
  const [items, setItems] = useState(CAROUSEL_ITEMS);
  const [activeIndex, setActiveIndex] = useState(0);

  const _renderItem = ({item, index}) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'transparent',
          padding: 30,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          style={{width: 200, height: 200, borderRadius: 10, marginBottom: 40}}
          source={item.image}
        />
        <Text style={{fontSize: 30, color: 'white', marginBottom: 20}}>
          {item.title}
        </Text>
        <Text style={{fontSize: 20, color: 'white', textAlign: 'center'}}>
          {item.text}
        </Text>
      </View>
    );
  };

  const pagination = () => {
    // const { items, activeIndex } = this.state;
    return (
      <Pagination
        dotsLength={items.length}
        activeDotIndex={activeIndex}
        //   containerStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.75)' }}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 8,
          backgroundColor: 'red',
        }}
        inactiveDotStyle={{
          backgroundColor: 'white',
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    );
  };

  return (
    // <SafeAreaView style={{flex: 1, backgroundColor:'rebeccapurple', paddingTop: 50, }}>
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Header {...props} />
      <Carousel
        layout={'default'}
        data={items}
        sliderWidth={Dimensions.get('window').width}
        itemWidth={Dimensions.get('window').width}
        renderItem={_renderItem}
        onSnapToItem={(index) => setActiveIndex(index)}
      />
      {pagination()}
      <GetStarted {...props} />
    </View>
    // </SafeAreaView>
  );
};

export default Home;

const CAROUSEL_ITEMS = [
  {
    title: 'Watch on any Device',
    text: 'Stream on your phone, tablet, laptop, and TV',
    image: require('../../assets/slider1.png'),
  },
  {
    title: '3,2,1... Download',
    text: 'Always have something to watch',
    image: require('../../assets/slider2.png'),
  },
  {
    title: 'No annoying contracts',
    text: 'Join today, cancel anytime',
    image: require('../../assets/slider3.png'),
  },
];
