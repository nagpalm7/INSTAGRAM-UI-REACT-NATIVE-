import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import {Card , CardItem ,Body , Thumbnail , Left , Right ,Button, Icon} from 'native-base';

export default class CardComponent extends Component<Props> {

  render() {
    return (
      <Card>
        <CardItem>
          <Left>
            <Thumbnail source={require('../assets/me.jpeg')}/>
            <Body>
              <Text>Mohit</Text>
              <Text note>March 31,2018</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardbody>
          <Image source={require('../assets/feed/1.png')} style={{height:200,width:null,flex:1}}/>
        </CardItem>
        <CardItem style={{height:45}}>
          <Left>
              <Button transparent>
                <Icon name="ios-heart-outline" style={{color:'black'}}/>
              </Button>
              <Button transparent>
                <Icon name="ios-chatbubbles-outline" style={{color:'black'}}/>
              </Button>
              <Button transparent>
                <Icon name="ios-send-outline" style={{color:'black'}}/>
              </Button>
          </Left>
        </CardItem>
        <CardItem style={{height:20}}>
          <Text>101 likes</Text>
        </CardItem>
        <CardItem>
          <Body>
            <Text><Text style={{fontWeight:'900'}}>mohit</Text>********************************************************************************************************************************************************************************************************************</Text>
          </Body>
        </CardItem>
      </Card>

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
