import React from 'react';
import {View, Pressable, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const AuthHeader = (props) => {
  return (
    <View
      style={{
        height: 70,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
      }}
    >

      <Pressable
        onPress={props.navigation.goBack}
        android_ripple={{color: 'white', borderless: false, radius: 10}}>
        <Icon name="arrow-back-outline" color="white" size={30} />
      </Pressable>

      <Image
        style={{width: 30, height: 50, marginLeft: 15}}
        source={require('../../assets/logo.png')}
      />
    </View>
  );
};

export default AuthHeader;
