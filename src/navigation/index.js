import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { theme } from '../constants'

import Browse from '../screens/Browse';
import Forgot from '../screens/Forgot';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import Welcome from '../screens/Welcome';
import Settings from '../screens/Settings';
import Explore from '../screens/Explore';
import Product from '../screens/Product';

const Stack = createStackNavigator();

const defaultNavigationOptions = {
  headerStyle: {
    backgroundColor: 'theme.colors.white',
    borderBottomColor: "transparent",
    elevation: 0,
  },
  title: '',
  headerBackTitle: '',
  headerTitle: '',
  headerBackTitleVisible: false,
  headerLeftContainerStyle: {
    alignItems: 'center',
    marginLeft: theme.sizes.base / 1.75,
    paddingRight: theme.sizes.base,
  },
  headerRightContainerStyle: {
    alignItems: 'center',
    paddingRight: theme.sizes.base,
  }
}

function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{
          gestureEnabled: true
        }}
      >
        <Stack.Screen name="Browse" component={Browse}
          options={defaultNavigationOptions} />
        <Stack.Screen name="Explore" component={Explore}
          options={defaultNavigationOptions} />
        <Stack.Screen name="Forgot" component={Forgot}
          options={defaultNavigationOptions} />
        <Stack.Screen name="Login" component={Login}
          options={defaultNavigationOptions} />
        <Stack.Screen name="Product" component={Product}
          options={defaultNavigationOptions} />
        <Stack.Screen name="Settings" component={Settings}
          options={defaultNavigationOptions} />
        <Stack.Screen name="Signup" component={Signup}
          options={defaultNavigationOptions} />
        <Stack.Screen name="Welcome" component={Welcome}
          options={defaultNavigationOptions} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}


// const screens = createStackNavigator({
//   Welcome, Login, Signup, Forgot, Browse, Settings, Explore, Product
// }, {
//   defaultNavigationOptions: {
//     headerStyle: {
//       backgroundColor: 'theme.colors.white',
//       borderBottomColor: "transparent",
//       elevation: 0,
//     },
//     headerBackTitle: null,
//     headerLeftContainerStyle: {
//       alignItems: 'center',
//       marginLeft: theme.sizes.base / 1.75,
//       paddingRight: theme.sizes.base,
//     },
//     headerRightContainerStyle: {
//       alignItems: 'center',
//       paddingRight: theme.sizes.base,
//     }
//   }
// })


// export default createAppContainer(screens);
export default MainStackNavigator;