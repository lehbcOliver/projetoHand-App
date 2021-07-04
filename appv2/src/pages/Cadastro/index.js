import React, {useState} from 'react';
import {View, Image, ScrollView, Alert} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import Styles from './style';
import Logo from '../../components/Logo';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';


const Cadastro = ({navigation}) => {
    
    const[getUser, setGetUser] = useState({
        fullname: '',
        email: '',
        phone: '',
        cpf: '',
        password: ''
    });

    const handleSubmit =  () => {
      const {fullname, email, phone, cpf, password} = getUser;
      auth().createUserWithEmailAndPassword(email, password)
      .then(()=> {
          const uuid = auth().currentUser;
          firestore().collection('Users').doc(uuid.uid).set({
              fullname,
              email,
              phone,
              cpf, 
              password
          });
          navigation.navigate('Login');
      }).catch((error)=> {
          Alert.alert('Error', 'Erro ao cadastrar');
      })

    }

    return (
        <View style={Styles.container}>
            <Image source={require('../../assets/Images/Topo.png')}  />
            <Logo />
            <ScrollView style={Styles.content}>
                <TextInput style={Styles.input} label='Seu nome completo' value={getUser.fullname} onChangeText={(value)=>setGetUser({...getUser, fullname: value})} />
                <TextInput style={Styles.input} label='Email' keyboardType='email-address' value={getUser.email} onChangeText={(value)=>setGetUser({...getUser, email: value})}  />
                <TextInput style={Styles.input} label='Telefone' value={getUser.phone} onChangeText={(value)=>setGetUser({...getUser, phone: value})} />
                <TextInput style={Styles.input} label='CPF' value={getUser.cpf} onChangeText={(value)=>setGetUser({...getUser, cpf: value})}   />
                <TextInput style={Styles.input} secureTextEntry label='Sua senha' value={getUser.password} onChangeText={(value)=>setGetUser({...getUser, password: value})}  />
                <Button style={Styles.button} color='#fff'  onPress={()=>{handleSubmit()}}>Cadastrar</Button>
            </ScrollView>
        </View>
    );
}

export default Cadastro;