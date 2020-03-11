import React from 'react';
import { Image } from 'react-native';
import { theme } from '../constants'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Browse from '../screens/Browse';
import Forgot from '../screens/Forgot';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import Welcome from '../screens/Welcome';
// import Explore from '../screens/Explore';
// import Product from '../screens/Product';
// import Settings from '../screens/Settings';

const screens = createStackNavigator({
  //Explore, Product, Settings,
  Welcome, Login, Signup, Forgot, Browse
}, {
  defaultNavigationOptions: {
    headerStyle: {
      // height: theme.sizes.base * 7,
      backgroundColor: theme.colors.white, // or 'white
      borderBottomColor: "transparent",
      elevation: 0,
    },
    // headerBackImage: () => <Image source={require('../../assets/icons/back.png')} />,
    headerBackTitle: null,
    headerLeftContainerStyle: {
      alignItems: 'center',
      marginLeft: theme.sizes.base / 1.75,    //for iOS multiply the value by 2
      paddingRight: theme.sizes.base,
    },
    headerRightContainerStyle: {
      alignItems: 'center',
      paddingRight: theme.sizes.base,
    }
  }
})


export default createAppContainer(screens);