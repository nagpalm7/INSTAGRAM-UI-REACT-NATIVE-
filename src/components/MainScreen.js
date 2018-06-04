import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import HomeTab from './AppTabNavigator/HomeTab';
import LikesTab from './AppTabNavigator/LikesTab';
import AddMediaTab from './AppTabNavigator/AddMediaTab';
import SearchTab from './AppTabNavigator/SearchTab';
import ProfileTab from './AppTabNavigator/ProfileTab';

import {TabNavigator} from  'react-navigation';
import {Icon} from 'native-base';

export default class Main extends Component<Props> {
  static navigationOptions = {
    headerLeft:<Icon name="ios-camera-outline" style={{paddingLeft:10}} />,
    title:"Instagram",
    headerRight:<Icon name="ios-send-outline" style={{paddingRight:10}} />
  }
  render() {
    return (
      <AppTabNavigator />
    );
  }
}

const AppTabNavigator = TabNavigator({
    HomeTab:{
      screen:HomeTab
    },
    SearchTab:{
      screen:SearchTab
    },
    AddMediaTab:{
      screen:LikesTab
    },
    LikesTab:{
      screen:AddMediaTab
    },
    ProfileTab:{
      screen:ProfileTab
    }
},{
  animationEnabled:true,
  swipeEnabled:true,
  tabBarPosition:"bottom",
  tabBarOptions:{
    style:{
      backgroundColor:"white"
    },
    activeTintColor:'#000',
    inactiveTintColor:'#d1cece',
    showLabel:false,
    showIcon:true
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
});
