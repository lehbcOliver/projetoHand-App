import React, {useState} from 'react';
import {View, Image, Text,ScrollView} from 'react-native';
import {Button} from 'react-native-paper';
import Styles from './style';
import Logo from '../../components/Logo';
import Carros from '../../components/Carros';
const ListCar = ({navigation, title, ImageUri, value, routes}) => {

    const carros = {
        uno: require('../../uploads/uno.png'),
        kwid: require('../../uploads/kwid2.png'),
        onix: require('../../uploads/onix.png'),
        mobi: require('../../uploads/mobi.png'),
        hb20: require('../../uploads/hb20.png'),
        ka: require('../../uploads/fordKa.png'),
        gol: require('../../uploads/gol.png'),
    }
    const [car, setCar] = useState('Fiat uno');
    
    return (
       <View style={Styles.container}>
           <Image source={require('../../assets/Images/Topo.png')} />
           <Logo />
           <Text style={Styles.txtTopo}>Escolha seu veículo</Text>
           <ScrollView style={Styles.listcar}>
               <Carros title='Fiat Uno 1.0' ImageUri={carros.uno} value='98,00' routes={()=>navigation.navigate('Reserva', {title: 'Fiat uno 1.0', value: '98,00'})}/>
               <Carros title='Renault Kwid' ImageUri={carros.kwid} value='76,00' routes={()=>navigation.navigate('Reserva', {title: 'Renaut Kwid', value: '76,00'})}/>
               <Carros title='Onix 1.4' ImageUri={carros.onix} value='180,00' routes={()=>navigation.navigate('Reserva', {title: 'Chevrolet Onix 1.5', value: '180,00'})}/>
               <Carros title='Fiat Mobi Easy' ImageUri={carros.mobi} value='102,00' routes={()=>navigation.navigate('Reserva', {title: 'Fiat Mobi Easy', value: '102,00'})} />
               <Carros title='Hyundai HB20' ImageUri={carros.hb20} value='148,00' routes={()=>navigation.navigate('Reserva', {title: 'Hyundai HB20', value: '148,00'})} />
               <Carros title='Ford Ka 1.0' ImageUri={carros.ka} value='127,00' routes={()=>navigation.navigate('Reserva', {title: 'Ford Ka 1.0', value: '127,00'})} />
               <Carros title='Gol 1.0' ImageUri={carros.gol} value='109,00' routes={()=>navigation.navigate('Reserva', {title: 'volkswagen gol 1.0', value: '109,00'})}/>
           </ScrollView>
       </View>
    );
}

export default ListCar;