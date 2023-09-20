import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.baseURL = 'https://65057ae2ef808d3c66f014f0.mockapi.io/api/v1';
export const getCatalogThunk = createAsyncThunk(
  'catalog/getCatalog',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/cars');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
