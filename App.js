import React, {useEffect, useRef} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {AppState} from 'react-native';

// Importing the Provider component from the React Redux library
// The Provider component is a higher-order component that provides the Redux store to all components in the app
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

//import MainNavigation from './navigation/MainNavigation';
import RootNavigation from './src/navigation/RootNavigation';
import store from './src/redux/store';
import {persistor} from './src/redux/store';
import {checkToken} from './src/api/user';

const App = () =>{

  const appState = useRef(AppState.currentState);
  useEffect(() => {
    const subscription = AppState.addEventListener(
      'change',
      async nextAppState => {
        if (
          appState.current.match(/inactive|background/) &&
          nextAppState === 'active'
        ) {
          //console.log('You have come back into the app');
          await checkToken();
          //we are coming from background to the foreground
        }

        appState.current = nextAppState;
      },
    );
    checkToken();
    //console.log('Application has rendered');
  }, []);
  
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <NavigationContainer>
          {/* <MainNavigation /> */}
          <RootNavigation />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

export default App;
