import {configureStore} from '@reduxjs/toolkit';
import flatSlice from './flat_slice';

const store = configureStore({
    reducer: {
        flatSlice: flatSlice.reducer,
    }
});

export const flatActions = flatSlice.actions;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store