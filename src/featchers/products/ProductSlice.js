import { createSlice } from '@reduxjs/toolkit';
import products from '../../ecommerceData/Ecommerce.js'

const initialState = {
    items: products,
    filteredItems: products,
    searchTerm: '',
    selectedCateogry:'All'
};

// search product and search catergory 
const filterProduct = (state) => {
    return state.items.filter((product) => {
        const matchSearch = product.title.toLowerCase()
            .includes(state.searchTerm.toLowerCase())
        const matchCateogry = state.selectedCateogry === 'All' ||
            product.category === state.selectedCateogry;
            return matchSearch && matchCateogry
    })
}
const productSlice = createSlice({
    name: 'Products',
    initialState,
    reducers: {
        setSearchTerm: (state, action) => {
            state.searchTerm = action.payload;
            state.filteredItems = filterProduct(state)
        },
        setSelectedCateogry: (state, action) => {
            state.selectedCateogry = action.payload;
            state.filteredItems = filterProduct(state);
        }
    }
});
export const { setSearchTerm , setSelectedCateogry} = productSlice.actions;
export default productSlice.reducer;
