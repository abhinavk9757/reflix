import React, { useState, useEffect } from 'react';
import auth from '@react-native-firebase/auth';
import { Provider } from 'react-redux';
import store from './redux/store';

import AppNavigation from '../AppNavigation/index';
import Initializing from './Initalizing';
import { StatusBar } from 'react-native';

const Master = () => {

    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();

    // Handle user state changes
    const onAuthStateChanged = (user) => {
        setUser(user);
        if (initializing) setInitializing(false);
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; 
    }, []);

    if (initializing) return (
        <Initializing />
    );

    return (
        <Provider store={store}>
            <StatusBar barStyle="light-content" backgroundColor="black" />
            <AppNavigation user={user} />
        </Provider>
    );
}

export default Master;