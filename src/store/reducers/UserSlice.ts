import { IItems } from '../../models/IItems';
import { ICount } from '../../models/ICount';
import { IClothingInfo } from '../../models/IClothingInfo';
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
  lastValuePrice: number;
  lastValueRating: number;
}

const initialState: UserState = {
  items: [],
  isLoading: false,
  error: '',
  title: ['all items'],
  isDetail: false,
  // countItem: [],
  firstValuePrice: 0,
  firstValueRating: 0,
  lastValuePrice: 0,
  lastValueRating: 0,
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
// const getFir
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
      // const obj = Object.assign({}, state.clothingInfo, {
      //   countItem: action.payload,
      // });
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
    // getFirstAndLastValuePrice: (state) => {
    //   const { maxElem, minElem } = getFirstAndLastPrice(state.items);
    //   state.firstValuePrice = minElem;
    //   state.lastValuePrice = maxElem;
    // },
    // getFirstAndLastValueRating: (state) => {
    //   const { maxElem, minElem } = getFirstAndLastRating(state.items);
    //   state.firstValueRating = minElem;
    //   state.lastValueRating = maxElem;
    // },
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
  },
});
export default itemsSlice.reducer;
