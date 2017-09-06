import React from 'react'
import { StyleSheet, View, AppRegistry } from 'react-native'
import { Provider } from 'react-redux'
import createStore from './src/reducers'
import ReduxNavigation from './src/Navigation/ReduxNavigation'

const store = createStore()


class ReduxExampleApp extends React.Component {
  render() {
    return (
      <Provider store={store}>   
          <ReduxNavigation />
      </Provider>
    );
  }
}



AppRegistry.registerComponent('finderios_redux', () => ReduxExampleApp);

export default ReduxExampleApp;

