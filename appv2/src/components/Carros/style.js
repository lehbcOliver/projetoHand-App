import {StyleSheet} from 'react-native';


const Styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 120,
        backgroundColor: '#fbfbfa',
        display: 'flex',
        flexDirection: 'row',
        padding: 20,
        borderRadius: 10,
        marginBottom: 15,
    },
    description: {
        width: '40%',
        height: 80,
        justifyContent: 'center',
        alignItems: 'center'
    },
    carName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#06065c'
    },

    img: {
        width: 140,
        height: 80,
    },
    list: {
        marginLeft: 10,
        marginRight: 20,
    },
    item: {
        fontSize: 12,
    },
    button: {
        backgroundColor: '#06065c',
        height: 40,
        marginTop:10,
    },
    txtValue: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#0f0'
    }
});

export default Styles;