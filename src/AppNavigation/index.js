import 'react-native-gesture-handler';
import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer, DarkTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from '../Home';
import Authentication from '../Authentication';
import More from '../More';
import Shows from '../Shows';
import Search from '../Search';

const AppNavigation = (props) => {
  const navigatorProps = {
    headerMode: 'none',
  };

  if (props && props.user) {
    const Tab = createBottomTabNavigator();
    return (
      <NavigationContainer theme={DarkTheme}>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              let iconName;

              switch (route.name) {
                case 'Shows':
                  iconName = 'home-outline';
                  break;
                case 'Search':
                  iconName = 'search-outline';
                  break;
                case 'Coming Soon':
                  iconName = 'play-outline';
                  break;
                case 'Downloads':
                  iconName = 'code-download-outline';
                  break;
                case 'More':
                  iconName = 'menu-outline';
                  break;
              }

              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'white',
            inactiveTintColor: 'gray',
            inactiveBackgroundColor: '#191919',
            activeBackgroundColor: '#191919',
          }}>
          <Tab.Screen name="Shows" component={Shows} />
          <Tab.Screen name="Search" component={Search} />
          <Tab.Screen name="Coming Soon" component={Blank} />
          <Tab.Screen name="Downloads" component={Blank} />
          <Tab.Screen name="More" component={More} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }

  const Stack = new createStackNavigator();
  return (
    <NavigationContainer theme={DarkTheme}>
      <Stack.Navigator {...navigatorProps}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Authentication" component={Authentication} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;

const Blank = () => {
  return (
    <View>
      <Text>HI blank component</Text>
    </View>
  );
};
