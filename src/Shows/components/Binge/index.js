import React, { useEffect } from 'react';
import { View, FlatList, Text, Pressable, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { pending, failed, success } from './reducerSlice';

const Binge = () => {
    const dispatch = useDispatch();
    const bingeShows = useSelector(state => state.bingeShows);

    useEffect(() => {
        fetch('http://www.omdbapi.com/?s=guardian&apikey=e57085fb&page=1')
            .then(res => res.json())
            .then(res => dispatch(success({data: res.Search, page: 1})))
    },[])

    const title = 'Binge-Worhty'

    return (
        <View style={{paddingLeft: 10, paddingBottom: 20}}>
            <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold' }}>{title}</Text>
            <FlatList
                horizontal={true}
                data={bingeShows.data}
                renderItem={({item}) => {
                    return (
                        <Pressable
                            style={{paddingHorizontal: 5}}
                        >
                            <Image
                                style={{width: 110, height: 175}}
                                source={{uri: item.Poster +''}}
                            />
                        </Pressable>
                    );
                }}
                keyExtractor={(item) => item.imdbID}
            />
        </View>
    );
}

export default Binge;
