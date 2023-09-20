import { createSlice } from '@reduxjs/toolkit';
import { getCatalogThunk } from './options';

const initialState = {
  items: [],
  favoritesItems: {},
  filters: {
    make: '',
    rentalPrice: 0,
    mileageFrom: 0,
    mileageTo: 0,
  },
  isLoading: false,
  error: null,
};

export const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    clearItems: (state, _) => {
      state.items = [];
    },
    setFilters: (state, action) => {
      state.filters = action.payload;
    },
    setFavoritesItems: (state, action) => {
      state.favoritesItems = {
        ...state.favoritesItems,
        [action.payload.id]: action.payload,
      };
    },
    deleteFavoritesItems: ({ favoritesItems }, action) => {
      delete favoritesItems[action.payload.id];
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getCatalogThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(getCatalogThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = '';
        state.items = payload;
      })
      .addCase(getCatalogThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const catalogReducer = catalogSlice.reducer;

export const {
  setFavoritesItems,
  deleteFavoritesItems,
  setFilters,
  clearItems,
} = catalogSlice.actions;
