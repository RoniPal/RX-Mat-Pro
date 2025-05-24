import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Button = ({title, onPress}) => {
  return (
    <Pressable style={styles.connectBtn} android_ripple={{color: 'gray'}} onPress={onPress}>
      <Text style={styles.connectBtnText}>{title}</Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
    
  connectBtn:{
    borderWidth: 1,
    paddingHorizontal:10,
    paddingVertical: 5,
    borderRadius: 10,
    borderColor: 'gray',
    alignItems: "center",
    justifyContent: "center",
  },
  connectBtnText:{
    fontWeight: 500,
    fontSize:16,
  },
});
