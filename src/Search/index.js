import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {success} from './reducerSlice';
import {
  View,
  ActivityIndicator,
  TextInput,
  Pressable,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {ScrollView} from 'react-native-gesture-handler';
import {OMDB_KEY} from '@env';

const Search = () => {
  const [pending, setPending] = useState(false);
  const dispatch = useDispatch();
  const searchResults = useSelector((state) => state.searchResults);
  let searchTimeout;

  const searchMovie = (movieName) => {
    if (searchTimeout) {
      clearTimeout(searchTimeout);
    }
    searchTimeout = setTimeout(() => {
      setPending(true);
      fetch(
        `http://www.omdbapi.com/?s=${movieName.trim()}&apikey=${OMDB_KEY}&page=1`,
      )
        .then((res) => res.json())
        .then((res) => {
          dispatch(success({data: res.Search}));
        })
        .finally(() => setPending(false));
    }, 700);
  };

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          height: 50,
          backgroundColor: '#191919',
          padding: 5,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Pressable style={{flex: 0.1, alignItems: 'center'}}>
          <Icon name="search-outline" color="white" size={25} />
        </Pressable>
        <TextInput
          style={{color: 'white', flex: 0.8, justifyContent: 'center'}}
          placeholder="Search Movie"
          placeholderTextColor="white"
          onChangeText={searchMovie}
        />
        <Pressable style={{flex: 0.1, alignItems: 'center'}}>
          {pending ? (
            <ActivityIndicator size="small" color="red" />
          ) : (
            <Icon name="mic-outline" color="white" size={25} />
          )}
        </Pressable>
      </View>
      <ScrollView
        style={{margin: 10, flex: 1}}
        contentContainerStyle={{flexDirection: 'row', flexWrap: 'wrap'}}>
        {searchResults.data.map((item) => {
          return (
            <View key={item.imdbID}>
              <Pressable
                style={{marginLeft: 10, marginBottom: 10}}
                onPress={() => {}}
                android_ripple={{color: 'red', borderless: false, radius: 10}}>
                <Image
                  style={{width: 120, height: 185}}
                  source={{uri: item.Poster + ''}}
                />
              </Pressable>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Search;
