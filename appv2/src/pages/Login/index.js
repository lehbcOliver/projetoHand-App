import React, {useState} from 'react';
import {View, Image, ScrollView, TouchableOpacity, Alert} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import Styles from './styles';
import Logo from '../../components/Logo';
import auth from '@react-native-firebase/auth';
import db from '@react-native-firebase/firestore';
import AsyncStorage  from '@react-native-async-storage/async-storage';

const Login =  ({navigation}) => {

  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  const handleSubmit =  () => {
    const {email, password} = user;
    if(email!== '' && password!== ''){
    auth().signInWithEmailAndPassword(email, password)
    .then(()=> {
      const uuid = auth().currentUser.uid;
      db().collection('Users').doc(uuid).get().then((doc)=>{
        if(doc.exists){
          const userJson = JSON.stringify(doc.data());
          AsyncStorage.setItem('user', userJson);
          navigation.navigate('Home');
        }
      }).catch((error)=> {
        Alert.alert('Error', 'Usuário não existe na base de dados')
      })
    }).catch((error)=>{
      switch(error.code){
        case 'auth/user-not-found':
          Alert.alert('Erro', 'Usuário não cadastrado')
        break;
        case  'auth/wrong-password':
          Alert.alert('Erro', 'Usuário ou senha inválidos');
        break;
        case 'auth/invalid-email':
          Alert.alert('Erro', 'Email inválido');
        break;
      }
    });
    }else {
      Alert.alert('Erro', 'Todos os campos devem ser preenchidos')
    }
  }
  
  return (
    
    <View style={Styles.container}>
        <Image source={require('../../assets/Images/loginBack.png')} />
          <Logo />
       
            <ScrollView style={Styles.content}>
                <TextInput style={Styles.input} label='Email' value={user.email} onChangeText={(value)=>setUser({...user, email:value}) }/>
                <TextInput style={Styles.input} secureTextEntry label='Senha' value={user.password} onChangeText={(value)=>setUser({...user, password:value})} />
                <TouchableOpacity>
                    <Button style={Styles.btnEntrar} color='#fff' onPress={()=>handleSubmit()}>Entrar</Button>
                </TouchableOpacity>
                <TouchableOpacity style={{width: '100%'}}>
                    <Button style={Styles.btnCadastro} color='#06065c' onPress={()=>navigation.navigate('Cadastro')}>Faça seu cadastro</Button>
                </TouchableOpacity>
                
                
            </ScrollView>
        

    </View>
  );

};



export default Login;
