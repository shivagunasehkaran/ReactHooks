/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
} from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import createReducer from './reducer/rootReducer';
import HookState from './components/HookState';
import HookEffect from './components/HookEffect';
import HookMemo from './components/HookMemo';
import HookRedux from './components/HookRedux';

const store = createStore(createReducer);

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <HookState />
        {/* <HookEffect /> */}
        {/* <HookMemo /> */}
        {/* <HookRedux /> */}
      </SafeAreaView>
    </Provider>
  );
};

export default App;
