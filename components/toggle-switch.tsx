import * as React from "react";
import { useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { useTheme } from "react-native-paper";


const ToggleSwitch = ({toggleAction, value}: {toggleAction:Function, value: boolean}) => {
    const [isOn, setIsOn] = useState(value);
    const theme = useTheme();

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
              ? {
                  justifyContent: "flex-end",
                  backgroundColor: theme.colors.primary,
                }
              : {
                  justifyContent: "flex-start",
                  backgroundColor: theme.colors.inverseOnSurface,
                },
          ]}
          activeOpacity={1}
          onPress={toggleSwitch}
        >
          <View style={styles.inner} />
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
        paddingHorizontal: 3,
    },
    
});

export default ToggleSwitch;
