import React from 'react';
import {View, Image, Text} from 'react-native';

const ShowsHeader = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        paddingTop: 10,
      }}>
      <Logo />
      <FilterOptions />
    </View>
  );
};

export default ShowsHeader;

const Logo = () => {
  return (
    <View>
      <Image
        style={{width: 20, height: 40}}
        source={require('../../assets/logo.png')}
      />
    </View>
  );
};

const FilterOptions = () => {
  const textStyle = {
    color: 'white',
  };
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        flex: 1,
      }}>
      <Text style={textStyle}>TV Shows</Text>
      <Text style={textStyle}>Movies</Text>
      <Text style={textStyle}>My List</Text>
    </View>
  );
};
