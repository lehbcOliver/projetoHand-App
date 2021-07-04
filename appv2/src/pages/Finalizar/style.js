import {StyleSheet} from 'react-native';


const Styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#74beee',
    },
    content: {
        padding: 20,
        position: 'absolute',
        top: 380,
    },
    txtReserva: {
        fontSize: 16,
        color: '#d80000',
        fontWeight: 'bold',
        marginBottom: 5
    },
    txtAgencia: {
        fontSize: 15,
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    txtCancela: {
        textAlign:  'center',
        color: '#d80000',
        fontSize: 15,
        fontWeight: 'bold',
        borderRadius: 5
    },
    txtPreferencia: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
    },
    txtNome: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 10
    },
    txtDate: {
        textAlign: 'center',
        fontSize: 14,
        color: '#fff',
    },
    txtValor: {
        textAlign: 'center',
        color: '#d80000',
        fontSize: 17,
        fontWeight: 'bold',
        marginTop: 10
    },
    txtValor1: {
        textAlign: 'center',
        color: 'red',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10
    },



    button: {
        position: 'absolute',
        bottom: 15,
        backgroundColor: 'transparent',
        width: '85%',
        height: 60,
        borderWidth: 1,
        borderColor: '#fff',
        marginLeft: 10,
        borderRadius: 20,
        justifyContent: 'center',
        alignSelf:'center'
    }
    
});

export default Styles;