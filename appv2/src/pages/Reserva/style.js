import {StyleSheet} from 'react-native';


const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        padding: 15,
        marginTop: -15
    },
    txtTopo: {
        fontSize: 16,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#06065c',
    },
    input: {
        backgroundColor: '#fff',
        height: 50,
    },
    inputDate: {
        width: '100%',
        
    },
    labelDate: {
        fontSize: 16,
        color: '#a1a1a1',
        marginVertical: 10
    },
    button: {
        backgroundColor: '#06065c',
        height: 55,
        marginTop: 10,
        justifyContent: 'center'
    }
    
});

export default Styles;