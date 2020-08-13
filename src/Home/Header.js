import React from 'react';
import { View, Image, Text, Pressable } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Header = (props) => {
    
    const navigate = props && props.navigation && props.navigation.navigate;
    const navigateToLogin = () => {
        navigate && navigate('Authentication');
    }
    
    return (
        <View style={{flexDirection: 'row', backgroundColor: 'transparent', height: 70}}>
            <View style={{flex:1, flexDirection: 'row', alignItems: 'center', paddingLeft: 20 }}>
                <Image
                    style={{width: 30, height: 50}}
                    source={require('../../assets/logo.png')}
                />
            </View>
            <View style={{flex:1, flexDirection: 'row-reverse', alignItems:'center', paddingHorizontal: 10, justifyContent: 'space-between'}}>
                <TouchableOpacity onPressIn={navigateToLogin}>
                    <Text style={{color: 'white'}}>SIGN IN</Text>
                </TouchableOpacity>
                
                <TouchableOpacity>
                    <Text style={{color: 'white'}}>HELP</Text>
                </TouchableOpacity>
                
                <TouchableOpacity>
                    <Text style={{color: 'white'}}>PRIVACY</Text>
                </TouchableOpacity>
                
            </View>
        </View>
    )
}

export default Header;