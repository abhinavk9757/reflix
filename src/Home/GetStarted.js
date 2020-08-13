import React from 'react';
import {Pressable, Text} from 'react-native';

const GetStarted = (props) => {
  const navigate = props && props.navigation && props.navigation.navigate;
  const navigateToLogin = () => {
    navigate && navigate('Authentication');
  };

  return (
    <Pressable
      style={{
        backgroundColor: '#E50914',
        marginHorizontal: 15,
        borderRadius: 3,
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
      }}
      onPress={navigateToLogin}
      android_ripple={{color: 'white', borderless: false, radius: 10}}>
      <Text style={{color: 'white'}}>GET STARTED</Text>
    </Pressable>
  );
};

export default GetStarted;
