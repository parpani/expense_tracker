import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    categories: [
        {
          categoryId: 0,
          name: 'Select'
        },
        {
          categoryId: 1,
          name: 'Loan',
        },
        {
          categoryId: 2,
          name: 'Transport',
        },
        {
          categoryId: 3,
          name: 'Food',
        },
        {
          categoryId: 4,
          name: 'Clothing and Accessories',
        },
        {
          categoryId: 5,
          name: 'Household',
        },
        {
          categoryId: 6,
          name: 'Electronics',
        },
        {
          categoryId: 7,
          name: 'Education',
        },
        {
          categoryId: 8,
          name: 'Sports Equipment',
        },
        {
          categoryId: 9,
          name: 'Books and Media',
        },
        {
          categoryId: 10,
          name: 'Health and Beauty Products',
        },
        {
          categoryId: 11,
          name: 'Gift',
        },
        {
          categoryId: 12,
          name: 'Tools and Hardware',
        },
    ],
};

export const Categories = createSlice({
    name: 'categories',
    initialState: initialState,
    reducers: {
      resetToInitialState: () => {  //this reducer needs to be set up everytime as if u want to make aqny changes in the store after it is created, this function will help you to do so, otherwise only the old values will be fetched.
        return initialState;
      },
      updateSelectedCategoryId: (state, action) => {
        //console.log("action", action.payload)
        state.selectedCategoryId = action.payload;
      },
    }
});

export const {resetToInitialState, updateSelectedCategoryId} = Categories.actions;
export default Categories.reducer;