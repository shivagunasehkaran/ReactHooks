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
  StatusBar,
} from 'react-native';
import HookState from './components/HookState';
import HookEffect from './components/HookEffect';
import HookMemo from './components/HookMemo';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        {/* <HookState /> */}
        {/* <HookEffect /> */}
        <HookMemo />
      </SafeAreaView>
    </>
  );
};

export default App;
