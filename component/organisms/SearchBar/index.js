import React from 'react';
import {StyleSheet, TextInput, View, Image} from 'react-native';
import {IcPromo, IcSearch} from '../../../assets';

const SearchBar = () => {
  return (
    <View style={{marginHorizontal: 17, flexDirection: 'row', paddingTop: 15}}>
      <View style={{position: 'relative', flex: 1}}>
        <TextInput
          placeholder="test placeholder"
          style={{
            borderWidth: 1,
            borderColor: '#e8e8e8',
            borderRadius: 25,
            height: 40,
            fontSize: 13,
            paddingLeft: 45,
            paddingRight: 14,
            backgroundColor: 'white',
            marginRight: 18,
          }}
        />
        <Image
          source={IcSearch}
          style={{
            position: 'absolute',
            top: 5,
            left: 12,
          }}
        />
      </View>
      <View
        style={{
          width: 35,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image source={IcPromo} />
      </View>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({});
