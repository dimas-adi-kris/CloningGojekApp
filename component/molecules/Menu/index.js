import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {
  IcGoBlueBird,
  IcGoCar,
  IcGoDeals,
  IcGoFood,
  IcGoPulsa,
  IcGoRide,
  IcGoSend,
  IcMore,
} from '../../../assets';

const Menu = props => {
  const {name, icon} = props;
  // const [iconMenu, setIconMenu] = useState('');

  const IconMenu = () => {
    switch (icon) {
      case 'GO-RIDE':
        return <Image source={IcGoRide} />;

      case 'GO-CAR':
        return <Image source={IcGoCar} />;

      case 'GO-BLUEBIRD':
        return <Image source={IcGoBlueBird} />;

      case 'GO-SEND':
        return <Image source={IcGoSend} />;

      case 'GO-DEALS':
        return <Image source={IcGoDeals} />;

      case 'GO-PULSA':
        return <Image source={IcGoPulsa} />;

      case 'GO-FOOD':
        return <Image source={IcGoFood} />;

      case 'MORE':
        return <Image source={IcMore} />;

      default:
        return <Image source={IcGoRide} />;
    }
  };

  return (
    <View style={styles.item}>
      <View style={styles.goimage}>
        <IconMenu />
      </View>
      <Text style={styles.text}>{name}</Text>
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  item: {
    alignItems: 'center',
    width: '25%',
    marginBottom: 10,
  },
  goimage: {
    width: 58,
    height: 58,
    borderRadius: 19,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#e8e8e8',
    marginBottom: 5,
  },
  text: {fontWeight: 'bold', fontSize: 11},
});
