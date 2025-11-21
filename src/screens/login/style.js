import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff",
    },
    header: {
        height: 300, backgroundColor: "#b3b0b0ff", alignItems: 'center', justifyContent: 'space-around'
    },
    headerText: {
        fontSize: 40
    },
    header1: {
        // flex: 0.5
        backgroundColor: "#ffffff",

    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    body: {
        marginHorizontal: 30,
        marginTop: 30
        // marginVertical: 16
    },
    labelStyle: {
        fontSize: 16,
        color: '#333333',
        lineHeight: 24,
    },
    fPass: {
        alignItems: 'flex-end',
        marginHorizontal: 30,
    },
    button: {
        // alignItems: 'flex-end',
        marginHorizontal: 30,
        marginTop: 20,
        // padding: 50,
        width: 100,
        height: 40,
        alignItems: 'center',
        justifyContent: "center",
        backgroundColor: "#21D393",
        alignSelf: 'flex-end',
        borderRadius: 5,
    },
    buttonText: {
        color: "white",
        fontSize: 16,
        fontWeight: 500
    },
    NotMember: {
        alignItems: 'flex-end',
        marginHorizontal: 30,
        marginTop: 16
    },
    line: {
        height: 1,
        width: 100,
        backgroundColor: '#000000',
    },
    socialButton: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 30
    },
    guest: {
        alignItems: 'flex-end',
        marginHorizontal: 30,
    },
    icon: {
        height: 50,
        width: 50
    }

});