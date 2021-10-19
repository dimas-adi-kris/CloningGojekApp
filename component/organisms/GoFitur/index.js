import React, {useState} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Menu} from '../../molecules';
import {menuJson} from '../../../assets';

const GoFitur = () => {
  return (
    <View style={{flexDirection: 'row', flexWrap: 'wrap', marginTop: 10}}>
      <View style={styles.gomenu}>
        {menuJson.data.map((item, index) => (
          <Menu key={index} icon={item.name} name={item.name} />
        ))}
      </View>
    </View>
  );
};

export default GoFitur;

const styles = StyleSheet.create({
  gomenu: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
    marginBottom: 10,
    flexWrap: 'wrap',
  },
});
