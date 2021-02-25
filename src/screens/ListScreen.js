import React from 'react'
import {Text,View,StyleSheet,FlatList} from 'react-native'
const ListScreen=()=>{
    let list=[
        {name :"Friend 1"},
        {name :"Friend 2"},
        {name :"Friend 3"},
        {name :"Friend 4"},
        {name :"Friend 5"},
        {name :"Friend 6"},
        {name :"Friend 7"},
    ]
    return (
        <FlatList
            horizontal//horizontal={true} also works
            showsHorizontalScrollIndicator={false}
            keyExtractor={element=>element.name}
            data={list}
            renderItem={element=>{
                return <Text style={styles.textStyle}
                >this is first{element.item.name}</Text>
            }}
        />
    )
}
const styles=StyleSheet.create({
    textStyle:{
        padding:10,
        marginLeft:10,
        backgroundColor:'#e6f7ef',
        marginVertical:50
    }
})
export default ListScreen