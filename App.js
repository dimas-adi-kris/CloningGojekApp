import React from 'react';
import {StyleSheet, Text, View, Image, TextInput} from 'react-native';

import {BottomNavigation, GoFitur, GoMenu, SearchBar} from './component';

const App = () => {
  return (
    <React.Fragment>
      <View style={styles.container}>
        <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
          {/* search bar */}
          <SearchBar />
          {/* gopay */}
          <GoMenu />
          {/* Menu */}
          <GoFitur />
        </View>
        <BottomNavigation />
      </View>
    </React.Fragment>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {flex: 1},
});
