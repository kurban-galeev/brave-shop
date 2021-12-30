import { combineReducers, configureStore } from '@reduxjs/toolkit';
import itemsReducers from './reducers/UserSlice';
import extraReducers from './reducers/UserSlice';

const rootReducer = combineReducers({
  itemsReducers,
  extraReducers,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];