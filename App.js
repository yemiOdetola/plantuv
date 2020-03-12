import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import Navigation from './src/navigation';
import { Block } from './src/components';
import { theme } from './src/constants';

const images = [
  require('./assets/icons/back.png'),
  require('./assets/icons/plants.png'),
  require('./assets/icons/seeds.png'),
  require('./assets/icons/flowers.png'),
  require('./assets/icons/sprayers.png'),
  require('./assets/icons/pots.png'),
  require('./assets/icons/fertilizers.png'),
  require('./assets/images/plants_1.png'),
  require('./assets/images/plants_2.png'),
  require('./assets/images/plants_3.png'),
  require('./assets/images/explore_1.png'),
  require('./assets/images/explore_2.png'),
  require('./assets/images/explore_3.png'),
  require('./assets/images/explore_4.png'),
  require('./assets/images/explore_5.png'),
  require('./assets/images/explore_6.png'),
  require('./assets/images/illustration_1.png'),
  require('./assets/images/illustration_2.png'),
  require('./assets/images/illustration_3.png'),
  require('./assets/images/avatar.png'),
];

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoadingComplete: false
    }
  }

  handleResoursesAsync = async () => {
    const cacheImages = images.map(image => {
      Asset.fromModule(image).downloadAsync();
    })
    return Promise.all(cacheImages);
  }

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this.handleResoursesAsync}
          onError={error => console.ward(error)}
          onFinish={() => this.setState({ isLoadingComplete: true })}
        >
        </AppLoading>
      )
    }
    return (
      <Block style={styles.container}>
        <Navigation />
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  }
});
