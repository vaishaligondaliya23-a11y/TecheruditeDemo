import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import InputWithShadow from '../../components/InputWithShadow';
import ItemComponent from '../../components/ItemComponent';
import axios from 'axios';
import { styles } from './style';
import { useNavigation } from '@react-navigation/native';


const EventListScreen = () => {
    const [events, setEvent] = useState([]);
    const navigation = useNavigation(); // Get the navigation prop

    useEffect(() => {
        axios.post('http://3.7.81.243/projects/plie-api/public/api/events-listing', {}, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer 148|QwsMFixT9w9MgleAbukZtghUuKNZGxgR1SYDOVMk'
            },
        })
            .then(response => {
                console.log('data.events: ', response.data.data.events);
                setEvent(response.data.data.events);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const moveScreen = () => {
        console.log("Move to favourite screen");
        navigation.navigate('FavouriteListScreen'); // Navigate to Favorites screen


    }

    const renderItem = ({ item }) => (
        <ItemComponent item={item} onPressShare={moveScreen} />

    );

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={{}}>
                    <Text style={{ fontSize: 24 }}>Hello Renzo</Text>
                </View>
                <View>
                    <Text style={{ color: '#828282' }}>Are you ready to Dance?</Text>
                </View>
            </View>

            <FlatList
                data={events}
                // keyExtractor={(item) => item.url}
                renderItem={renderItem}
            // contentContainerStyle={styles.containerList}
            />

        </View>
    );
};

;

export default EventListScreen;