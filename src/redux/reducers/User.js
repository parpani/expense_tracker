import {createSlice} from '@reduxjs/toolkit';

// Defining the initial state for the user slice of the store
const initialState = {
  // userId: 1,
  // firstName: 'Meet',
  // lastName: 'Parpani',
  isLoggedIn: false,
  profileImage:'https://cdn.dribbble.com/users/1577045/screenshots/4914645/media/028d394ffb00cb7a4b2ef9915a384fd9.png?compress=1&resize=400x300&vertical=top',
};

// Creating a new slice of the store named "user" with its own set of reducers
export const User = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    resetToInitialState: () => {  //this reducer needs to be set up everytime as if u want to make aqny changes in the store after it is created, this function will help you to do so, otherwise only the old values will be fetched.
      return initialState;
    },
    logIn: (state, action) => {
      return {...state, ...{isLoggedIn:true}, ...action.payload};
    },
    updateToken: (state, action) => {   //to update the token generated from the firebase
      state.token = action.payload;
    },
  }
});

export const {logIn, resetToInitialState, updateToken} = User.actions;
export default User.reducer;