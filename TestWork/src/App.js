import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Router, Stack, Scene } from 'react-native-router-flux';

import FilmsListPage from './components/FilmsListPage/FilmsListPage'

import CommentPage from'./components/CommentsPage/CommentsPage'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  render() {
    return (
        <Router>
            <Stack key="root">
                <Scene key="filmsList" component={FilmsListPage} title="Films"/>
                <Scene key="comments" component={CommentPage} title="Comments"/>
            </Stack>
        </Router>
      // <View style={styles.container}>
      //   <FilmsListPage/>
      // </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ccc',
  },
});
