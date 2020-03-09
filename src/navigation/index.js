import { Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Browse from '../screens/Browse';
import Explore from '../screens/Explore';
import Forgot from '../screens/Forgot';
import Login from '../screens/Login';
import Product from '../screens/Product';
import SignUp from '../screens/SignUp';
import Settings from '../screens/Settings';
import Welcome from '../screens/Welcome';


const screens = createStackNavigator({
  Browse, Explore, Forgot, Login, Product, SignUp, Settings, Welcome
}, {
  defaultNavigationOptions: {
    headerStyle: {},
    headerBackImage: <Image />,
    headerBackTitle: null,
    headerLeftContainerStyle: {},
    headerRightContainerStyle: {}
  }
})


export default createAppContainer(screens);