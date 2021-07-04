import React from 'react';
import {View, Image, TouchableOpacity, Text, StatusBar} from 'react-native';
import {Button} from 'react-native-paper';
import Styles from './style';
import Logo from '../../components/Logo';
import Store from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';
import RNRestart from 'react-native-restart'


const Home = ({navigation}) => {

    const clearStore = async  () => {
         Store.removeItem('user').then(()=>{
            auth().signOut().then(()=> {
                RNRestart.Restart();
            }).catch((error)=> {
                console.log('Erro ao signout')
            })
         }).catch((error)=>{
             console.log('Erro ao remover User')
         })
        
    }

    return (
        <View style={Styles.container}>
            <StatusBar backgroundColor='#000'/>
            <Image source={require('../../assets/Images/Home.png')} />
            <Logo />
            
            
            <View style={Styles.content}>
                <Button style={Styles.button} color='#fff' onPress={()=>navigation.navigate('ListCar')}>Faça sua reserva</Button>
                <Button style={Styles.button2} color='#06065c' onPress={()=>navigation.navigate('UpdateDados')}>Alterar seus dados</Button>
                <Button style={Styles.button} color='#fff' onPress={()=>navigation.navigate('Reservas')}>Listar suas reservas</Button>
                <TouchableOpacity style={Styles.power} onPress={()=>clearStore()} >
                <Text style={Styles.txtSair}>Sair</Text>
                <Image style={Styles.powerImg} source={require('../../assets/Images/powerOff.png')} />
            </TouchableOpacity>
            </View>
        </View>
    );
}

export default Home;