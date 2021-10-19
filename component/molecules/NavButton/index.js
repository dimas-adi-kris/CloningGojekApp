import React, {useEffect} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

export default function NavButton(props) {
  const {name, icon, setActive} = props;
  // useEffect(() => {
  //   console.log(props.name);
  // }, [props]);

  return (
    <TouchableOpacity onPress={setActive} style={styles.test}>
      <Image style={{width: 26, height: 26}} source={icon} />
      <Text
        style={{
          fontSize: 10,
          color: '#545454',
          marginTop: 4,
          color: '#43AB4A',
        }}>
        {name}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  test: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
