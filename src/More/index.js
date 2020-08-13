import React from 'react';
import {View, Text, Pressable, StyleSheet, ScrollView} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import auth from '@react-native-firebase/auth';
import {FlatList} from 'react-native-gesture-handler';

const More = () => {
  return (
    <ScrollView>
      <ShareApp />
      <AccountOptions />
    </ScrollView>
  );
};

export default More;

const AccountOptions = () => {
  const options = [
    {title: 'App Settings'},
    {title: 'Account'},
    {title: 'Help'},
    {
      title: 'Sign Out',
      onPress: () => auth().signOut(),
    },
  ];

  const renderItem = ({item, index}) => {
    const {title, onPress} = item;

    const style = {
      paddingLeft: 15,
      paddingVertical: 10,
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderBottomColor: '#191919',
    };
    const textStyle = {
      color: 'white',
      fontSize: 18,
    };
    if (onPress && typeof onPress === 'function') {
      return (
        <Pressable onPress={onPress} style={style}>
          <Text style={textStyle}>{title}</Text>
        </Pressable>
      );
    }

    return (
      <View style={style}>
        <Text style={textStyle}>{title}</Text>
      </View>
    );
  };

  return (
    <FlatList
      data={options}
      renderItem={renderItem}
      keyExtractor={(item) => item.title}
    />
  );
};

const ShareApp = () => {
  return (
    <View
      style={{
        marginVertical: 15,
        backgroundColor: '#191919',
        paddingVertical: 18,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 15,
        }}>
        <Ionicons name="chatbox-ellipses-outline" size={25} color="white" />
        <Text
          style={{
            color: 'white',
            fontSize: 20,
            alignItems: 'center',
            marginLeft: 5,
          }}>
          Tell friends about Re-Flix.
        </Text>
      </View>

      <Text style={{color: 'white', paddingHorizontal: 15, paddingTop: 15}}>
        Share this link so your friends can join the conversation around all
        your favourite TV shows and movies.
      </Text>

      <Text
        style={{
          color: 'gray',
          paddingHorizontal: 15,
          paddingTop: 5,
          textDecorationLine: 'underline',
          fontSize: 12,
        }}>
        Terms & Conditions
      </Text>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginHorizontal: 15,
          backgroundColor: 'black',
          borderRadius: 4,
          marginTop: 15,
        }}>
        <Text numberOfLines={1} style={{color: 'white', padding: 14}}>
          https://www.github.com/abhinavk9757
        </Text>
        <View
          style={{
            backgroundColor: 'white',
            borderWidth: 4,
            borderColor: 'black',
            borderRadius: 7,
          }}>
          <Text style={{padding: 14}}>Copy Link</Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 30,
          justifyContent: 'space-between',
        }}>
        <Pressable
          onPress={() => {}}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: 25,
            paddingLeft: 10,
          }}>
          <Ionicons name="logo-whatsapp" color="white" size={30} />
          <Text style={{color: 'white', fontSize: 10, paddingTop: 10}}>
            Whatsapp
          </Text>
        </Pressable>
        <Pressable
          onPress={() => {}}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: 25,
            paddingLeft: 10,
          }}>
          <Ionicons name="logo-facebook" color="white" size={30} />
          <Text style={{color: 'white', fontSize: 10, paddingTop: 10}}>
            Facebook
          </Text>
        </Pressable>
        <Pressable
          onPress={() => {}}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: 25,
            paddingLeft: 10,
          }}>
          <Ionicons name="logo-google" color="white" size={30} />
          <Text style={{color: 'white', fontSize: 10, paddingTop: 10}}>
            G-mail
          </Text>
        </Pressable>
        <Pressable
          onPress={() => {}}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: 25,
            paddingLeft: 10,
          }}>
          <Ionicons name="ellipsis-horizontal" color="white" size={30} />
          <Text style={{color: 'white', fontSize: 10, paddingTop: 10}}>
            More
          </Text>
        </Pressable>
      </View>
    </View>
  );
};
