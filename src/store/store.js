import { configureStore } from '@reduxjs/toolkit';
import billReducer from './billSlice';
import alertReducer from './alertSlice';
import modalReducer from './modalSlice';
const store = configureStore({
    reducer: {
        bills: billReducer,
        alert:alertReducer,
        modal:modalReducer,
    },
});

export default store;