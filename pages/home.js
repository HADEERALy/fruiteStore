// Home screen
import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Dimensions,
  View,
  Text,
  Button,
  TouchableOpacity,
  ImageBackground,
  Image,
  TextInput,
} from 'react-native';
import Colors from '../assets/Colors';
import Onboarding from 'react-native-onboarding-swiper';
import Icon from 'react-native-vector-icons/MaterialIcons';
const Dots =({selected})=>{
    let backgroundColor;
    backgroundColor=selected? '#D95500':'#FFFFFF';

    return(
<View 
style={{
    width:10,
    height:10,
    marginHorizontal:3,
    borderRadius:50,
    borderWidth:1,
    borderColor:Colors.theme,
    backgroundColor

}}
/>
    );
}
const Bar=({... props}) =>(
  <View style={{backgroundColor:'#FFFFFF'}}

  {...props}
  >
      </View>

    );
const Done=({... props}) =>(
    <TouchableOpacity style={styles.getStartBtn}
 
    {...props}
    >
        <Text style={{color:Colors.Whitebackground}}>Get started</Text></TouchableOpacity>

      );
      const Next=({... props}) =>(
        <TouchableOpacity style={styles.buttonCircle}
        {...props}
        >
           <Icon
          name="keyboard-arrow-right"
          color="rgba(255, 255, 255, .9)"
          size={24}
        />
           </TouchableOpacity>
    
          );
          const Skip=({... props}) =>(
            <TouchableOpacity style={styles.buttonCircle}
            {...props}
            >
               <Icon
              name="keyboard-arrow-left"
              color="rgba(255, 255, 255, .9)"
              size={24}
            />
               </TouchableOpacity>
        
              );
export default class FirstPage extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
   
}
  }
 
  render() {
    
    return (
<Onboarding
DoneButtonComponent={Done}
NextButtonComponent={Next}
SkipButtonComponent={Skip}
bottomBarColor={Bar}
DotComponent={Dots}
onDone={()=> this.props.navigation.navigate("main")}
onSkip={()=> this.props.navigation.navigate("main")}

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
  getStartBtn: {
    width: 100,
    height: 44,
    backgroundColor: Colors.theme,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    color:'#FFFFFF'
  },
  buttonCircle: {
    margin:10,
    width: 44,
    height: 44,
    backgroundColor: '#D95500',
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
