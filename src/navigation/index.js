import React from 'react';
import { Image } from 'react-native';
import { theme } from '../constants'
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
    headerStyle: {
      // height: theme.sizes.base * 7,
      backgroundColor: theme.colors.white, // or 'white
      borderBottomColor: "transparent",
      elevation: 0,
    },
    headerBackImage: <Image source={require('../../assets/icons/back.png')} />,
    headerBackTitle: null,
    headerLeftContainerStyle: {
      alignItems: 'center',
      marginLeft: theme.sizes.base,    //for iOS multiply the value by 2
      paddingRight: theme.sizes.base,
    },
    headerRightContainerStyle: {
      alignItems: 'center',
      paddingRight: theme.sizes.base,
    }
  }
})


export default createAppContainer(screens);