import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Browse from './Browse';
import Feeds from './Feeds';
import { theme } from '../constants';

const Tab = createBottomTabNavigator();

function BrowseTab() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let IconName;
          if (route.name === 'Browse') {
            IconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline'
          } else if (route.name === 'Feeds') {
            IconName = focused ? 'ios-list-box' : 'ios-list';
          }
          return <Ionicons name={IconName} size={size} color={color} />
        }
      })}
      tabBarOptions={{
        activeTintColor: theme.colors.primary,
        inactiveTintColor: theme.colors.accent,
      }}>
      <Tab.Screen name="Feeds" component={Feeds} />
      <Tab.Screen name="Browse" component={Browse} />
    </Tab.Navigator>
  );
}


export default BrowseTab;