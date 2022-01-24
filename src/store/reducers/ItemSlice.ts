import { IItems } from '../../models/IInterfaces';
import { ICount } from '../../models/IInterfaces';
import { IClothingInfo } from '../../models/IInterfaces';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  items: IItems[];
  isLoading: boolean;
  error: string;
  title: string[];
  isDetail: boolean;
  clothingInfo: IClothingInfo;
  mainCategory: string;
  itemsForCart: IClothingInfo[];
  statusCart: string;
  statusHeart: string;
  firstValuePrice: number;
  firstValueRating: number;
  firstValueCount: number;
  lastValuePrice: number;
  lastValueRating: number;
  lastValueCount: number;
}

const initialState: UserState = {
  items: [],
  isLoading: false,
  error: '',
  title: ['all items'],
  isDetail: false,
  firstValuePrice: 0,
  firstValueRating: 0,
  firstValueCount: 0,
  lastValuePrice: 0,
  lastValueRating: 0,
  lastValueCount: 0,
  clothingInfo: {
    id: 0,
    title: '',
    price: 0,
    category: '',
    description: '',
    image: '',
    countItem: 1,
    rating: {
      rate: 0,
      count: 0,
    },
  },

  itemsForCart: [],
  mainCategory: 'all items',
  statusCart: '/header/shoppingCart.svg',
  statusHeart: '/header/heart.svg',
};
const handleInputArray = (Array: IClothingInfo[]) => {
  const itemsCart = [...Array].reduce(
    (acc: IClothingInfo[], entry: IClothingInfo) => {
      const id = entry.id;
      const same = acc.find((element) => element.id === id);
      if (same !== undefined) same.countItem = entry.countItem;
      else acc.push({ ...entry });
      return acc;
    },
    []
  );
  return itemsCart;
};
export const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    itemsFetching: (state) => {
      state.isLoading = true;
    },
    itemsFetchingSuccess: (state, action: PayloadAction<IClothingInfo[]>) => {
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
      if (state.title.length === 1) {
        state.title = state.title.concat(action.payload);
      }
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
    pasteInfo: (state, action: PayloadAction<IClothingInfo>) => {
      state.clothingInfo = action.payload;
    },
    pasteCountItemForClothingInfo: (state, action: PayloadAction<number>) => {
      state.clothingInfo.countItem = action.payload;
    },
    pasteCountItem: (state, action: PayloadAction<ICount>) => {
      state.itemsForCart[action.payload.index].countItem = action.payload.count;
    },
    setMainCategory: (state, action: PayloadAction<string>) => {
      state.mainCategory = action.payload;
    },
    itemsCart: (state, action: PayloadAction<IClothingInfo>) => {
      const arr = handleInputArray(state.itemsForCart.concat(action.payload));
      state.itemsForCart = arr;
    },
    editStatusCart: (state, action: PayloadAction<string>) => {
      state.statusCart = action.payload;
    },
    editStatusHeart: (state, action: PayloadAction<string>) => {
      state.statusHeart = action.payload;
    },
    firstValuePriceChanging: (state, action: PayloadAction<number>) => {
      state.firstValuePrice = action.payload;
    },
    lastValuePriceChanging: (state, action: PayloadAction<number>) => {
      state.lastValuePrice = action.payload;
    },
    firstValueRatingChanging: (state, action: PayloadAction<number>) => {
      state.firstValueRating = action.payload;
    },
    lastValueRatingChanging: (state, action: PayloadAction<number>) => {
      state.lastValueRating = action.payload;
    },
    firstValueCountChanging: (state, action: PayloadAction<number>) => {
      state.firstValueCount = action.payload;
    },
    lastValueCountChanging: (state, action: PayloadAction<number>) => {
      state.lastValueCount = action.payload;
    },
  },
});
export default itemsSlice.reducer;
