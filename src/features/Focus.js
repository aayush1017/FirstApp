/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../utils/colors';
import { TextInput } from 'react-native-paper';
import { RoundedButton } from '../components/RoundedButton';
import { spacing } from '../utils/sizes';

export const Focus = ({addSubject}) => {
    const [subject, setSubject] = useState(null);
    // console.log(subject)
    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput style={styles.textInput} onChangeText={setSubject} label="What do you want to Focus on?" />
                <View style={styles.button}>
                    <RoundedButton title="+" size={50} onPress={() => addSubject(subject)} />
                </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        // flex: 0.2,
    },
    text: {
        color: colors.white,
        fontSize: 50,
        padding: 30,
    },
    button: {
        justifyContent: 'center',
    },
    inputContainer: {
        padding: spacing.lg,
        justifyContent: 'flex-start',
        flexDirection: 'row',
    },
    textInput: {
        flex: 1,
        marginRight: spacing.sm
    }
});
