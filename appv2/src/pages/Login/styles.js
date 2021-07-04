import {StyleSheet} from 'react-native';


const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#74beee',
    },
    
    content: {
        paddingHorizontal: 20,
        position: 'absolute',
        width: '100%',
        bottom: 100,
    },
    input: {
        marginBottom: 15,
        
    },
    btnEntrar: {
        backgroundColor: '#06065c',
        height: 60,
        marginBottom: 10,
        marginTop: 10,
        textAlign: 'center',
        justifyContent: 'center'
    },
    btnCadastro: {
        backgroundColor: '#fff',
        height: 60,
        textAlign: 'center',
        justifyContent: 'center'
    }
});


export default Styles;