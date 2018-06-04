import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {Icon} from 'native-base';

export default class ProfileTab extends Component<Props> {

  static navigationOptions = {
      tabBarIcon: ({tintColor}) => (
        <Icon name="person" style={{color:tintColor}} />
      )
    }
  render() {
    return (
      <View style={styles.container}>
        <Text>Test</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
});
