import React, { Component } from 'react';
import { StyleSheet, Image, ScrollView, Switch, TextInput, TouchableOpacity } from 'react-native';
import { Block, Text, Button, Divider, Input } from '../components';
import { theme, mocks } from '../constants';

export class Settings extends Component {
  state = {
    budget: 8500,
    monthly: 17000,
    notifications: true,
    newsletter: false,
    editing: null,
    profile: {}
  }

  componentDidMount() {
    this.setState({ profile: this.props.profile })
  }

  toggleEdit(name) {
    const { editing } = this.state;
    this.setState({ editing: !editing ? name : null });
  }

  renderEdit(name) {
    const { profile, editing } = this.state;
    if (editing === name) {
      return (
        <TextInput
          defaultValue={profile[name]}
          onChangeText={text => this.handleEdit([name], text)}
        />
      )
    }
    return <Text bold>{profile[name]}</Text>
  }

  handleEdit(name, text) {
    const { profile } = this.state;
    profile[name] = text;
    this.setState({ profile });
  }

  render() {
    const { profile } = this.props;
    const { editing } = this.state;
    return (
      <Block>
        <Block flex={false} row center space="between" style={styles.header}>
          <Text h1 bold>Settings</Text>
          <Button>
            <Image source={profile.avatar} style={styles.avatar} />
          </Button>
        </Block>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Block style={styles.inputs}>
            <Block row space="between" margin={[10, 0]} style={styles.inputRow}>
              <Block>
                <Text gray2 style={{ marginBottom: 10 }}>Username</Text>
                {this.renderEdit('username')}
              </Block>
              <Text medium secondary onPress={() => this.toggleEdit('username')}>
                {editing === 'username' ? 'Save' : 'Edit'}
              </Text>
            </Block>
            <Block row space="between" margin={[10, 0]} style={styles.inputRow}>
              <Block>
                <Text gray2 style={{ marginBottom: 10 }}>Location</Text>
                {this.renderEdit('location')}
              </Block>
              <Text medium secondary onPress={() => this.toggleEdit('location')}>
                {editing === 'location' ? 'Save' : 'Edit'}
              </Text>
            </Block>
            <Block row space="between" margin={[10, 0]} style={styles.inputRow}>
              <Block>
                <Text gray2 style={{ marginBottom: 10 }}>E-mail</Text>
                <Text bold>{profile.email}</Text>
              </Block>
            </Block>
          </Block>
          <Divider margin={[theme.sizes.base, theme.sizes.base * 2]} />
          <Block style={styles.sliders}>
            <Block>
              <Text gray2>Budget</Text>
              <Text caption gray2 right>$1,000</Text>
            </Block>
            <Block>
              <Text gray2>Monthly Cap</Text>
              <Text caption gray2 right>$5,000</Text>
            </Block>
          </Block>
          <Divider />

          <Block style={styles.toggles}>
            <Block row center space="between" style={{ marginBottom: theme.sizes.base * 1.25 }}>
              <Text gray2>Notifications</Text>
              <Switch
                value={this.state.notifications}
                onValueChange={value => this.setState({ notifications: value })}
              />
            </Block>

            <Block row center space="between" style={{ marginBottom: theme.sizes.base * 2 }}>
              <Text gray2>Newsletter</Text>
              <Switch
                value={this.state.newsletter}
                onValueChange={value => this.setState({ newsletter: value })}
              />
            </Block>
          </Block>
        </ScrollView>
      </Block>
    )
  }
}

Settings.defaultProps = {
  profile: mocks.profile,
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: theme.sizes.base * 2,
  },
  avatar: {
    height: theme.sizes.base * 2.2,
    width: theme.sizes.base * 2.2,
  },
  inputs: {
    marginTop: theme.sizes.base * 0.7,
    paddingHorizontal: theme.sizes.base * 2,
  },
  inputRow: {
    alignItems: 'flex-end'
  },
  sliders: {
    marginTop: theme.sizes.base * 0.7,
    paddingHorizontal: theme.sizes.base * 2,
  },
  thumb: {
    width: theme.sizes.base,
    height: theme.sizes.base,
    borderRadius: theme.sizes.base,
    borderColor: 'white',
    borderWidth: 3,
    backgroundColor: theme.colors.secondary,
  },
  toggles: {
    paddingHorizontal: theme.sizes.base * 2,
  }
});

export default Settings;
