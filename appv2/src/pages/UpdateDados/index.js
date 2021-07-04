import React, {useState, useEffect} from 'react';
import {View, Image, ScrollView, Text} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import Styles from './style';
import Logo from '../../components/Logo';
import Storage  from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';
import db from '@react-native-firebase/firestore';

const updateDados = ({navigation}) => {
   
    const [user, setUser] = useState({
        fullname: '',
        email: '',
        phone: '',
        cpf: '', 
        password: ''

    });

    const handleSubmit = () => {
        const {fullname, email, phone, cpf, password} = user;
        const id = auth().currentUser;
       
        db().collection('Users').doc(id.uid).set({
            fullname: fullname,
            email: email,
            phone: phone,
            cpf: cpf,
            password: password
        },{merge: true}).then(()=>{
            const userJson = JSON.stringify(user);
            Storage.setItem('user', userJson);
            navigation.navigate('Home')
        }).catch(()=>{
            console.log('Erro ao editar')
        })
    }
    
    useEffect(async ()=> {
        const userJson = await  Storage.getItem('user');
        if(userJson) {
            const User = JSON.parse(userJson);
            setUser({...user, 
                fullname: User.fullname,
                email : User.email,
                phone : User.phone,
                cpf : User.cpf,
                password: User.password
            })
        }
    }, []);

    return (
        <View style={Styles.container}>
            <Image source={require('../../assets/Images/Topo.png')}  />
            <Logo />
            <ScrollView style={Styles.content}>
                <Text style={Styles.txtTopo}>Atualize seus dados</Text>
                <TextInput style={Styles.input} label='Seu nome completo' value={user.fullname} onChangeText={(value)=>setUser({...user, fullname:value})} />
                <TextInput style={Styles.input} disabled label='Email' keyboardType='email-address' value={user.email} onChangeText={(value)=>setUser({...user, email: value})}/>
                <TextInput style={Styles.input} label='Telefone' value={user.phone} onChangeText={(value)=>setUser({...user, phone: value})}  />
                <TextInput style={Styles.input} label='CPF' value={user.cpf} onChangeText={(value)=>setUser({...user, cpf: value})} />
                <TextInput style={Styles.input} secureTextEntry label='Sua senha' value={user.password} onChangeText={(value)=>setUser({...user, password:value})} />
                <Button style={Styles.button} color='#fff' onPress={()=>handleSubmit()}>Atualizar dados</Button>
            </ScrollView>
        </View>
    );
}

export default updateDados;