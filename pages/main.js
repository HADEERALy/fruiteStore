// Home screen
import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Dimensions,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
  TextInput,
} from 'react-native';
import Colors from '../assets/Colors';

export default class FirstPage extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
   
}
  }
  render() {
    
    return (
<View>
<Text> welcome to main page</Text>
<TouchableOpacity onPress={()=> this.props.navigation.navigate("home")}
>
     <Text>return</Text>
</TouchableOpacity>
</View>


    );
  }
}
const styles = StyleSheet.create({
  ScrollView:{

  },

});
