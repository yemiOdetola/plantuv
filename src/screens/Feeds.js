import React, { Component } from 'react';
import { ScrollView, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import { Button, Block, Text, Card } from '../components';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '../constants'

export class Feeds extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <Block style={styles.container}>
        {/* <Block flex={false} row center space="between" style={styles.header}>
          <Text h1 bold>Feeds</Text>
        </Block> */}
        <ScrollView showsVerticalScrollIndicator={false} style={styles.explore}>
          <Block center style={styles.feedsContainer}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Login')}>
              <Card center shadowDark style={styles.feedCard}>
                <Image style={styles.cardImage} source={require('../../assets/images/plant.jpg')} />
                <Text style={styles.title}>Profeller Garius</Text>
                <Block flex={false} row center space="between" style={styles.tags}>
                  <TouchableOpacity style={styles.tag}
                    onPress={() => alert('liked')}>
                    <Block flex={false} row center>
                      <Ionicons name="ios-pricetag"
                        size={14} color={theme.colors.gray2} />
                      <Text style={styles.tagText}>Blog</Text>
                    </Block>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.tag}
                    onPress={() => alert('liked')}>
                    <Block flex={false} row center>
                      <Ionicons name="ios-pricetag"
                        size={14} color={theme.colors.gray} />
                      <Text style={styles.tagText}>Hibiscus</Text>
                    </Block>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.tag}
                    onPress={() => alert('liked')}>
                    <Block flex={false} row center>
                      <Ionicons name="ios-pricetag"
                        size={14} color={theme.colors.gray} />
                      <Text style={styles.tagText}>Healthy</Text>
                    </Block>
                  </TouchableOpacity>
                </Block>
                <Text style={styles.description}>I want to add a border around my Text. I've done the following, I only want the border around the text, not the full width of the View...</Text>
                <Block flex={false} row center space="between" style={styles.foot}>
                  <TouchableOpacity style={styles.like}
                    onPress={() => alert('liked')}>
                    <Block flex={false} row center space="between">
                      <Ionicons name="ios-thumbs-up"
                        size={30} color={theme.colors.primary} />
                      <Text style={styles.likeText}>Like</Text>
                    </Block>
                  </TouchableOpacity>
                </Block>
              </Card>
            </TouchableOpacity>
          </Block>
          <Block center style={styles.feedsContainer}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Login')}>
              <Card center shadowDark style={styles.feedCard}>
                <Image style={styles.cardImage} source={require('../../assets/images/plant.jpg')} />
                <Text style={styles.title}>Profeller Garius</Text>
                <Block flex={false} row center space="between" style={styles.tags}>
                  <TouchableOpacity style={styles.tag}
                    onPress={() => alert('liked')}>
                    <Block flex={false} row center>
                      <Ionicons name="ios-pricetag"
                        size={14} color={theme.colors.gray2} />
                      <Text style={styles.tagText}>Blog</Text>
                    </Block>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.tag}
                    onPress={() => alert('liked')}>
                    <Block flex={false} row center>
                      <Ionicons name="ios-pricetag"
                        size={14} color={theme.colors.gray} />
                      <Text style={styles.tagText}>Hibiscus</Text>
                    </Block>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.tag}
                    onPress={() => alert('liked')}>
                    <Block flex={false} row center>
                      <Ionicons name="ios-pricetag"
                        size={14} color={theme.colors.gray} />
                      <Text style={styles.tagText}>Healthy</Text>
                    </Block>
                  </TouchableOpacity>
                </Block>
                <Text style={styles.description}>I want to add a border around my Text. I've done the following, I only want the border around the text, not the full width of the View...</Text>
                <Block flex={false} row center space="between" style={styles.foot}>
                  <TouchableOpacity style={styles.like}
                    onPress={() => alert('liked')}>
                    <Block flex={false} row center space="between">
                      <Ionicons name="ios-thumbs-up"
                        size={30} color={theme.colors.primary} />
                      <Text style={styles.likeText}>Like</Text>
                    </Block>
                  </TouchableOpacity>
                </Block>
              </Card>
            </TouchableOpacity>
          </Block>

          <Block center style={styles.feedsContainer}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Login')}>
              <Card center shadowDark style={styles.feedCard}>
                <Image style={styles.cardImage} source={require('../../assets/images/plant.jpg')} />
                <Text style={styles.title}>Profeller Garius</Text>
                <Block flex={false} row center space="between" style={styles.tags}>
                  <TouchableOpacity style={styles.tag}
                    onPress={() => alert('liked')}>
                    <Block flex={false} row center>
                      <Ionicons name="ios-pricetag"
                        size={14} color={theme.colors.gray2} />
                      <Text style={styles.tagText}>Blog</Text>
                    </Block>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.tag}
                    onPress={() => alert('liked')}>
                    <Block flex={false} row center>
                      <Ionicons name="ios-pricetag"
                        size={14} color={theme.colors.gray} />
                      <Text style={styles.tagText}>Hibiscus</Text>
                    </Block>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.tag}
                    onPress={() => alert('liked')}>
                    <Block flex={false} row center>
                      <Ionicons name="ios-pricetag"
                        size={14} color={theme.colors.gray} />
                      <Text style={styles.tagText}>Healthy</Text>
                    </Block>
                  </TouchableOpacity>
                </Block>
                <Text style={styles.description}>I want to add a border around my Text. I've done the following, I only want the border around the text, not the full width of the View...</Text>
                <Block flex={false} row center space="between" style={styles.foot}>
                  <TouchableOpacity style={styles.like}
                    onPress={() => alert('liked')}>
                    <Block flex={false} row center space="between">
                      <Ionicons name="ios-thumbs-up"
                        size={30} color={theme.colors.primary} />
                      <Text style={styles.likeText}>Like</Text>
                    </Block>
                  </TouchableOpacity>
                </Block>
              </Card>
            </TouchableOpacity>
          </Block>

          <Block center style={styles.feedsContainer}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Login')}>
              <Card center shadowDark style={styles.feedCard}>
                <Image style={styles.cardImage} source={require('../../assets/images/plant.jpg')} />
                <Text style={styles.title}>Profeller Garius</Text>
                <Block flex={false} row center space="between" style={styles.tags}>
                  <TouchableOpacity style={styles.tag}
                    onPress={() => alert('liked')}>
                    <Block flex={false} row center>
                      <Ionicons name="ios-pricetag"
                        size={14} color={theme.colors.gray2} />
                      <Text style={styles.tagText}>Blog</Text>
                    </Block>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.tag}
                    onPress={() => alert('liked')}>
                    <Block flex={false} row center>
                      <Ionicons name="ios-pricetag"
                        size={14} color={theme.colors.gray} />
                      <Text style={styles.tagText}>Hibiscus</Text>
                    </Block>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.tag}
                    onPress={() => alert('liked')}>
                    <Block flex={false} row center>
                      <Ionicons name="ios-pricetag"
                        size={14} color={theme.colors.gray} />
                      <Text style={styles.tagText}>Healthy</Text>
                    </Block>
                  </TouchableOpacity>
                </Block>
                <Text style={styles.description}>I want to add a border around my Text. I've done the following, I only want the border around the text, not the full width of the View...</Text>
                <Block flex={false} row center space="between" style={styles.foot}>
                  <TouchableOpacity style={styles.like}
                    onPress={() => alert('liked')}>
                    <Block flex={false} row center space="between">
                      <Ionicons name="ios-thumbs-up"
                        size={30} color={theme.colors.primary} />
                      <Text style={styles.likeText}>Like</Text>
                    </Block>
                  </TouchableOpacity>
                </Block>
              </Card>
            </TouchableOpacity>
          </Block>

          <Block center style={styles.feedsContainer}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Login')}>
              <Card center shadowDark style={styles.feedCard}>
                <Image style={styles.cardImage} source={require('../../assets/images/plant.jpg')} />
                <Text style={styles.title}>Profeller Garius</Text>
                <Block flex={false} row center space="between" style={styles.tags}>
                  <TouchableOpacity style={styles.tag}
                    onPress={() => alert('liked')}>
                    <Block flex={false} row center>
                      <Ionicons name="ios-pricetag"
                        size={14} color={theme.colors.gray2} />
                      <Text style={styles.tagText}>Blog</Text>
                    </Block>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.tag}
                    onPress={() => alert('liked')}>
                    <Block flex={false} row center>
                      <Ionicons name="ios-pricetag"
                        size={14} color={theme.colors.gray} />
                      <Text style={styles.tagText}>Hibiscus</Text>
                    </Block>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.tag}
                    onPress={() => alert('liked')}>
                    <Block flex={false} row center>
                      <Ionicons name="ios-pricetag"
                        size={14} color={theme.colors.gray} />
                      <Text style={styles.tagText}>Healthy</Text>
                    </Block>
                  </TouchableOpacity>
                </Block>
                <Text style={styles.description}>I want to add a border around my Text. I've done the following, I only want the border around the text, not the full width of the View...</Text>
                <Block flex={false} row center space="between" style={styles.foot}>
                  <TouchableOpacity style={styles.like}
                    onPress={() => alert('liked')}>
                    <Block flex={false} row center space="between">
                      <Ionicons name="ios-thumbs-up"
                        size={30} color={theme.colors.primary} />
                      <Text style={styles.likeText}>Like</Text>
                    </Block>
                  </TouchableOpacity>
                </Block>
              </Card>
            </TouchableOpacity>
          </Block>

        </ScrollView>
        {/* {this.renderFooter()} */}
      </Block>
    )
  }
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: theme.sizes.base * 2,
    paddingBottom: theme.sizes.base / 1.5,
    paddingTop: theme.sizes.base / 2,
  },
  explore: {
    marginHorizontal: theme.sizes.padding / 2,
    paddingHorizontal: 2,
  },
  container: {
    backgroundColor: theme.colors.white
  },
  feedsContainer: {
    marginVertical: 10,
  },
  feedCard: {
    width: (width - (theme.sizes.padding * 2.75)),
    height: 385,
    paddingVertical: 0,
    marginBottom: 30,
  },
  cardImage: {
    width: (width - (theme.sizes.padding * 2.75)),
    height: 160,
    borderTopLeftRadius: 2.22,
    borderTopRightRadius: 2.22,
    marginBottom: 15,
  },
  title: {
    alignSelf: 'flex-start',
    fontSize: 22,
    fontWeight: '600',
    color: theme.colors.black,
    paddingTop: 10,
  },
  description: {
    color: theme.colors.black,
    marginBottom: 30,
    fontSize: 15,
  },
  likeText: {
    marginLeft: 5,
    fontSize: 15,
  },
  like: {
    alignSelf: 'flex-start',
    paddingHorizontal: 16,
  },
  foot: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
    width: (width - (theme.sizes.padding * 2.75)),
    paddingTop: 4,
    position: 'absolute',
    bottom: 10,
  },
  tags: {
    width: (width - (theme.sizes.padding * 2.935)),
    justifyContent: 'flex-start',
    paddingHorizontal: 16,
    flexWrap: 'wrap',
    marginVertical: 8,
  },
  tag: {
    padding: 6,
    marginRight: 8,
    paddingLeft: 0,
  },
  tagText: {
    fontSize: 13,
    marginLeft: 3,
  }
})
export default Feeds;
