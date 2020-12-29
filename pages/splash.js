import React, { Component } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import Colors from '../assets/Colors';




export default class splash extends Component {


    componentDidMount() {


        setTimeout(() => {

                // console.log("id in setTimeOut is : ", auth().currentUser.uid)
                this.props.navigation.navigate("home")
           
        },
            2000
        )
    }

    render() {
        return (

            <View style={{ flex: 1, backgroundColor: Colors.theme, justifyContent: "center", alignItems: "center" }}>

                <Image
                    source={require("../assets/imgs/logo.png")} />


            </View >
        )
    }

}



const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1, justifyContent: "center", alignItems: "center"
    },
    inputContainer: {
        width: "95%",
        alignSelf: "center",
        borderColor: "#f2b91b"
    },
    register: {
        height: 55,
        width: "80%",
        backgroundColor: "#f2b91b",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 60
    },
    specialButtons: {
        height: "60%",
        width: "28%",
        borderColor: "white",
        borderWidth: 2,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 27

    }


});