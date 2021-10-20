import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {IcGoPay, IcMore, IcNearBy, IcPay, IcTopUp} from '../../../assets';
import {GoMenuItem} from '../../molecules';

const GoMenu = () => {
  return (
    <View style={{marginHorizontal: 17, marginTop: 8}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          backgroundColor: '#2c5fb8',
          borderTopLeftRadius: 4,
          borderTopRightRadius: 4,
          padding: 14,
        }}>
        <Image source={IcGoPay} />
        <Text style={{color: 'white', fontSize: 17, fontWeight: 'bold'}}>
          Rp. 50.000
        </Text>
      </View>
      <View style={styles.goMenu}>
        <GoMenuItem key={1} name="Pay" icon={IcPay} />
        <GoMenuItem key={2} name="NearBy" icon={IcNearBy} />
        <GoMenuItem key={3} name="Top Up" icon={IcTopUp} />
        <GoMenuItem key={4} name="More" icon={IcMore} />
      </View>
    </View>
  );
};

export default GoMenu;

const styles = StyleSheet.create({
  goMenu: {
    flexDirection: 'row',
    padding: 17,
    backgroundColor: '#2f65bd',
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
  },
});
