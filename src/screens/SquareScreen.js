import React,{useState} from 'react'
import {Text,View,StyleSheet} from 'react-native'
import ColorCounter from '../components/ColorCounter'
const COLOR_INCREMENT=10;
const SquareScreen=()=>{
    const [red,setRed]=useState(0)
    const [blue,setBlue]=useState(0)
    const [green,setGreen]=useState(0)
    return <View>
        <ColorCounter color="Red" onIncrease={()=>setRed(COLOR_INCREMENT+1)} onDecrease={()=>setRed(COLOR_INCREMENT-1)}/>
        <ColorCounter color="Blue" onIncrease={()=>setBlue(COLOR_INCREMENT+1)} onDecrease={()=>setBlue(COLOR_INCREMENT-1)}/>
        <ColorCounter color="Green" onIncrease={()=>setGreen(COLOR_INCREMENT+1)} onDecrease={()=>setGreen(COLOR_INCREMENT-1)}/>
        <View
        style={{backgroundColor:`rgb(${red},${blue},${green})`,height:100,width:100}}
        />
    </View>
}
const styles=StyleSheet.create({

});
export default SquareScreen;