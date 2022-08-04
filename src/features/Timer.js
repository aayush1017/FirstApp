/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { StyleSheet, Text, View, Vibration } from 'react-native';
import { ProgressBar, MD3Colors } from 'react-native-paper';
import { Countdown } from '../components/Countdown';
import { RoundedButton } from '../components/RoundedButton';
import { colors } from '../utils/colors';
import { spacing } from '../utils/sizes';
import { Timing } from './Timing';

const ONE_SECOND_IN_MS = 1000;

const PATTERN = [
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
];

export const Timer = ({ focusSubject, clearSubject, onTimerEnd }) => {
    const [isStarted, setIsStarted] = useState(false)
    const [progress, setProgress] = useState(1)
    const [minutes, setMinutes] = useState(0.1)

    const onEnd = (reset) => {
        // Vibration.vibrate(PATTERN)
        setIsStarted(false)
        setProgress(1)
        reset()
        onTimerEnd(focusSubject)
    }
    return (
        <View style={styles.container}>
            <View style={styles.countdown}>
                <Countdown minutes={minutes} isPaused={!isStarted} onEnd={onEnd} onProgress={setProgress} />
                <View style={{ paddingTop: spacing.xxl }}>
                    <Text style={styles.title}>Focusing On: </Text>
                    <Text style={styles.task}>{focusSubject}</Text>
                </View>
            </View>
            <View style={{ paddingTop: spacing.sm }}>
                <ProgressBar progress={progress} color={colors.progressBar} style={{ height: spacing.sm }} />
            </View>
            <View style={styles.timingWrapper}>
                <Timing onChangeTime={setMinutes} />
            </View>
            <View style={styles.buttonWrapper}>
                {!isStarted && <RoundedButton onPress={() => setIsStarted(true)} title="start" />}
                {isStarted && <RoundedButton onPress={() => setIsStarted(false)} title="pause" />}
            </View>
            <View style={styles.clearSubjectWrapper}>
                <RoundedButton size={50} title="-" onPress={clearSubject} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        color: colors.white,
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 30,
    },
    task: {
        color: colors.white,
        textAlign: 'center',
    },
    countdown: {
        flex: 0.5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonWrapper: {
        flex: 0.3,
        padding: spacing.md,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    timingWrapper: {
        flex: 0.1,
        paddingTop: spacing.xxl,
        flexDirection: 'row',
        alignItems: 'center'
    },
    clearSubjectWrapper: {
        flexDirection: 'row',
        justifyContent: 'center'
    }
});