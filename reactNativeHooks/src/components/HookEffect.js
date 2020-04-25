import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Button } from 'react-native';

let born = false;
const HookEffect = () => {
    const [growth, setGrowth] = useState(0);
    const [mature, setMature] = useState(false);

    useEffect(() => {
        console.log("mounted");
    }, []);

    useEffect(() => {
        if (born) {
            console.log("updated");
        } else {
            born = true;
        }

        // set matured level
        if (growth > 70) {
            setMature(true);
        }
    });

    handleGrowth = () => {
        setGrowth(growth + 10);
    };

    return (
        <View>
            <Text style={{ fontSize: 30, textAlign: 'center' }}>{"Use Effect"}</Text>
            <Text style={{ fontSize: 20, textAlign: 'left', margin: 30 }}>{"Growth"} : {growth}</Text>
            {
                mature && (
                    <Text style={{ fontSize: 20, textAlign: 'center', color: 'red' }}>{'Mature Level succeeded'}</Text>
                )
            }
            <TouchableOpacity onPress={this.handleGrowth}>
                <View style={{ backgroundColor: 'green', height: 50, marginTop: 100, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 20 }}>{'Increase Growth'}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
};

export default HookEffect;