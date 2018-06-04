import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {Container,Content,Icon} from 'native-base';
import CardComponent from '../CardComponent';

export default class HomeTab extends Component<Props> {

  static navigationOptions = {
      tabBarIcon: ({tintColor}) => (
        <Icon name="ios-home" style={{color:tintColor}} />
      )
    }

  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <CardComponent/>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"white"
  },
});
