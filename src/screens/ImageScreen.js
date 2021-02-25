import React from'react'
import {Text,View,Image,StyleSheet}from 'react-native'
import ImageDetail from '../components/ImageDetails'
const ImageScreen=()=>{
    return <View>
                <ImageDetail imageName="vaibhav" imgSrc={require("../../assets/forest.jpg")}/>
                <ImageDetail imageName="shubham" imgSrc={require("../../assets/forest.jpg")}/>
                <ImageDetail imageName="jivesh" imgSrc={require("../../assets/mountain.jpg")}/>
            </View>
}
const styles=StyleSheet.create({

})
export default ImageScreen;