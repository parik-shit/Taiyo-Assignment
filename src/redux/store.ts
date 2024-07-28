import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './slices/themeSlice';
import contactReducer from './slices/contactSlice';
//import deviceReducer from './slices/deviceSlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
//  device: deviceReducer,
    contact: contactReducer,    
  },
});

// Get the type of our store variable
export type AppStore = typeof store;

// Infer the RootState and AppDispatch types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

export default store;

