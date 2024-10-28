// Importing the combineReducers function from Redux
import {combineReducers} from 'redux';
import {configureStore} from '@reduxjs/toolkit';

// Importing AsyncStorage from the @react-native-async-storage/async-storage library to persist Redux state and store data in the async storage
import AsyncStorage from '@react-native-async-storage/async-storage';

// Importing the persistReducer and persistStore functions from the redux-persist library to save the updated state in reducer and store
import {persistReducer, persistStore} from 'redux-persist';

import User from './reducers/User';
import Categories from './reducers/Categories';
import Transactions from './reducers/Transactions';

// Creating a rootReducer that combines all reducers in the app
const rootReducer = combineReducers({
    user: User,
    categories: Categories,
    transactions: Transactions
});

// Configuring the redux-persist library to persist the root reducer with AsyncStorage
const configuration = {
  key: 'root',
  storage: AsyncStorage,  //store persisted values in async storage
  version: 1,   //to maintain versioning if incase needed in future
};


  // Creating a new persisted reducer with the configuration and root reducer
const persistedReducer = persistReducer(configuration, rootReducer);  //now passing basic reducer from user here, storing the values and then moving forward
//console.log(persistedReducer)

// Creating a new Redux store using the configureStore function
// We're passing in the persisted reducer as the main reducer for the store
const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware => {  
       //return getDefaultMiddleware().concat(logger);  //logs the data
       return getDefaultMiddleware({
        serializableCheck: false,
      });
    },
});

export default store;
export const persistor = persistStore(store);  //persisting the store
//persistor.purge();  //This is used when we want to purge the entire store, it is generally done when changes are made in the initial state and it is not reflected inside the async storage
