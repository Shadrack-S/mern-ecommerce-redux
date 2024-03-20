import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
    },
    reducers: {
        addToCart: (state, action) => {
            const existingItem = state.items.find(item => item._id === action.payload._id);

            if (!existingItem) {
                state.items.push({
                    ...action.payload,
                    quantity: 1,
                });
            } else {
                state.items = state.items.map(item =>
                    item._id === action.payload._id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
        },
    },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
