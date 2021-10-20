import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const GoMenuItem = props => {
  const {name, icon} = props;
  return (
    <View style={styles.item}>
      <Image source={icon} />
      <Text style={styles.itemTextGopay}>{name}</Text>
    </View>
  );
};

export default GoMenuItem;

const styles = StyleSheet.create({
  item: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemTextGopay: {
    color: '#fff',
    fontSize: 13,
    fontWeight: 'bold',
  },
});
