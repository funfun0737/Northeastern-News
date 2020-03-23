import React from 'react';
import firebase from 'firebase';
import { createStackNavigator} from 'react-navigation-stack';
import { createAppContainer , createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import SigninScreen from './src/screens/SigninScreen';
import HomeScreen from './src/screens/HomeScreen';
import NewsScreen from './src/screens/NewsScreen';
import News1_CoronavirusSymptoms_Screen from './src/screens/News1_CoronavirusSymptoms_Screen';
import News2_WorkingRemotely from './src/screens/News2_WorkingRemotely';
import News3_NEU_MovingToOnlineTeaching from './src/screens/News3_NEU_MovingToOnlineTeaching';
import FavoritesScreen from './src/screens/FavoritesScreen';
import TestScreen from './src/screens/TestScreen';
import { Provider } from './src/context/Favorites';
import { Ionicons } from '@expo/vector-icons';

const App = createStackNavigator(
  {

    Home: HomeScreen,
    News: NewsScreen,
    Favorites: FavoritesScreen,
    News1: News1_CoronavirusSymptoms_Screen,
    News2: News2_WorkingRemotely,
    News3: News3_NEU_MovingToOnlineTeaching,                                    
  },
  {
//initial rountine deleted
//provider deleted
    defaultNavigationOptions:{
      title: 'NEU Bay Area'
    }
  }
);

const BottomNavigation = createBottomTabNavigator({
  Home: {
    screen: App,
    navigationOptions: {
      tabBarLabel: "Home",
      tabBarIcon: (tabInfo) => {
        return <Ionicons name="ios-home" size={25} color={tabInfo.tintColor}/>;
      }
    }
  },

  Favorite: {
    screen: FavoritesScreen,
    navigationOptions: {
      tabBarLabel: "Favorites",
      tabBarIcon: (tabInfo) => {
        return <Ionicons name="ios-bookmark" size={25} color={tabInfo.tintColor} />;
      }
    }
  },

  Signin: {
    screen: SigninScreen,
    navigationOptions: {
      tabBarLabel: "Profile",
      tabBarIcon: (tabInfo) => {
        return <Ionicons name="ios-settings" size={25} color={tabInfo.tintColor}/>;
      }
  }}
},{
    tabBarOptions:{
      activeTintColor: 'darkred'

  }
});

export default createAppContainer(BottomNavigation);