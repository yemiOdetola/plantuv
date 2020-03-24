import React from 'react';
import { StyleSheet, ScrollView, Image, TouchableOpacity, Dimensions } from 'react-native';
import { Card, Block, Text } from '../components';
import { theme, mocks } from '../constants';
import { Ionicons } from '@expo/vector-icons';


export default class Feed extends React.Component {
  state = {
    activeTab: 'Medicinal'
  }

  handleTab = (tab) => {
    return this.setState({ activeTab: tab })
  }

  renderTabs = (tab) => {
    const { activeTab } = this.state;
    const isActive = activeTab === tab;
    return (
      <TouchableOpacity
        key={`tab-${tab}`}
        style={[
          styles.tab,
          isActive ? styles.activeTab : null
        ]}
        onPress={() => this.handleTab(tab)}
      >
        <Text size={16} medium black2={!isActive} secondary={isActive}>
          {tab}
        </Text>
      </TouchableOpacity>
    )
  }


  render() {
    const { product, proposed } = this.props;
    const tabs = ['Medicinal', 'Aesthetic', 'Propositions'];
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image style={styles.featuredImg} source={require('../../assets/images/plant.jpg')} />
        <Block style={styles.product}>
          <Text h2 bold>{product.name}</Text>
          <Block flex={false} row margin={[theme.sizes.base, 0]}>
            {product.tags.map(tag => (
              <Text key={`tag-${tag}`} caption gray style={styles.tag}>
                {tag}
              </Text>
            ))}
          </Block>
          <Text gray light height={22}>{product.description}</Text>
          <Block flex={false} row style={styles.tabs}>
            {tabs.map(tab => this.renderTabs(tab))}
          </Block>
          <Card padding shadowDark style={styles.propCard}>
            <TouchableOpacity style={styles.by}
              onPress={() => alert('Take me to the profile')}>
              <Image style={styles.byImg} source={require('../../assets/images/userA.png')} />
              <Text>Omolola Famodun</Text>
            </TouchableOpacity>
            <Text style={styles.proposition}>"Scent leave aids digestion. If you are the type of person that eats late at night, it is likely you will experience indigestion and bloating. Scent leave has immense health beneﬁts such as easy bowel evacuation and weight management"...</Text>
            <Block style={styles.votes}>
              <TouchableOpacity style={styles.vote}
                onPress={() => alert('liked')}>
                <Ionicons name="md-arrow-round-down"
                  size={20} color={theme.colors.accent} />
                <Text style={[styles.voteText, styles.downvote]}>downvotes(2)</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.vote}
                onPress={() => alert('liked')}>
                <Ionicons name="md-arrow-round-up"
                  size={20} color={theme.colors.primary} />
                <Text style={[styles.voteText, styles.upvote]}>upvotes(13)</Text>
              </TouchableOpacity>
            </Block>
          </Card>
        </Block>
      </ScrollView>
    )
  }
}

Feed.defaultProps = {
  product: mocks.products[0],
  proposed: mocks.feedProposed
}

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  product: {
    paddingHorizontal: theme.sizes.base * 2,
    paddingVertical: theme.sizes.padding,
    backgroundColor: theme.colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    position: 'relative',
    bottom: 20,
  },
  tag: {
    borderColor: theme.colors.gray2,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: theme.sizes.base,
    paddingHorizontal: theme.sizes.base,
    paddingVertical: theme.sizes.base / 2.5,
    marginRight: theme.sizes.base * 0.625,
  },
  featuredImg: {
    maxWidth: WIDTH,
    width: WIDTH,
    alignSelf: 'center',
    maxHeight: HEIGHT - 400,
  },
  tabs: {
    borderBottomColor: theme.colors.gray2,
    borderBottomWidth: StyleSheet.hairLineWidth,
    marginVertical: theme.sizes.base,
    marginHorizontal: theme.sizes.base,
  },
  tab: {
    marginRight: theme.sizes.base * 2,
    paddingBottom: theme.sizes.base / 2,
  },
  activeTab: {
    borderBottomColor: theme.colors.secondary,
    borderBottomWidth: 2,
  },
  propCard: {
    paddingVertical: 5,
    maxHeight: 275,
  },
  by: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
    marginVertical: 5,
  },
  byImg: {
    width: 30,
    height: 30,
    borderRadius: 30,
    marginRight: 10,
  },
  proposition: {
    color: theme.colors.black,
    fontSize: 15,
    fontWeight: '300',
    lineHeight: 24,
  },
  votes: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingVertical: 5,
    marginTop: 16,
    maxHeight: 50,
  },
  vote: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    borderRadius: 10,
    paddingHorizontal: 5,
    marginLeft: 12,
  },
  upvote: {
    color: theme.colors.primary,
  },
  downvote: {
    color: theme.colors.accent,
  },
  voteText: {
    marginLeft: 3,
    fontWeight: '500',
    fontSize: 14,
  }
});


// shadowColor: "#000",
//   shadowOffset: {
//   width: 0,
//     height: 1,
// },
// shadowOpacity: 0.22,
//   shadowRadius: 2.22,

//     elevation: 3,