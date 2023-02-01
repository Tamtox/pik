import {createSlice} from '@reduxjs/toolkit';

interface IFlatSliceSchema {
    city: string;
    cityId: string;
    price: string;
}

const initialState: IFlatSliceSchema = {
    city: '',
    cityId: '',
    price: "0",
}

const flatSlice = createSlice({
    name: 'flat',
    initialState,
    reducers: {
        setCity: (state, action) => {
            state.city = action.payload;
        },
        setCityId: (state, action) => {
            state.cityId = action.payload;
        },
        setPrice: (state, action) => {
            state.price = action.payload;
        },
    }
}) 

export default flatSlice;