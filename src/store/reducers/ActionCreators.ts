import { AppDispatch } from '../store';
import axios from 'axios';
import { IItems } from '../../models/IItems';
import { itemsSlice } from './UserSlice';

export const fetchAllItems = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(itemsSlice.actions.itemsFetching());
    const response = await axios.get<IItems[]>(
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
      console.log(category);
      if (category === 'all items') {
        dispatch(itemsSlice.actions.itemsFetching());
        const response = await axios.get<IItems[]>(
          'https://fakestoreapi.com/products'
        );
        dispatch(itemsSlice.actions.itemsFetchingSuccess(response.data));
      } else {
        dispatch(itemsSlice.actions.itemsFetching());
        const response = await axios.get<IItems[]>(
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
