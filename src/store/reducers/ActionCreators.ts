import { AppDispatch } from '../store';
import axios from 'axios';
import { IClothingInfo } from '../../models/IInterfaces';
import { itemsSlice } from './ItemSlice';

export const fetchAllItems = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(itemsSlice.actions.itemsFetching());
    const response = await axios.get<IClothingInfo[]>(
      'https://fakestoreapi.com/products'
    );
    dispatch(itemsSlice.actions.itemsFetchingSuccess(response.data));
  } catch (e) {
    dispatch(itemsSlice.actions.itemsFetchingError((e as Error).message));
  }
};
export const fetchCategories = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(itemsSlice.actions.categoriesFetching());
    const response = await axios.get<string[]>(
      'https://fakestoreapi.com/products/categories/'
    );
    dispatch(itemsSlice.actions.categoriesFetchingSuccess(response.data));
  } catch (e) {
    dispatch(itemsSlice.actions.categoriesFetchingError((e as Error).message));
  }
};
export const fetchFilterCategories =
  (category: string) => async (dispatch: AppDispatch) => {
    try {
      if (category === 'all items') {
        dispatch(itemsSlice.actions.itemsFetching());
        const response = await axios.get<IClothingInfo[]>(
          'https://fakestoreapi.com/products'
        );
        dispatch(itemsSlice.actions.itemsFetchingSuccess(response.data));
      } else {
        dispatch(itemsSlice.actions.itemsFetching());
        const response = await axios.get<IClothingInfo[]>(
          `https://fakestoreapi.com/products/category/${category}`
        );
        dispatch(itemsSlice.actions.itemsFetchingSuccess(response.data));
      }
    } catch (e) {
      dispatch(
        itemsSlice.actions.itemsFilterFetchingError((e as Error).message)
      );
    }
  };
export const openDetailForm = () => async (dispatch: AppDispatch) => {
  dispatch(itemsSlice.actions.detailFetcing());
};
export const closeDetailForm = () => async (dispatch: AppDispatch) => {
  dispatch(itemsSlice.actions.detailCloseForm());
};
export const pasteClothingInfo =
  (IClothingInfo: IClothingInfo) => async (dispatch: AppDispatch) => {
    dispatch(itemsSlice.actions.pasteInfo(IClothingInfo));
  };
export const setMainCategory =
  (MainCategory: string) => async (dispatch: AppDispatch) => {
    dispatch(itemsSlice.actions.setMainCategory(MainCategory));
  };
export const pasteItemsForCart =
  (IClothingInfo: IClothingInfo) => async (dispatch: AppDispatch) => {
    dispatch(itemsSlice.actions.itemsCart(IClothingInfo));
  };
export const pasteCountItemForClothingInfo =
  (count: number) => async (dispatch: AppDispatch) => {
    dispatch(itemsSlice.actions.pasteCountItemForClothingInfo(count));
  };
export const editStatusCart =
  (StatusCart: string) => async (dispatch: AppDispatch) => {
    dispatch(itemsSlice.actions.editStatusCart(StatusCart));
  };
export const editStatusHeart =
  (StatusHeart: string) => async (dispatch: AppDispatch) => {
    dispatch(itemsSlice.actions.editStatusHeart(StatusHeart));
  };
export const pasteCountItem =
  (CountItem: { count: number; index: number }) =>
  async (dispatch: AppDispatch) => {
    dispatch(itemsSlice.actions.pasteCountItem(CountItem));
  };

export const firstValuePriceChanging =
  (firstValuePrice: number) => async (dispatch: AppDispatch) => {
    dispatch(itemsSlice.actions.firstValuePriceChanging(firstValuePrice));
  };
export const lastValuePriceChanging =
  (lastValuePrice: number) => async (dispatch: AppDispatch) => {
    dispatch(itemsSlice.actions.lastValuePriceChanging(lastValuePrice));
  };
export const firstValueRatingChanging =
  (firstValueRating: number) => async (dispatch: AppDispatch) => {
    dispatch(itemsSlice.actions.firstValueRatingChanging(firstValueRating));
  };
export const lastValueRatingChanging =
  (lastValueRating: number) => async (dispatch: AppDispatch) => {
    dispatch(itemsSlice.actions.lastValueRatingChanging(lastValueRating));
  };
export const firstValueCountChanging =
  (firstValueCount: number) => async (dispatch: AppDispatch) => {
    dispatch(itemsSlice.actions.firstValueCountChanging(firstValueCount));
  };
export const lastValueCountChanging =
  (lastValueCount: number) => async (dispatch: AppDispatch) => {
    dispatch(itemsSlice.actions.lastValueCountChanging(lastValueCount));
  };
