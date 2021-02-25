import React, { useState } from 'react';
import { Text, TextInput, View ,StyleSheet,Button,TouchableOpacity} from 'react-native';

const PizzaTranslator = () => {
  const [text, setText] = useState('');
  const [newText,setNewText] = useState("");
  const clickHandler=() =>
  {
   setNewText(text)
  }
  return (
    <View style={{padding: 10}}
    >
      <TextInput
        style={{
          height: 40,
          borderBottomWidth:1,
          borderBottomColor:'#000',
        }}
        placeholder="Enter your name"
        on
       // onChangeText={text => setText(text)}
        autoCapitalize='words'
        onChangeText={text => setText(text)}
      />
      <View style={styles.buttonContainer}>
        <Button
          title='update my name'
          onPress={clickHandler}
        />
      </View>
      <View style={styles.body}> 
          <Text>hello this is {newText}</Text>
      </View>
    </View>
  );
}
const NavigationButton=(props)=>{
  console.log(props.navigation)
  return(
      <View>
        <Text>Choose a screen</Text>
        <Button 
          onPress={()=>props.navigation.navigate("Components")}
          title="got to Component Screen"
        />
         <Button
          onPress={()=>props.navigation.navigate("List")}
          title ="go to List screen"
        />
      
        <Button
          onPress={()=>props.navigation.navigate("Image")}
          title ="go to image screen"
        />
        <Button
          onPress={()=>props.navigation.navigate("Counter")}
          title ="go to Counter screen"
        />
          <Button
          onPress={()=>props.navigation.navigate("Color")}
          title ="go to Color screen"
        />
          <Button
          onPress={()=>props.navigation.navigate("Square")}
          title ="go to Square screen"
        />
      
      </View>
  );
}
const styles=StyleSheet.create(
  {
    body:{
        backgroundColor:'#ff2',
        padding:10
    },
    buttonContainer:{
        marginTop:20,
        backgroundColor:'#fff'
    }
  }
)

export default NavigationButton;