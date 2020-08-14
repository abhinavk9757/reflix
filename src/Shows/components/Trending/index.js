import React, {useEffect} from 'react';
import {View, FlatList, Text, Pressable, Image, ToastAndroid} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {success} from './reducerSlice';
import {OMDB_KEY} from '@env';

const Trending = () => {
  const dispatch = useDispatch();
  const trendingShows = useSelector((state) => state.trendingShows);

  useEffect(() => {
    fetch(`http://www.omdbapi.com/?s=naruto&apikey=${OMDB_KEY}&page=1`)
      .then((res) => {
        ToastAndroid.show('fetched', ToastAndroid.LONG);
        return res.json();
      })
      .then((res) => dispatch(success({data: res.Search, page: 1})))
      .catch((e) => ToastAndroid.show('failed get on trnding', ToastAndroid.LONG));
  }, []);

  const title = 'Japanese Anime';

  return (
    <View style={{paddingLeft: 10, paddingBottom: 20}}>
      <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>
        {title}
      </Text>
      <FlatList
        horizontal={true}
        data={trendingShows.data}
        renderItem={({item}) => {
          return (
            <Pressable style={{paddingHorizontal: 5}}>
              <Image
                style={{width: 110, height: 175}}
                source={{uri: item.Poster + ''}}
              />
            </Pressable>
          );
        }}
        keyExtractor={(item) => item.imdbID}
      />
    </View>
  );
};

export default Trending;
