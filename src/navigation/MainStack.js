/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
import { Image, StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native';
import { createStaticNavigation, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons'; // Import the icon library
import LoginScreen from '../screens/login/LoginScreen';
import FavouriteListScreen from '../screens/FavoutiteList/FavouriteListScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileScreen from '../screens/profile/ProfileScreen';
import SearchScreen from '../screens/search/SearchScreen';
import { IMAGES } from '../resources/Images';
const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

function EventTabNavigator() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: { position: 'absolute' },
            }}>
            <Tab.Screen
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Image source={IMAGES.search} style={{ height: 30, width: 30 }} /> // Use an icon for Event List
                    ),
                }}
                name="search" component={SearchScreen} />
            <Tab.Screen
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Image source={IMAGES.day} style={{ height: 30, width: 30 }} /> // Use an icon for Event List
                    ),
                }} name="Events" component={FavouriteListScreen} />
            <Tab.Screen
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Image source={IMAGES.blackHeart} style={{ height: 30, width: 30 }} /> // Use an icon for Event List
                    ),
                }}
                name="Favourite" component={FavouriteListScreen} />
            <Tab.Screen
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Image source={IMAGES.profile} style={{ height: 30, width: 30 }} /> // Use an icon for Event List
                    ),
                }}
                name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    );
}

function mainStack() {

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='LoginScreen'
                screenOptions={{
                    headerShown: false
                }}>
                <Stack.Screen name="LoginScreen" component={LoginScreen} />
                <Stack.Screen name="Home" component={EventTabNavigator} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default mainStack;
