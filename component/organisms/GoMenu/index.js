import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {IcGoPay, IcMore, IcNearBy, IcPay, IcTopUp} from '../../../assets';

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
      <View
        style={{
          flexDirection: 'row',
          padding: 17,
          backgroundColor: '#2f65bd',
          borderBottomLeftRadius: 4,
          borderBottomRightRadius: 4,
        }}>
        <View style={styles.item}>
          <Image source={IcPay} />
          <Text style={styles.itemTextGopay}>Pay</Text>
        </View>
        <View style={styles.item}>
          <Image source={IcNearBy} />
          <Text style={styles.itemTextGopay}>NearBy</Text>
        </View>
        <View style={styles.item}>
          <Image source={IcTopUp} />
          <Text style={styles.itemTextGopay}>Top Up</Text>
        </View>
        <View style={styles.item}>
          <Image source={IcMore} />
          <Text style={styles.itemTextGopay}>More</Text>
        </View>
      </View>
    </View>
  );
};

export default GoMenu;

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
