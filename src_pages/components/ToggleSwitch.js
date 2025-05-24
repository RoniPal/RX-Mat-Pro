import { Animated, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useRef, useState } from 'react'

const ToggleSwitch = ({inital = false, onToggle}) => {
    const [isOn, setIsOn] = useState(inital);
    const animation = useRef(new Animated.Value(inital ? 1: 0)).current

    const toggleSwitchBtn = () => {
        const toValue = isOn ? 0 : 1

        Animated.timing(animation, {
            toValue,
            duration: 300,
            useNativeDriver: false,
        }).start()

        setIsOn(!isOn);
        if(onToggle) onToggle(!isOn)
    }

    const interpolateTranslateX = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [2, 30], //Knob slide range
    })

    const interpolateBackgroundColor = animation.interpolate({
        inputRange: [0, 1],
        outputRange: ['#D1D5DB', 'black'], //gray to black
    })

  return (
    <Pressable onPress={toggleSwitchBtn}>
        <Animated.View style={[styles.toggleBackground, {backgroundColor: interpolateBackgroundColor}]}>
            <Animated.View style={[styles.knob, { transform: [{ translateX: interpolateTranslateX }] }]} />
        </Animated.View>
    </Pressable>
  )
}

export default ToggleSwitch

const styles = StyleSheet.create({
    toggleBackground: {
        width: 60,
        height: 30,
        borderRadius: 30,
        justifyContent: 'center',
        padding: 2,
    },
    knob: {
        width: 26,
        height: 26,
        borderRadius: 13,
        backgroundColor: '#fff'
    },
})