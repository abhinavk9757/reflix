import {createSlice} from '@reduxjs/toolkit';

const initState = [];

const searchSlice = createSlice({
  name: 'searchResults',
  initialState: {data: initState},
  reducers: {
    success: {
      reducer: (state, {payload}) => {
        state.data = payload.data || [];
      },
    },
  },
});

export const {success} = searchSlice.actions;
export default searchSlice.reducer;
