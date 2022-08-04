/* eslint-disable prettier/prettier */
import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { colors } from '../utils/colors';
import { fontSizes, spacing } from '../utils/sizes';

export const FocusHistory = ({ history }) => {
    if (!history || !history.length) {
        return <Text style={styles.title}>
            We haven't focused on anything yet!
        </Text>;
    };
    const renderItem = ({ item }) => <Text>- {item}</Text>
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Things we've focused on:
            </Text>
            <FlatList data={history} renderItem={renderItem} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: spacing.md,
        flex: 1,
    },
    title: {
        color: colors.white,
        fontSize: fontSizes.md,
        padding: spacing.md,
        fontWeight: 'bold'
    },
    item: {
        color: colors.white,
        fontSize: fontSizes.md
    },
})