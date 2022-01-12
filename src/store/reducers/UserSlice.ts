import { IItems } from '../../models/IItems';
// import { IClothingInfo } from '../../models/IClothingInfo';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { fetchAllItems } from './ActionCreators';

interface UserState {
  items: IItems[];
  isLoading: boolean;
  error: string;
  title: string[];
  isDetail: boolean;
  clothingInfo: IItems;
}

const initialState: UserState = {
  items: [],
  isLoading: false,
  error: '',
  title: ['all items'],
  isDetail: false,
  clothingInfo: {
    id: 0,
    title: '',
    price: 0,
    category: '',
    description: '',
    image: '',
    rating: {
      rate: 0,
      count: 0,
    },
  },
};

export const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    itemsFetching: (state) => {
      state.isLoading = true;
    },
    itemsFetchingSuccess: (state, action: PayloadAction<IItems[]>) => {
      state.isLoading = false;
      state.error = '';
      state.items = action.payload;
    },
    itemsFetchingError: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    categoriesFetching: (state) => {
      state.isLoading = true;
    },
    categoriesFetchingSuccess: (state, action: PayloadAction<string[]>) => {
      state.isLoading = false;
      state.error = '';
      state.title = state.title.concat(action.payload);
    },
    categoriesFetchingError: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    itemsFilterFetchingError: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    detailFetcing: (state) => {
      state.isDetail = true;
    },
    detailCloseForm: (state) => {
      state.isDetail = false;
    },
    pasteInfo: (state, action: PayloadAction<IItems>) => {
      state.clothingInfo = action.payload;
    },
  },
});
export default itemsSlice.reducer;
