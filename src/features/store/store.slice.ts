import { createSlice } from '@reduxjs/toolkit';

export const storeSlice = createSlice({
  name: 'store',
  initialState: {
    storeGroup: undefined,
    store: undefined,
  },
  reducers: {
    updateStoreGroup: (state, action) => {
      state.storeGroup = action.payload;
      // TODO: handle set initial store value
    },
    updateStore: (state, action) => {
      state.store = action.payload;
    },
  },
});

export const { updateStoreGroup, updateStore } = storeSlice.actions;

export default storeSlice.reducer;
