import React, { useState } from "react"
import axios from "axios"
const Sequelize = require('sequelize');
const db = require('../models/database');

const User = require('../models/RegisterUser')

import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
    Dimensions,
} from "react-native"

const { width: WIDTH } = Dimensions.get("window")

const Register = (props) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")

    const { navigate } = props.navigation

    const register = async () => {
        // let res = await axios.post("/auth/register", {
        //     email,
        //     firstName,
        //     lastName,
        //     password
        // }).catch(err => console.log(123, err))
        // if (res) {
        //     navigate("Home")
        // } else {
        //     console.log("eerrrr")
        // }
        const req = {
            first_name: firstName,
            last_name: lastName,
            email,
            password
        }
        User.create(req)

    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Shift Trader</Text>
            <TextInput
                value={firstName}
                onChangeText={(value) => setFirstName(value)}
                style={styles.input}
                placeholder={"First Name"}
            />
            <TextInput
                value={lastName}
                onChangeText={(value) => setLastName(value)}
                style={styles.input}
                placeholder={"Last Name"}
            />
            <TextInput
                value={email}
                onChangeText={(value) => setEmail(value)}
                style={styles.input}
                placeholder={"Email"}
            />
            <TextInput
                value={password}
                onChangeText={(value) => setPassword(value)}
                style={styles.input}
                placeholder={"Password"}
                secureTextEntry={true}
            />

            <TouchableOpacity onPress={() => register()} style={styles.btn}>
                <Text style={{ color: "white" }}>Register</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log('poop')} style={styles.btn}>
                <Text style={{ color: "white" }}>Register</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Register

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "lightblue",
        alignItems: "center",
    },
    input: {
        width: WIDTH - 55,
        height: 45,
        borderRadius: 24,
        backgroundColor: "white",
        margin: 10,
        paddingLeft: 25,
        textAlign: "left",
    },
    title: {
        fontSize: 35,
        color: "white",
        marginTop: 30,
    },
    btn: {
        backgroundColor: "rebeccapurple",
        width: WIDTH - 250,
        height: 55,
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        borderRadius: 24,
        margin: 10,
    },
})
