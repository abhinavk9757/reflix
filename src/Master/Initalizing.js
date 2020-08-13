import React from 'react';
import {View, ActivityIndicator} from 'react-native';

const Initializing = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
      }}>
      <ActivityIndicator size="large" color="#E50914" />
    </View>
  );
};

export default Initializing;
