import {createSlice} from '@reduxjs/toolkit';

const subShowsSchema = {
  failed: false,
  pending: false,
  data: [],
  page: 0,
};

const showSlice = createSlice({
  name: 'bingeShows',
  initialState: subShowsSchema,
  reducers: {
    pending: {
      reducer: (state, {payload}) => {
        if (payload.page == 1) {
          state = {...subShowsSchema, pending: true, page: 1};
        } else {
          state.failed = false;
          state.pending = true;
        }
      },
    },
    failed: {
      reducer: (state, {payload}) => {
        state.failed = true;
        state.pending = false;
      },
    },
    success: {
      reducer: (state, {payload}) => {
        const {data, page} = payload;
        page === 1
          ? (state.data = data)
          : (state.data = [...state.data, ...data]);
        state.page = page;
      },
    },
  },
});

export const reducer = showSlice;
export const {pending, failed, success} = showSlice.actions;
export default showSlice.reducer;
