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

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        {/* <HookState /> */}
        <HookEffect />
      </SafeAreaView>
    </>
  );
};

export default App;
