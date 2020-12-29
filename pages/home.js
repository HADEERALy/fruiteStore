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
import Onboarding from 'react-native-onboarding-swiper';

export default class FirstPage extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
   
}
  }
  render() {
    
    return (
<Onboarding
onDone={()=> this.props.navigation.navigate("main")}
  pages={[

    {
      backgroundColor: '#fff',
      image: <Image source={require('../assets/imgs/slider1.png')} />,
      title: 'Lorem ipsum',
      subtitle: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua',
    },
    {
        backgroundColor: '#fff',
        image: <Image source={require('../assets/imgs/slider2.png')} />,
        title: 'Lorem ipsum',
        subtitle: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua',
      },
      {
        backgroundColor: '#fff',
        image: <Image source={require('../assets/imgs/slider3.png')} />,
        title: 'Lorem ipsum',
        subtitle: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua',
      },
      ]}
/>


    );
  }
}
const styles = StyleSheet.create({
  ScrollView:{

  },

});
