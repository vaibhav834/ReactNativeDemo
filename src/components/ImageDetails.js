import React from'react'
import {Text,View,Image,StyleSheet}from 'react-native'
const ImageDetail=(props)=>{
    return <View>
            <Image
                source={props.imgSrc}
            />
            <Text>Hello this is image of {props.imageName} </Text>
         </View>;
}
const styles=StyleSheet.create({
    
})
export default ImageDetail;