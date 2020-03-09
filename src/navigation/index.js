import React from 'react';
import { Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// import Browse from '../screens/Browse';
// import Explore from '../screens/Explore';
// import Forgot from '../screens/Forgot';
import Login from '../screens/Login';
// import Product from '../screens/Product';
import Signup from '../screens/Signup';
// import Settings from '../screens/Settings';
import Welcome from '../screens/Welcome';

const screens = createStackNavigator({
  // Browse, Explore, Forgot, Product, Settings,
  Welcome, Login, Signup
}, {
  defaultNavigationOptions: {
    headerStyle: {},
    // headerBackImage: <Image />,
    headerBackTitle: null,
    headerLeftContainerStyle: {},
    headerRightContainerStyle: {}
  }
})


export default createAppContainer(screens);