import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Button, TextInput } from 'react-native';
import useFetch from './useFetchHook';

const HookState = () => {
    const [growth, setGrowth] = useState(0);
    const [name, setName] = useState('Shiva');

    // API call 
    const { data, loading } = useFetch(`http://numbersapi.com/${growth}/trivia`);

    return (
        <View>
            <Text style={{ fontSize: 30, textAlign: 'center' }}>{"Use State"}</Text>
            <TextInput
                style={{
                    height: 40,
                    margin: 20,
                    borderColor: '#6E5BAA',
                    borderWidth: 1,
                    borderRadius: 2
                }}
                placeholder={'Name'}
                value={name}
                onChangeText={(value) => setName(value)} />
            <Text style={{ fontSize: 20, textAlign: 'left', margin: 30 }}>{"Growth"} : {growth}</Text>
            <Text style={{ fontSize: 20, textAlign: 'left', margin: 30 }}>{"Name"} : {name}</Text>
            <Text style={{ fontSize: 20, textAlign: 'left', margin: 30 }}>{(loading ? 'loading ...' : data)}</Text>
            <TouchableOpacity onPress={() => setGrowth(growth => growth + 1)}>
                <View style={{ backgroundColor: 'green', height: 50, marginTop: 100, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 20 }}>{'Increase Growth'}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
};

export default HookState;