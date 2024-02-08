

import React, { useState } from 'react';
import {
  View,
} from 'react-native';


import SignUp from './src/view/SignUp/SignUp';
import SplashScreen from './src/view/Splash/SplashScreen';
import higherOrderComponent from './src/view/Hocs/Hoc';
import EnhancedComponent from './src/view/Hocs/Hoc';
import { Provider } from 'react-redux';
import store from './src/redux/Store';



function App(): React.JSX.Element {
 const [splash,setSplash]=useState<boolean>(true);

 setTimeout(()=>{setSplash(false)},2000)
  

  return (

   <Provider store={store}>
   { splash?<SplashScreen/>:<EnhancedComponent/> }
    </Provider>
  );
}



export default App;
