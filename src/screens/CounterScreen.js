import React from'react'
import {Text,View,Image,StyleSheet, Button}from 'react-native'
import { useState } from 'react/cjs/react.development'
const CounterScreen=()=>{
    const [counter, setCounter]=useState(0);
    return <View>
            <Button
              title="Increase"
              onPress={()=>setCounter(counter+1)}
            />
            <Button
                title="Decrease"
                onPress={()=>setCounter(counter-1)}
            />
            <Text>Count is {counter}</Text>
            </View>
}
const styles=StyleSheet.create({

})
export default CounterScreen;