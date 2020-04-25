import React, { useEffect } from 'react';
import { Text } from 'react-native';

let increment = 0;
const Child = () => {
    useEffect(() => {
        increment++;
    })

    return (
        <Text style={{ fontSize: 20, textAlign: 'left', margin: 30 }}>{'Increment'}: {increment}</Text>
    )
};

export default Child;