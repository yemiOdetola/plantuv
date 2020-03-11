import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Button, Block, Text } from '../components';


export class Explore extends Component {
  render() {
    const { navigation } = this.props
    const category = navigation.getParam('category');
    return (
      <Block center middle>
        <Text>{category.name}</Text>
      </Block>

    )
  }
}

const styles = StyleSheet.create({})


export default Explore;
