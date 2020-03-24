import * as React from 'react';
import { Image, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { theme, mocks } from '../constants';

// import Browse from '../screens/Browse';
import BrowseTab from '../screens/BrowseTab';
import Forgot from '../screens/Forgot';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import Welcome from '../screens/Welcome';
import Settings from '../screens/Settings';
import Explore from '../screens/Explore';
import Product from '../screens/Product';
import Feed from '../screens/Feed';

const Stack = createStackNavigator();

const defaultNavigationOptions = {
  headerStyle: {
    backgroundColor: 'theme.colors.white',
    borderBottomColor: "transparent",
    elevation: 0,
  },
  // gestureEnabled: true,
  title: '',
  headerTitle: '',
  headerBackTitle: '',
  headerBackTitleVisible: false,
  headerBackImage: () => <Image source={require('../../assets/icons/back.png')} />,
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
        screenOptions={defaultNavigationOptions}
      >
        <Stack.Screen name="BrowseTab" component={BrowseTab}
          options={{
            title: 'Browse',
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
        <Stack.Screen name="Feed" component={Feed}
          options={{ title: 'foodie', headerTitle: 'Feed' }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  avatar: {
    borderRadius: 15,
    width: 30,
    height: 30
  }
})

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