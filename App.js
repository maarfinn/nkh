import React, {useEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import AppNavigator from './src/Navigation/AppNavigation';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './src/Utils/store';
import Toast from 'react-native-toast-message';
import SplashScreen from './src/Screens/SplashScreen';
import Slider from './src/component/Slider';

const App = () => {
  const [showSplashScreen, setShowSplashScreen] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSplashScreen(false);
    }, 2000);
  }, []);
  return (
    // provider is used for redux
    // <Provider store={store}>
    //   <PersistGate loading={null} persistor={persistor}>
    //     <StatusBar translucent backgroundColor="transparent" />
    //     {showSplashScreen ? <SplashScreen /> : <AppNavigator />}
    //     <Toast position="top" bottomOffset={20} />
    //   </PersistGate>
    // </Provider>
    <>
      <StatusBar backgroundColor={'transparent'} />
      <Slider />
    </>
  );
};

export default App;
