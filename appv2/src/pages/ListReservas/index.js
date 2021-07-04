import React, {useState, useEffect} from 'react';
import  {View, Image, ScrollView, Text, FlatList} from 'react-native';
import { Button } from 'react-native-paper';
import database  from '@react-native-firebase/firestore';
import Store from '@react-native-async-storage/async-storage';
import Logo from '../../components/Logo';
import Styles from './style';

const ListReservas = () => {
    const lista = [];
    const [user, setUser] = useState('');
    const [dados, setDados] = useState([]);
    
    const deleteReserva =  (id) => {
        database().collection('locacao').doc(id).delete();
        
    }
    useEffect(async ()=>{
        const txtJson = await Store.getItem('user');
        const User = JSON.parse(txtJson);
        setUser(User.fullname);
    },[]);
    useEffect(async()=> {
       await database().collection('locacao').where('locador','==',user).onSnapshot((query)=>{
           const list = [];
           query.forEach((doc)=> {
            list.push({...doc.data(), id: doc.id})
           });
           setDados(list);
       })
    },[dados])
    return (
        <View style={Styles.container}>
            <Image source={require('../../assets/Images/Topo.png')} />
            <Logo />
            <ScrollView>
                <FlatList style={Styles.list}
                    showsVerticalScrollIndicator={false}
                    data={dados}
                    keyExtractor={item=> item.id}
                    renderItem={({item}) => {
                        return (
                        <View>
                            <View style={Styles.content}>
                            <Text style={Styles.txtVeiculo}>{item.veiculo} /diária</Text> 
                            <Text style={Styles.txtCity}>Cidade: {item.cidade} - Valor total: {item.total},00 </Text>
                            <Text style={Styles.txtData}>Retirada: {item.dataretirada} Devolução: {item.datadevolucao}</Text>
                            <Button style={Styles.button} color='#fff' onPress={()=>deleteReserva(item.id)}>Deletar reserva</Button>
                            </View>
                        </View>
                        )
                    }}
                />
            </ScrollView>
        </View>
    );
}

export default ListReservas;