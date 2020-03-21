import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Browse from './Browse';
import Feeds from './Feeds';
import Edit from './Edit';
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
              ? 'ios-albums'
              : 'ios-albums'
          } else if (route.name === 'Feeds') {
            IconName = focused
              ? 'ios-paper-plane'
              : 'ios-paper-plane'
          } else if (route.name === 'Create') {
            IconName = focused
              ? 'ios-add'
              : 'ios-add';
          }
          return <Ionicons name={IconName} size={size} color={color} />
        }
      })}
      tabBarOptions={{
        activeTintColor: theme.colors.primary,
        inactiveTintColor: theme.colors.gray,
      }}>
      <Tab.Screen name="Browse" component={Browse} />
      <Tab.Screen name="Feeds" component={Feeds} />
      <Tab.Screen name="Create" component={Edit} />
    </Tab.Navigator>
  );
}


export default BrowseTab;