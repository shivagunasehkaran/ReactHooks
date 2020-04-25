import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

const HookRedux = () => {

    const counter = useSelector(state => state.counter);
    const dispatch = useDispatch();

    return (
        <View>
            <Text style={{ fontSize: 30, textAlign: 'center' }}>{"Use Redux Hook"}</Text>
            <Text style={{ fontSize: 20, textAlign: 'left', margin: 30 }}>{"Increment and Decrement Growth"}: {counter}</Text>
            <TouchableOpacity onPress={() => dispatch({ type: "INCREMENT" })}>
                <View style={{ backgroundColor: 'green', height: 50, marginTop: 100, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 20 }}>{'Increase Growth'}</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => dispatch({ type: "DECREMENT" })}>
                <View style={{ backgroundColor: 'green', height: 50, marginTop: 100, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 20 }}>{'Decrement Growth'}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
};

export default HookRedux;