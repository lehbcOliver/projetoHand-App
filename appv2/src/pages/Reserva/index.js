import React, {useState, useEffect} from 'react';
import {View, Image, ScrollView, Text, Alert} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import DatePicker from 'react-native-datepicker';
import Styles from './style';
import Logo from '../../components/Logo';
import Store from '@react-native-async-storage/async-storage';
import firestore from '@react-native-firebase/firestore';
import uuid from 'react-native-uuid';


const updateDados = ({route, navigation}) => {
    const title = route.params.title;
    const value = route.params.value;
    const carro = `${title} - R$ ${value}`;
    const valueFloat = parseFloat(value);
    const [user, setUser] = useState('');

    const [getDados, setGetDados] = useState({
        locador: '',
        veiculo: '',
        estado: '',
        cidade: '',
        dataretirada: '',
        datadevolucao: ''
    })
    
    
    const parseDate = (dt) => {
       const myDt = dt.split('/');
       return(new Date(myDt[2], myDt[1]-1,myDt[0]));
    }
    const dateDiff = (dtvalue1, dtvalue2) => {
        return Math.round((dtvalue1 - dtvalue2)/(1000*60*60*24));
    }
    const calcValue = () => {
        const day = (dateDiff(parseDate(getDados.datadevolucao), parseDate(getDados.dataretirada)));
        const calc =  (valueFloat * day);
        const {locador, veiculo, estado, cidade, dataretirada, datadevolucao} =  getDados;
        firestore().collection('locacao').add({
            id:  uuid.v1(),
            locador: user,
            veiculo: carro,
            estado,
            cidade,
            dataretirada,
            datadevolucao,
            total: calc
        }).then(()=> {
           console.log('Carro',getDados.veiculo)
            navigation.navigate('Finalizar', {calc, user, dataretirada, datadevolucao});
        }).catch((error)=> {
            console.log('Erro ao salvar reserva', error);
        })
        
    }
   
    
    useEffect(async ()=>{
        const txtJson = await Store.getItem('user');
        const User = JSON.parse(txtJson);
        setUser(User.fullname);
    });
    
    return (
        <View style={Styles.container}>
            <Image source={require('../../assets/Images/Topo.png')}  />
            <Logo />
            <ScrollView style={Styles.content}>
                <Text style={Styles.txtTopo}>Agende sua reserva</Text>
                <TextInput style={Styles.input} label='Locador' value={user}  disabled />
                <TextInput style={Styles.input} 
                    label='Veiculo' value={`${title} - R$ ${value}/diária`} disabled />
                <TextInput style={Styles.input} label='Estado' onChangeText={(txt)=>setGetDados({...getDados, estado: txt})} />
                <TextInput style={Styles.input} label='Cidade' onChangeText={(txt)=>setGetDados({...getDados, cidade: txt})}/>
                <Text style={Styles.labelDate}>Data retirada:</Text>
                <DatePicker 
                    format='DD/MM/YYYY'
                    date={getDados.dataretirada}
                    style={Styles.inputDate}
                    onDateChange={(value)=>setGetDados({...getDados, dataretirada: value})}
                />
                <Text style={Styles.labelDate}>Data Devolucao:</Text>
                <DatePicker 
                    format='DD/MM/YYYY'
                    date={getDados.datadevolucao}
                    style={Styles.inputDate}
                    onDateChange={(value)=>setGetDados({...getDados, datadevolucao: value})}
                />
                
                <Button style={Styles.button} color='#fff' onPress={()=>calcValue()}>Agenda sua reserva</Button>
            </ScrollView>
        </View>
    );
}

export default updateDados;