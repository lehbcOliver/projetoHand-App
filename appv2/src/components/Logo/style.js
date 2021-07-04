import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
    divLogo: {
        position: 'absolute',
        top: 100,
        marginLeft: 30
        
    },
    txtLogo: {
        fontSize: 50,
        fontFamily: 'PermanentMarker-Regular',
        color: '#fff',
        textAlign: 'center',
        textShadowColor: '#000',
        textShadowOffset: {
            width: 0,
            height: 5,
        },
        textShadowRadius: 5
    },
    txtSub: {
        fontSize: 16,
        color: '#06065c',
        fontWeight: 'bold',
        textShadowColor: '#fff',
        textShadowOffset: {
            width: 0,
            height: 2,
        },
        textShadowRadius: 5
    },
});

export default Styles;