/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { RoundedButton } from '../components/RoundedButton';

export const Timing = ({onChangeTime}) => {
    return (
        <>
        <View style={styles.timingButton}>
            <RoundedButton title="10" onPress={()=>onChangeTime(10)} size={55} />
        </View>
        <View style={styles.timingButton}>
            <RoundedButton title="15" onPress={()=>onChangeTime(15)} size={65} />
        </View>
        <View style={styles.timingButton}>
            <RoundedButton title="20" onPress={()=>onChangeTime(20)} size={75} />
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    timingButton: {
        flex: 1,
        alignItems: 'center',
    },
});