import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, KeyboardAvoidingView, Alert } from 'react-native';
import InputWithShadow from '../../components/InputWithShadow';
import { styles } from './style';
import { IMAGES } from '../../resources/Images';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigation = useNavigation(); // Get the navigation prop

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email regex
        return regex.test(email);
    };

    const login = () => {
        if (!validateEmail(email)) {
            Alert.alert('Please enter a valid email address.')
            setError('Please enter a valid email address.');
            return;
        }
        axios.post('http://3.7.81.243/projects/plie-api/public/api/login', {
            email: email,
            password: password,
        })
            .then(response => {
                // Handle successful login
                console.log('Login successful:', response.data);
                // Navigate to the home screen or wherever you want
                navigation.navigate('Home');
            })
            .catch(error => {
                console.error('Login error:', error);
                setError('Login failed. Please check your credentials.');
            });

    }

    return (
        <KeyboardAvoidingView style={styles.container}>
            <View style={styles.header}>
                <View style={{}}>
                    <Text style={styles.headerText}>Plie</Text>
                </View>
                <View style={{}}>
                    <Image source={require('../../icon/icon.png')} style={styles.icon} />
                </View>
            </View>
            <View style={styles.header1}>
                <View style={styles.body}>
                    <Text style={styles.labelStyle}>
                        Email
                    </Text>
                    <InputWithShadow
                        value={email} onChangeText={setEmail}
                        placeholder="Username" enterKeyHint="email@email.com" />
                    <Text style={styles.labelStyle}>
                        Password
                    </Text>
                    <InputWithShadow
                        value={password} onChangeText={setPassword}
                        placeholder="Password" enterKeyHint="Password" secureTextEntry />

                </View>
                <View style={styles.fPass}>
                    <Text style={{ color: "#828282", fontSize: 14 }}>Forgot Password?</Text>
                </View>
                <TouchableOpacity style={styles.button} onPress={login} >
                    <Text style={styles.buttonText}>Sign In</Text>
                </TouchableOpacity>
                <View style={styles.NotMember}>
                    <Text style={{ color: "#000000", fontSize: 14, fontWeight: 500 }}>Not a Member? <Text style={{ textDecorationLine: 'underline' }}>SignUp Here</Text></Text>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <View style={{ alignItems: 'center', marginTop: 50, flexDirection: 'row' }}>
                        <View style={styles.line} />
                        <Text style={{ color: "#828282", fontSize: 14 }}>Or SignIn with</Text>
                        <View style={styles.line} />
                    </View>
                    <View style={styles.socialButton}>
                        <View>
                            <Image source={IMAGES.Google} style={styles.icon} />
                        </View>
                        <View style={{ marginHorizontal: 10 }}>
                            <Image source={IMAGES.Apple} style={styles.icon} />
                        </View>
                        <View>
                            <Image source={IMAGES.FaceBooke} style={{ height: 40, width: 40, }} />
                        </View>
                    </View>

                </View>
                <View style={styles.guest}>
                    <Text style={{ color: "#828282", fontSize: 14 }}>Enter As Guest</Text>
                </View>

            </View>
        </KeyboardAvoidingView>
    );
};

export default LoginScreen;