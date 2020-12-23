import { configureStore } from '@reduxjs/toolkit';
import controllerReducer from '../controller/controllerSlice';

export default configureStore({
  reducer: {
    baskets: controllerReducer,
  },
});