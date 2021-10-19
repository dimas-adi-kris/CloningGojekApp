import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {
  IcAccount,
  IcAccountActive,
  IcHelp,
  IcHelpActive,
  IcHome,
  IcHomeActive,
  IcInbox,
  IcInboxActive,
  IcOrder,
  IcOrderActive,
} from '../../../assets';
import {NavButton} from '../../molecules';
/**
 * lalalalululu
 */
export default function BottomNavigation() {
  const [activeNav, setActiveNav] = useState('Home');
  useEffect(() => {
    console.log(activeNav);
  }, [activeNav]);
  return (
    <View style={{height: 54, flexDirection: 'row'}}>
      <NavButton
        name="Home"
        icon={activeNav === 'Home' ? IcHomeActive : IcHome}
        setActive={() => {
          console.log('test');
          setActiveNav('Home');
        }}
      />
      <NavButton
        name="Orders"
        icon={activeNav === 'Orders' ? IcOrderActive : IcOrder}
        setActive={() => {
          setActiveNav('Orders');
        }}
      />
      <NavButton
        name="Help"
        icon={activeNav === 'Help' ? IcHelpActive : IcHelp}
        setActive={() => {
          setActiveNav('Help');
        }}
      />
      <NavButton
        name="Inbox"
        icon={activeNav === 'Inbox' ? IcInboxActive : IcInbox}
        setActive={() => {
          setActiveNav('Inbox');
        }}
      />
      <NavButton
        name="Account"
        icon={activeNav === 'Account' ? IcAccountActive : IcAccount}
        setActive={() => {
          setActiveNav('Account');
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  test: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
