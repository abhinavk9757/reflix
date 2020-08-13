import React, { useState } from 'react';
import { View, Pressable, Text, StyleSheet } from 'react-native';
import AuthHeader from './Header';
import {TextInput} from '../CustomLib/index';
import auth from '@react-native-firebase/auth';

const Login = (props) => {
    return (
        <View style={{flex: 1}}>
            <AuthHeader {...props} />
            <View style={{flex:1, justifyContent: 'center'}}>
                <LoginBody {...props}/>
            </View>
        </View>
    );
}

export default Login;

const LoginBody = (props) => {
    const [userId, setUserId] = useState('');
    const [pwd, setPwd] = useState('');
    const entryDone = userId && pwd;

    return (
        <View>
            <TextInput
                value={userId}
                onTextChange={setUserId}
                placeholder="Email or phone number"
            />
            <TextInput
                value={pwd}
                onTextChange={setPwd}
                placeholder="Password"
                secureTextEntry={true}
            />
            <Pressable
                style={{
                    height: 70,
                    backgroundColor: entryDone ? 'rgb(229,9,20)' : 'transparent',
                    borderRadius: 7,
                    marginHorizontal: 20,
                    marginVertical: 10,
                    borderWidth: entryDone ? 0 : 1,
                    borderColor: 'gray',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
                disabled={!entryDone}
                onPress={()=>login(userId, pwd)}
                android_ripple={{ color: 'white', borderless: false, radius: 10}}
            >
                <Text style={{fontSize: 18, color: 'white'}}>Sign In</Text>
            </Pressable>

            <View style={{alignItems: 'center'}}>
                <Text style={[textStyle.base, textStyle.gray]}>
                    Need help?
                </Text>
                <Text style={[textStyle.base, textStyle.white]}>
                    New to Re-Flix? Read doc now.
                </Text>
                <Text style={[textStyle.base, textStyle.gray]}>
                    Authentication is done using Google Firebase.
                    <Text style={textStyle.bold}>Learn more.</Text>
                </Text>
            </View>

        </View>
    )
}

const login = (uid, pwd) => {
    auth().signInWithEmailAndPassword(uid, pwd);
}

const textStyle = StyleSheet.create({
    base: {
        marginTop: 10,
        marginHorizontal: 15,
        textAlign: 'center',
    },
    gray: {
        color: 'gray'
    },
    white: {
        color: 'white'
    },
    bold: {
        fontWeight: 'bold'
    }
})