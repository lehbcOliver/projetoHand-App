import {StyleSheet} from 'react-native';


const Styles = StyleSheet.create({
    container: {
        flex:1,
    },
    content: {
        position: 'absolute',
        width: '100%',
        top: '40%',
        padding: 20,
    },
    button: {
        backgroundColor: '#06065c',
        width: '100%',
        height: 60,
        marginBottom: 10,
        justifyContent: 'center',
        borderRadius: 10
    },
    button2: {
        backgroundColor: '#fff',
        height: 60,
        marginBottom: 10,
        justifyContent: 'center',
        borderRadius: 10
    },
    power: {
        padding: 10,
        backgroundColor: '#fff',
        height: 60,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    powerImg: {
        width: 40,
        height: 40,
    },
    txtSair: {
        color: '#06065c',
        fontSize: 20,
        marginRight: 10,
        fontWeight: 'bold'
    }
});

export default Styles;