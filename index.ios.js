'use-strict';

import React from 'react';
import ReactNative from 'react-native';
import SearchPage from'./SearchPage';

var styles = ReactNative.StyleSheet.create({
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 80
  },
  container: {
    flex: 1
  }
});


class PropertyFinderApp extends React.Component {
  render() {
    return (
      <ReactNative.NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Property Finder',
          component: SearchPage,
        }}/>
    );
  }
}


ReactNative.AppRegistry.registerComponent('PropertyFinder', function() { return PropertyFinderApp });
