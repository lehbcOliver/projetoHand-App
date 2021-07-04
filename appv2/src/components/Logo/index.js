import React from 'react';
import {View, Text} from 'react-native';
import Styles from './style';
const Logo = () =>{
    return (
        <View style={Styles.divLogo}>
            <Text style={Styles.txtLogo}>LOKAR</Text>
            <Text style={Styles.txtSub}>Sua locadora de veículos</Text>
        </View>
    );
}

export default Logo;