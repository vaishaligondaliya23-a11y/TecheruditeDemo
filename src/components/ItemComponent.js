import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';
import { IMAGES } from '../resources/Images';



export default function ItemComponent({ item, onPressShare }) {
    console.log("ItemComponent Item: ", item.event_profile_img);

    return (
        <View style={styles.item}>
            <Image source={{ uri: item.event_profile_img }} style={styles.image} />
            <View style={styles.content}>
                <View>
                    <Text style={styles.title}>{item.event_name}</Text>
                    <Text style={styles.date}>{item.readable_from_date ? item.readable_from_date.substring(0, 10) : ''}</Text>
                    <Text style={styles.excerpt}>{'€30 - €100'}</Text>
                    <View style={styles.bottomButton}>
                        <View style={styles.button}>
                            <Text>WorkShop</Text>
                        </View>
                        <View style={[styles.button, { marginLeft: 10 }]}>
                            <Text>Bachata</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{ alignItems: "flex-end" }}>
                <View>
                    <Image source={IMAGES.arrow} style={styles.icon} />
                </View>
                <View style={{ marginVertical: 20 }}>
                    <Text>Barlin Germeny</Text>
                </View>
                <View style={{ flexDirection: "row" }}>

                    <View>
                        <Image source={IMAGES.share} style={styles.icon} />
                    </View>
                    <TouchableOpacity onPress={() => onPressShare()}>
                        <Image source={IMAGES.heart} style={styles.icon} />
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        padding: 12,
        marginVertical: 6,
        marginHorizontal: 10,
        backgroundColor: '#fafafa',
        borderRadius: 8,
        elevation: 2,
    },
    image: {
        width: 100,
        // height: 80,
        marginRight: 12,
        borderRadius: 8,
        backgroundColor: '#eee',
    },
    content: {
        flex: 1,
        flexDirection: "row",
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 2,
    },
    author: {
        color: '#555',
        marginBottom: 2,
    },
    date: {
        color: '#34A853',
        fontSize: 12,
        marginBottom: 2,
    },
    excerpt: {
        color: '#828282',
        marginBottom: 4,
    },
    bottomButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#dbdde2ff',
        padding: 6,
        borderRadius: 5
    },
    icon: {
        height: 30,
        width: 30,
    },
    actionText: { color: 'white' },
});