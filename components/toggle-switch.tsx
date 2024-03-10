import * as React from "react";
import { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Appbar } from "react-native-paper";


const ToggleSwitch = ({toggleAction}: {toggleAction:Function}) => {
    const [isOn, setIsOn] = useState(true);
    function toggleSwitch() {
        setIsOn(isOn => !isOn);
        toggleAction()
    }
    return (
        <View>
            <TouchableOpacity
                style={[
                    styles.outter,
                    isOn
                      ? { justifyContent: 'flex-end', backgroundColor: 'purple' }
                      : { justifyContent: 'flex-start', backgroundColor: 'gray' }
                ]}
                activeOpacity={1}
                onPress={toggleSwitch}>
                
                <View style={styles.inner}/>
            </TouchableOpacity>
        </View>
    );
}
  

const styles = StyleSheet.create({
    inner: {
        width: 26,
        height: 26,
        backgroundColor: 'white',
        borderRadius: 15,
        elevation: 8,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.15,
        shadowRadius: 2,
    },
    outter: {
        width: 60,
        height: 32,
        backgroundColor: 'grey',
        borderRadius: 15,
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 2
    },
    
});

export default ToggleSwitch;
