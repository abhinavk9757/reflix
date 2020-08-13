import { combineReducers, configureStore } from '@reduxjs/toolkit';

import trendingReducer from '../../Shows/components/Trending/reducerSlice';
import actionReducer from '../../Shows/components/Action/reducerSlice';
import bingeReducer from '../../Shows/components/Binge/reducerSlice';
import originalsReducer from '../../Shows/components/Originals/reducerSlice';
import teenReducer from '../../Shows/components/Teen/reducerSlice';

import searchReducer from '../../Search/reducerSlice';

const reducer = combineReducers({
    actionShows: actionReducer,
    bingeShows: bingeReducer,
    originalsShows: originalsReducer,
    teenShows: teenReducer,
    trendingShows: trendingReducer,

    searchResults: searchReducer
})

const store = configureStore({
    reducer: reducer
})

export default store;