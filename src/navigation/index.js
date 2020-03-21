import * as React from 'react';
import { Image, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { theme } from '../constants';

// import Browse from '../screens/Browse';
import BrowseTab from '../screens/BrowseTab';
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
  // gestureEnabled: true,
  title: '',
  headerBackTitle: '',
  headerTitle: '',
  headerBackTitleVisible: false,
  headerBackImage: () => <Image source={require('../../assets/icons/back.png')} />,
  headerLeftContainerStyle: {
    alignItems: 'center',
    marginLeft: theme.sizes.base / 1.75,
    paddingRight: theme.sizes.base,
  },
  headerRight: () => (
    <Button
      onPress={() => alert('button vlicd')}
      title="info"
      color={theme.colors.gray2}
    />
  ),
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
        screenOptions={defaultNavigationOptions}
      // tabBarComponent={TabBar}
      >
        <Stack.Screen name="BrowseTab" component={BrowseTab}
          options={{
            headerRight: () => (
              <Button
                onPress={() => alert('Take me to my profile')}
                title="Profile"
                color="#d4d4d4"
              />
            ),
          }} />
        <Stack.Screen name="Explore" component={Explore} />
        <Stack.Screen name="Forgot" component={Forgot} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Product" component={Product} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Welcome" component={Welcome} />
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