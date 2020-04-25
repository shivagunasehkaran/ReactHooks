import React, { useState, useEffect, useMemo } from 'react';
import { View, Text, TouchableOpacity, Button } from 'react-native';
import Child from '../components/Child';

const HookMemo = () => {
    const [increment, setIncrement] = useState(0);

    // you can make condition like when "increment" updates Memo will increse
    const useMemoz = useMemo(() => {
        return (
            <Child />
        )
    }, [increment]); // pass [] will act as normal Memo

    handleGrowth = () => {
        setIncrement(increment + 1);
    };

    return (
        <View>
            <Text style={{ fontSize: 30, textAlign: 'center' }}>{"Use Memo"}</Text>
            <Text style={{ fontSize: 20, textAlign: 'left', margin: 30 }}>{"Normal Growth"} : {increment}</Text>
            <Child />
            <Text style={{ fontSize: 20, textAlign: 'left', margin: 30 }}>{"Memo Growth"} : {useMemoz}</Text>
            <TouchableOpacity onPress={this.handleGrowth}>
                <View style={{ backgroundColor: 'green', height: 50, marginTop: 100, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 20 }}>{'Increase Growth'}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
};

export default HookMemo;